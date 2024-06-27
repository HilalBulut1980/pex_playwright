import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.ZubehoerConfigurator = class ZubehoerConfigurator {

    constructor(page) {
        this.page = page;
    }

    async configureProduct(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

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
        let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), testcase.vat] })).toFixed(2);
        let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, testcase.anzahl] })).toFixed(2)
        let summe_backend = preis_mwst_total;

        // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, testcase.vat] }), testcase.mwst_1] })).toFixed(4);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst = 0;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
            total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
            let sieSparen_mwst = rabatt_betrag_mwst

            total_backend = (jsonLogic.apply({ '+': [summe_backend, versandkosten] })).toFixed(2)

            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_mwst, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        }


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        preis = preis.replace('.', ',')
        preis_total = preis_total.replace('.', ',')
        preis_mwst = preis_mwst.replace('.', ',')
        preis_mwst_total = preis_mwst_total.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',')
        total_mwst = total_mwst.replace('.', ',')
        summe_backend = summe_backend.replace('.', ',')
        total_backend = total_backend.replace('.', ',')
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


        // ---------------------------------------- START PRODUCT CONFIGURATION ----------------------------------------------------------//
        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        // check base price
        await expect(this.page.locator(".price_amount span.price")).toContainText(testcase.abPreis)

        // set additional option if selected in testcase
        if (testcase.option1 != "") {
            await this.page.selectOption(('.additional_option_item:nth-child(1) select'), { label: testcase.option1 })
        }
        if (testcase.option2 != "") {
            await this.page.selectOption(('.additional_option_item:nth-child(2) select'), { label: testcase.option2 })
        }
        if (testcase.option3 != "") {
            await this.page.selectOption(('.additional_option_item:nth-child(3) select'), { label: testcase.option3 })
        }

        // check price
        await expect(this.page.locator(".price_amount span.price")).toContainText(preis)

        // set quantity and add to cart
        await this.page.locator('#qty').clear();
        await this.page.locator('#qty').fill(((testcase.anzahl).toString()), { force: true });
        await this.page.locator('.add_to_cart_button').click();
        // await this.page.pause()

        await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));
        // await this.page.pause()

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        await newCart.checkCartSimple(preis, warenkorbTotal, warenkorbTotal, testcase.rabatt_code, rabatt_betrag, sieSparen_new, warenkorbTotal_new)
        await newCheckout.checkOut(testcase.produkttyp, testcase.missing_name, testcase.login, testcase.prefix, testcase.first_name, testcase.last_name, testcase.company_name, testcase.vatID, testcase.email, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.password, testcase.prefix_2, testcase.first_name_2, testcase.last_name_2, testcase.company_name_2, testcase.vatID_2, testcase.street_2, testcase.postal_code_2, testcase.city_2, testcase.state_2, testcase.phone_2, versandkosten, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.produkttyp, testcase.payment, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, testcase.kosten_stab_checkout, testcase.rabatt_code, rabatt_betrag_mwst, versandkosten, testcase.sieSparen_checkout, total_mwst)
        await newCheckout.placeOrder(testcase.produkttyp, testcase.rmg, testcase.payment, testcase.canceled_payment, testcase.failed_payment, preis_mwst, summe_backend, testcase.kosten_befestigung, testcase.kosten_befestigung_total, testcase.kosten_stab_backend, testcase.kosten_stab_checkout, versandkosten, total_backend, testcase.mwst_1, steuer_betrag, testcase.vat_rate_2, testcase.vat_bedienstab, testcase.vat_rate_3, testcase.vat_befestigung, steuer_betrag_gesamt, rabatt_betrag_mwst, testcase.rabattbetrag_backend_1, testcase.rabattbetrag_backend_2, testcase.rabatt_code)
    }
}