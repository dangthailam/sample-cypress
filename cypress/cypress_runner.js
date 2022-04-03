const fs = require('fs')
const cypress = require('cypress')
const yargs = require('yargs')
const rm = require('rimraf')
const reporter = require('cucumber-html-reporter')
const cypressConfig = require('../cypress')
const reportFolder = 'cypress/reports'
const reportFiles = [
    `${reportFolder}/output/*`,
    `${reportFolder}/report.html`,
    `${reportFolder}/report.html.json`
]
const argv = yargs
    .options({
        browser: {
            alias: 'browser',
            choices: [
                'chrome',
                'electron',
                '/usr/bin/firefox',
                '/home/tbnle/chrome-linux/chrome-wrapper'
            ],
            default: 'chrome',
            describe: 'browser that you wanna run tests on'
        },
        envWorking: {
            alias: 'env-working',
            choices: [
                'local',
                'production',
                'staging0',
                'staging1',
                'staging2',
                'staging3',
                'preview',
                'preprod'
            ],
            default: 'preprod',
            describe: 'envWorking that you wanna run tests on'
        },
        headless: {
            alias: 'headless',
            default: true,
            type: 'boolean'
        },
        key: {
            alias: 'key',
            describe: 'secret key to record on dashboard'
        },
        record: {
            alias: 'record',
            default: false,
            describe:
                'enable/disable dashboard recording. If true, key is needed',
            type: 'boolean'
        },
        tags: {
            alias: 'tags',
            describe: 'smart tag on test case (e.g ekino or fivue)'
        },
        video: {
            alias: 'video',
            default: false,
            describe: 'enable/disable video recording',
            type: 'boolean'
        },
        mode: {
            alias: 'mode',
            default: 'run',
            describe: 'run or open'
        }
    })
    .help().argv

if (!fs.existsSync(reportFolder)) {
    fs.mkdirSync(reportFolder)
}

reportFiles.forEach(filePath => {
    rm(filePath, error => {
        if (error) {
            console.error(
                `Error while removing existing report files ${filePath}: ${error}`
            )
            process.exit(1)
        }
        console.log(`Removing report files in ${filePath} successfully!`)
    })
})

const envData = {
    production: 'https://immobilier.lefigaro.fr'
}
cypressConfig.baseUrl = envData[argv.envWorking]
cypressConfig.video = argv.video
cypressConfig.env = {
    TAGS: argv.tags
}

if (argv.mode === 'run') {
    cypress
        .run({
            browser: argv.browser,
            headed: !argv.headless,
            config: cypressConfig,
            key: argv.key,
            record: argv.record
        })
        .then(results => {
            generateReport(results.config)
        })
        .catch(error => {
            console.error('errors: ', error)
            process.exit(1)
        })
} else {
    cypress.open({
        config: cypressConfig,
        configFile: false,
        browser: argv.browser
    })
}

function generateReport(config) {
    var options = {
        theme: 'hierarchy',
        jsonDir: config.reporterOptions.jsonDir,
        output: config.reporterOptions.outputFile,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        ignoreBadJsonFile: true
    }

    reporter.generate(options)
}
