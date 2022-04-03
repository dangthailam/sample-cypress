import mutationsID from '../../../src/store/mutations/mutationsID'
import { GA_CATEGORY } from '../../../src/analytics/tagcoConst'

describe('Tags', () => {
    const getStore = () => cy.window().its('app.$store')

    it('[Home Page] Forum cliquez sur le lien du forum', () => {
        cy.visit('/')
        cy.get(
            '#homepage-v2 > section.container-forum-conseils > div > div.forum-link > a'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'navigation',
            ga_action: 'click',
            ga_label: 'hp::Poser_ma_question',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Cliquer sur "Voir tous les articles"', () => {
        cy.visit('/').then(() => {
            const tagsArray = []
            cy.resetTagsArray(tagsArray)
            cy.contains('Voir tous les articles')
                .click()
                .then(() => {
                    cy.containTagsArray(
                        {
                            ga_events: 'ga_click',
                            ga_action: 'click',
                            ga_category: GA_CATEGORY.NAVIGATION,
                            ga_label: 'hp:: Voir_tous_les_articles',
                            GA_nonInteraction: '',
                            promoGA_name: '',
                            promoGA_creative: '',
                            promoGA_position: '',
                            ecommerceGA_action: ''
                        },
                        tagsArray
                    )
                })
        })
    })

    it('[Home Page] Cliquer sur "Voir toutes les vidéos conseils"', () => {
        cy.visit('/').then(() => {
            const tagsArray = []
            cy.resetTagsArray(tagsArray)
            cy.contains('Voir toutes les vidéos conseils')
                .click()
                .then(() => {
                    cy.containTagsArray(
                        {
                            ga_events: 'ga_click',
                            ga_action: 'click',
                            ga_category: GA_CATEGORY.NAVIGATION,
                            ga_label: 'hp:: Voir_toutes_les_videos_conseils',
                            GA_nonInteraction: '',
                            promoGA_name: '',
                            promoGA_creative: '',
                            promoGA_position: '',
                            ecommerceGA_action: ''
                        },
                        tagsArray
                    )
                })
        })
    })

    it('[Home Page] Recherche - Cliquer sur Rechercher', () => {
        cy.visit('/').then(() => {
            cy.resetTags()
            cy.get('.search-input').type('Pari')
            cy.get(
                'div.search-input-holder.focus.multipleLines > div.select-list > div > div:nth-child(2) > div:nth-child(3)'
            ).click()
            cy.get('.button-ok-motor')
                .click()
                .then(() => {
                    cy.containTags({
                        ga_events: 'ga_click',
                        ga_category: 'navigation',
                        ga_action: 'click',
                        ga_label: 'home::mini_moteur::voir_les_offres',
                        GA_nonInteraction: '',
                        promoGA_name: '',
                        promoGA_position: '',
                        promoGA_creative: '',
                        ecommerceGA_action: ''
                    })
                })
        })
    })

    it('[Home Page] Footer - Cliquer sur Android', () => {
        cy.visit('/')
        cy.get(
            'footer > div > div.links-app > ul > li:nth-child(2) > a[href*=\'android\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::app_android',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur Apple', () => {
        cy.visit('/')
        cy.get(
            'footer > div > div.links-app > ul > li:nth-child(1) > a[href*=\'apple\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::app_IOS',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur Facebook', () => {
        cy.visit('/')
        cy.get(
            'footer > div > div.links-social > ul > li:nth-child(1) > a[href*=\'facebook\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::facebook',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur Twitter', () => {
        // cy.visit('/')
        cy.get(
            'footer > div > div.links-social > ul > li:nth-child(2) > a[href*=\'twitter\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::twitter',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur Figaro Immo', () => {
        cy.visit('/')
        cy.get(
            'footer > ul.footer-sphere > li:nth-child(1) > a[href*=\'annonces\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::logo_FI',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur Figaro Immonneuf', () => {
        cy.visit('/')
        cy.get(
            'footer > ul.footer-sphere > li:nth-child(2) > a[href*=\'immoneuf\']'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'sortie',
            ga_action: 'click',
            ga_label: 'footer::logo_FI9',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Home Page] Footer - Cliquer sur PLF', () => {
        cy.visit('/')
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'footer > ul.footer-sphere > li:nth-child(3) > a[href*=\'proprietes\']'
        ).click()
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'auto_promo',
                ga_label: 'footer::logo_PLF',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Home Page] Footer - Cliquer sur Achat-terrain', () => {
        cy.visit('/')
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'footer > ul.footer-sphere > li:nth-child(4) > a[href*=\'achat-terrain\']'
        ).click()
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'auto_promo',
                ga_label: 'footer::logo_AT',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Home Page] Footer - Cliquer sur International', () => {
        cy.visit('/')
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'footer > ul.footer-sphere > li:nth-child(5) > a[href*=\'international\']'
        ).click()
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'sortie',
                ga_action: 'click',
                ga_label: 'footer::logo_international',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Page Liste] DI - Afficher DI', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-toulouse+31000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.get(
                'div.list-item-details > div.list-item-details__footer > div.list-item-details__actions > button.btn.btn-primary.btn-plain.btn-to-contact:first'
            ).click()
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'lightbox',
                ga_action: 'affichage_form_demande_info',
                ga_label: 'aff_di::liste_di',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'aff_optin',
                ga_action: 'affichage_optin_alerte',
                ga_label: 'aff_alerte::optin_form_demande_info',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
        })
    })

    it('[Page Liste] DI - Cliquer Clickphone', () => {
        cy.get(
            'main > div.modal-overlay.modal-di > div > div > div > div > div.form-head > button'
        ).click()
        cy.containTags({
            ga_events: 'ga_rdm',
            ga_category: 'rendement',
            ga_action: 'clickphone',
            ga_label: 'clickphone::liste',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Page Liste] DI - Confirmer DI (optin coché)', () => {
        cy.get(
            'main > div.modal-overlay.modal-di > div > div > div > div > form > fieldset > div:nth-child(2) > ul > li:nth-child(2) > label'
        ).click()
        cy.get(
            'main > div.modal-overlay.modal-di > div > div > div > div > form > fieldset > div:nth-child(8) > ul > li:nth-child(2) > label'
        ).click()
        cy.get('#name').type('nom')
        cy.get('#email').type('aaa@aaa.fr')
        cy.get('#tel').type('0655887744')
        cy.get('#js-optin-partner').click()
        cy.get(
            'main > div.modal-overlay.modal-di > div > div > div > div > form > fieldset > div.action-form > button'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'aff_optin',
            ga_action: 'affichage_optin_partenaire',
            ga_label: 'aff_optin::optin_form_demande_info',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'retention',
            ga_action: 'valid_optin_partenaire',
            ga_label: 'form_di::optin_partenaire',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'rendement',
            ga_action: 'conf_envoi_form',
            ga_label: 'conf_envoi_form::liste_di',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Page Liste] Création d\'alerte - Afficher haut de page', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.resetTags()
            cy.contains('Créer une alerte').click({ force: true })
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'lightbox',
                ga_action: 'affichage_haut_de_page',
                ga_label: 'aff_alerte::liste::affichage_haut_de_page',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
        })
    })

    it('[Page Liste] Création d\'alerte - Confirmer haut de page (optin coché)', () => {
        cy.resetTags()
        cy.get(
            'main > div.modal-overlay.modal-alert > div > div > div.modal-content__inner > div > div > div.form-optin-alert.opt-in'
        ).click()
        cy.get('.modal .form-email>.submit-alert').click({ force: true })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'retention',
            ga_action: 'valid_alerte',
            ga_label: 'conf_alerte::liste::affichage_haut_de_page',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'retention',
            ga_action: 'valid_alerte',
            ga_label: 'conf_alerte::liste::optin_form_di',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'aff_optin',
            ga_action: 'affichage_optin_oneToAll',
            ga_label: 'aff_oneToAll::alerte::liste::lightbox_auto',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Page Liste] Création d\'alerte - Afficher sticky', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.resetTags()
            cy.document().then(doc => {
                cy.contains(
                    'Être alerté des prochaines annonces'
                ).scrollIntoView({
                    duration: 200
                })
                getStore().then(store => {
                    store.commit(mutationsID.uiSetListScrolled, true)
                })
                getStore()
                    .its('state.ui.isListScrolled')
                    .should('eq', true)
            })
            cy.contains('Créer une alerte').click({ force: true })
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'lightbox',
                ga_action: 'affichage_sticky',
                ga_label: 'aff_alerte::liste::affichage_sticky',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
        })
    })

    it('[Page Liste] Création d\'alerte - Confirmer sticky', () => {
        cy.resetTags()
        getStore().then(store => {
            store.commit(mutationsID.uiSetListScrolled, true)
        })
        cy.get('.modal .form-email>.submit-alert').click({ force: true })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'retention',
            ga_action: 'valid_alerte',
            ga_label: 'conf_alerte::liste::affichage_sticky',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Page Liste] Création d\'alerte - Clic sur \'Enregistrer cette recherche\'', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            const tagsArray = []
            cy.resetTagsArray(tagsArray)
            cy.contains('Enregistrer cette recherche').click()
            cy.containTagsArray(
                {
                    ga_events: 'ga_click',
                    ga_category: 'lightbox',
                    ga_action: 'affichage_haut_de_page',
                    ga_label: 'aff_alerte::liste::affichage_compteur',
                    GA_nonInteraction: '',
                    promoGA_name: '',
                    promoGA_position: '',
                    promoGA_creative: '',
                    ecommerceGA_action: ''
                },
                tagsArray
            )
        })
    })

    it('[Page Liste] Création d\'alerte - Clic sur \'Être alerté des prochaines annonces\'', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            const tagsArray = []
            cy.resetTagsArray(tagsArray)
            cy.contains('Être alerté des prochaines annonces').click()
            cy.containTagsArray(
                {
                    ga_events: 'ga_click',
                    ga_category: 'lightbox',
                    ga_action: 'affichage_haut_de_page',
                    ga_label: 'aff_alerte::liste::affichage_pagination',
                    GA_nonInteraction: '',
                    promoGA_name: '',
                    promoGA_position: '',
                    promoGA_creative: '',
                    ecommerceGA_action: ''
                },
                tagsArray
            )
        })
    })

    it('[Page Liste] Création d\'alerte - Afficher zero résultat', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente'
        ).then(() => {
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'lightbox',
                ga_action: 'affichage_zero_resultat',
                ga_label: 'aff_alerte::liste::affichage_zero_resultat',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
        })
    })

    it('[Page Liste] Création d\'alerte - Valider zéro résultat', () => {
        cy.get('.form-email>.submit-alert').click({ force: true })
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'retention',
            ga_action: 'valid_alerte',
            ga_label: 'conf_alerte::liste::affichage_zero_resultat',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })

    it('[Page Liste] Favoris - Cliquer ajouter favoris', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.get(
                'div.list-item-details > div.list-item-details__footer > div.list-item-details__actions > button.btn.btn-neutral.btn-shadowed.btn-to-fav:first'
            ).click()
            cy.containTags({
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'partager',
                ga_label: 'liste::ajouter_favori',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            })
            // TODO: change me, because remove login feature
            cy.get('div.modal-overlay.modal-login > div > button').click()
        })
    })

    it('[Page Liste] DI - Afficher DI', () => {
        cy.get(
            'div.list-item-details > div.list-item-details__footer > div.list-item-details__actions > button.btn.btn-primary.btn-plain.btn-to-contact:first'
        ).click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'lightbox',
            ga_action: 'affichage_form_demande_info',
            ga_label: 'aff_di::liste_di',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
        cy.get('div.modal-overlay.modal-di > div > button').click()
    })

    it('[Page Liste] Crédit Agricole - Afficher bouton mensualité', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.containTags({
                ga_events: 'ga_promo_impression',
                ga_category: 'partenaires',
                ga_action: 'credit_agricole',
                ga_label: 'liste::bouton_mensualite',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: 'liste',
                promoGA_creative: 'bouton_mensualite',
                ecommerceGA_action: 'promo_view'
            })
        })
    })

    it('[Page Liste] Crédit Agricole - Afficher bouton simulateur', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            cy.get('div.filters-list-select > div > div.switch > button:first')
                .click()
                .then(() => {
                    cy.containTags({
                        ga_events: 'ga_promo_impression',
                        ga_category: 'partenaires',
                        ga_action: 'credit_agricole',
                        ga_label: 'liste::bandeau_bas_de_page',
                        GA_nonInteraction: '',
                        promoGA_name: '',
                        promoGA_position: 'liste',
                        promoGA_creative: 'bandeau_bas_de_page',
                        ecommerceGA_action: 'promo_view'
                    })
                })
        })
    })

    it('[Page Liste] Crédit Agricole - Cliquer bouton simulateur', () => {
        cy.contains('Calculez votre emprunt')
            .click()
            .then(() => {
                cy.containTags({
                    ga_events: 'ga_promo_click',
                    ga_category: 'partenaires',
                    ga_action: 'credit_agricole',
                    ga_label: 'liste::bandeau_bas_de_page',
                    GA_nonInteraction: '',
                    promoGA_name: '',
                    promoGA_position: 'liste',
                    promoGA_creative: 'bandeau_bas_de_page',
                    ecommerceGA_action: 'promo_click'
                })
            })
    })

    it('[Page Liste] Crédit Agricole - Cliquer bouton mensualité', () => {
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get('.container-partner-list:first').click()
        cy.containTagsArray(
            {
                ga_events: 'ga_promo_click',
                ga_category: 'partenaires',
                ga_action: 'credit_agricole',
                ga_label: 'liste::bouton_mensualite',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: 'liste',
                promoGA_creative: 'bouton_mensualite',
                ecommerceGA_action: 'promo_click'
            },
            tagsArray
        )
    })

    it('[Page Liste] Clic sur vue Liste', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        ).then(() => {
            const tagsArray = []
            cy.resetTagsArray(tagsArray)
            cy.get(
                'div.filters-list-select > div > div.switch > button:first'
            ).click()
            cy.containTagsArray(
                {
                    ga_events: 'ga_click',
                    ga_category: 'navigation',
                    ga_action: 'click',
                    ga_label: 'liste::clic_bouton_liste',
                    GA_nonInteraction: '',
                    promoGA_name: '',
                    promoGA_position: '',
                    promoGA_creative: '',
                    ecommerceGA_action: ''
                },
                tagsArray
            )
        })
    })

    it('[Page Liste] Clic sur vue Grille', () => {
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'div.filters-list-select > div > div.switch > button:eq(1)'
        ).click()
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'click',
                ga_label: 'liste::clic_bouton_grille',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Page Liste] Redirection - Figaro Immoneuf', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        )
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'main > div.list-annonces-holder.container-items > section > div > section > div.list-item:nth-child(3) ' +
                '> div.list-item-medias > div.list-item-medias__imgs img:first'
        ).click({ force: true })
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'auto_promo',
                ga_label: 'liste::redirection_EI9',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Page Liste] Redirection - PLF', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=plf'
        )
        const tagsArray = []
        cy.resetTagsArray(tagsArray)
        cy.get(
            'main > div.list-annonces-holder.container-items > section > div > section > div.list-item:nth-child(3) ' +
                '> div.list-item-medias > div.list-item-medias__imgs img:first'
        ).click()
        cy.containTagsArray(
            {
                ga_events: 'ga_click',
                ga_category: 'navigation',
                ga_action: 'auto_promo',
                ga_label: 'liste::redirection_PLF',
                GA_nonInteraction: '',
                promoGA_name: '',
                promoGA_position: '',
                promoGA_creative: '',
                ecommerceGA_action: ''
            },
            tagsArray
        )
    })

    it('[Page Liste] Pagination - Changer de page', () => {
        cy.visit(
            '/annonces/immobilier-vente-bien-strasbourg+67000.html?transaction=vente&originSite=figimmo,figimmoneuf,plf&option=viager'
        )
        cy.resetTags()
        cy.contains('Suivant').scrollIntoView({
            easing: 'linear',
            duration: 1000
        })
        cy.contains('Suivant').click()
        cy.containTags({
            ga_events: 'ga_click',
            ga_category: 'navigation',
            ga_action: 'click',
            ga_label: 'liste::annonce_pagination_bas',
            GA_nonInteraction: '',
            promoGA_name: '',
            promoGA_position: '',
            promoGA_creative: '',
            ecommerceGA_action: ''
        })
    })
})
