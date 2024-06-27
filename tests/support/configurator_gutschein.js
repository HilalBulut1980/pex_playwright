import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.GutscheinConfigurator = class GutscheinConfigurator {

    constructor(page) {
        this.page = page;
    }

    async configureProduct(testcase) {

        let preis = testcase.grundpreis.toFixed(2)
        let preis_total = (jsonLogic.apply({ '*': [preis, testcase.anzahl] })).toFixed(2)

        let warenkorbTotal = preis_total
        let sieSparen;

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        // rabatt_betrag, sieSparen_new, total_cart_new
        let rabatt_betrag;
        let sieSparen_new;
        let warenkorbTotal_new;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // cart
            rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_new = rabatt_betrag
            warenkorbTotal_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_b] })).toFixed(2);

            rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            warenkorbTotal_new = warenkorbTotal_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        }

        //-------------------------------------------------------------------------------------------------------------------------------\\

        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2);
        let preis_mwst = preis;
        let preis_mwst_total = preis_total;
        let sieSparen_mwst;


        let einzel_backend = preis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_mwst = preis_total;
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, testcase.vat] }), testcase.mwst_1] })).toFixed(4);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
        // let steuer_betrag_2
        // let steuer_betrag_3
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        // let sideProduct_1
        // let sideProduct_1_total
        // let sideProduct_2
        // let sideProduct_2_total
        // let sideProduct_3
        // let sideProduct_3_total
        // let sideProduct_4
        // let sideProduct_4_total
        // let sideProduct_5
        // let sideProduct_5_total

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst = 0;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_mwst = rabatt_betrag_mwst
            total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)

            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        preis = preis.replace('.', ',')
        preis_total = preis_total.replace('.', ',')
        preis_mwst = preis_mwst.replace('.', ',')
        preis_mwst_total = preis_mwst_total.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        versandkosten = versandkosten.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit product page
        await this.page.goto(testcase.url)

        //-------------------CONFIGURATION--------------------\\

        if (testcase.modell == "Email") {

            //fill in form
            await this.page.locator('#product_addtocart_form_3561 > .individ_options.clearfix > :nth-child(1) input').fill(testcase.beschenkter);
            await this.page.locator('#product_addtocart_form_3561 > .individ_options.clearfix > :nth-child(2) input').fill(testcase.betrag);
            await this.page.locator('#product_addtocart_form_3561 > .individ_options.clearfix > :nth-child(3) input').fill(testcase.nachricht);

            //check price
            await expect(this.page.locator("#product-price-3561 .price")).toContainText(preis);

            // enter qty
            await this.page.locator("#product_addtocart_form_3561 > .add_to_cart input").clear();
            await this.page.locator("#product_addtocart_form_3561 > .add_to_cart input").fill((testcase.anzahl).toString());

            // add to cart
            await this.page.locator("#product_addtocart_form_3561 > div.add_to_cart > button").click()
            await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));
            // await this.page.pause()

        }
        else if (testcase.modell == "Post") {
            // fill in form
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(1) input').fill(testcase.beschenkter);
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(2) input').fill(testcase.strasse);
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(3) input').fill(testcase.betrag);
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(4) input').fill(testcase.plz);
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(5) input').fill(testcase.nachricht);
            await this.page.locator('#product_addtocart_form_3562 > .individ_options.clearfix > :nth-child(6) input').fill(testcase.stadt);

            //check price
            await expect(this.page.locator("#product-price-3562 .price")).toContainText(preis)

            // enter qty
            await this.page.locator("#product_addtocart_form_3562 > .add_to_cart input").clear();
            await this.page.locator("#product_addtocart_form_3562 > .add_to_cart input").fill((testcase.anzahl).toString());

            // add to cart
            await this.page.locator("#product_addtocart_form_3562 > div.add_to_cart > button").click()
            await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));
            // await this.page.pause()
        }

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        //-------------------CHECKING PRICES IN CART--------------------\\
        await newCart.checkCartSimple(preis, warenkorbTotal, warenkorbTotal, testcase.rabatt_code, rabatt_betrag, sieSparen_new, warenkorbTotal_new)

        //-------------------CHECKOUT------------------------------------\\
        await newCheckout.checkOut(testcase.produkttyp, testcase.missing_name, testcase.login, testcase.prefix, testcase.first_name, testcase.last_name, testcase.company_name, testcase.vatID, testcase.email, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.password, testcase.prefix_2, testcase.first_name_2, testcase.last_name_2, testcase.company_name_2, testcase.vatID_2, testcase.street_2, testcase.postal_code_2, testcase.city_2, testcase.state_2, testcase.phone_2, versandkosten, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.produkttyp, testcase.payment, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, testcase.kosten_stab_checkout, testcase.rabatt_code, rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.produkttyp, testcase.rmg, testcase.payment, testcase.canceled_payment, testcase.failed_payment, preis_mwst, summe_backend, testcase.kosten_befestigung, testcase.kosten_befestigung_total, testcase.kosten_stab_backend, testcase.kosten_stab_checkout, versandkosten, total_backend, testcase.mwst_1, steuer_betrag, testcase.vat_rate_2, testcase.vat_bedienstab, testcase.vat_rate_3, testcase.vat_befestigung, steuer_betrag_gesamt, rabatt_betrag_mwst, testcase.rabattbetrag_backend_1, testcase.rabattbetrag_backend_2, testcase.rabatt_code)
    }
}