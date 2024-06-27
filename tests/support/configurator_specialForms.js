import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.SpecialForms = class SpecialForms {

    constructor(page) {
        this.page = page;
    }

    async configureProduct(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        // GRUNDPREISE
        // 1. Stoff:
        let grundpreis = testcase.grundpreis;
        let grundPreis_red = (jsonLogic.apply({ '-': [grundpreis, testcase.discount_2] })).toFixed(2);  //Abzug 1. Rabatt
        grundPreis_red = (jsonLogic.apply({ '-': [grundPreis_red, testcase.discount_3] })).toFixed(2); //Abzug 2. Rabatt
        grundPreis_red = (jsonLogic.apply({ '*': [grundPreis_red, testcase.discount_1] })).toFixed(2); //Abzug 3. Rabatt (prozentual)
        //grundpreis 1. Stoff mit neuer mwst
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundpreis, 119] }), testcase.vat] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);

        // 2. Stoff --> nur bei VSSD, F3
        let grundpreis_2 = testcase.grundpreis_b;
        let grundPreis_red_2 = (jsonLogic.apply({ '-': [grundpreis_2, testcase.discount_2b] })).toFixed(2);  //Abzug 1. Rabatt
        grundPreis_red_2 = (jsonLogic.apply({ '-': [grundPreis_red_2, testcase.discount_3b] })).toFixed(2); //Abzug 2. Rabatt
        grundPreis_red_2 = (jsonLogic.apply({ '*': [grundPreis_red_2, testcase.discount_1b] })).toFixed(2); //Abzug 3. Rabatt (prozentual)
        //grundpreis 2. Stoff mit neuer mwst
        let grundpreis_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundpreis_2, 119] }), testcase.vat] })).toFixed(2);
        let grundPreis_red_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red_2, 119] }), testcase.vat] })).toFixed(2);

        //zusätze
        let befestigung = testcase.befestigung_preis;
        let befestigung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung, 119] }), testcase.vat] })).toFixed(2);
        let befestigung_mwst_total = (jsonLogic.apply({ '*': [befestigung_mwst, testcase.anzahl] })).toFixed(2)
        let bediengriff = testcase.bediengriff_preis;
        let bediengriff_aufpreis = testcase.bediengriff_aufpreis;
        let bediengriff_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bediengriff, 119] }), testcase.vat] })).toFixed(2);
        let bediengriff_aufpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bediengriff_aufpreis, 119] }), testcase.vat] })).toFixed(2);
        let bedienstab = testcase.bedienstab_preis.toFixed(2);
        let bedienstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab, 119] }), testcase.vat] })).toFixed(2);
        let pendelsicherung = testcase.pendelsicherung_preis;
        let pendelsicherung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [pendelsicherung, 119] }), testcase.vat] })).toFixed(2);
        let kurbel = testcase.kurbel_preis;
        let kurbel_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kurbel, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator
        let streichPreis_conf = (jsonLogic.apply({ '+': [grundpreis, grundpreis_2, bediengriff, bediengriff_aufpreis, bedienstab, pendelsicherung, befestigung, kurbel] })).toFixed(2)
        let redPreis_conf = (jsonLogic.apply({ '+': [grundPreis_red, grundPreis_red_2, bediengriff, bedienstab, pendelsicherung, befestigung, kurbel] })).toFixed(2)

        //warenkorb --> bedienstab wird getrennt
        let streichPreis = (jsonLogic.apply({ '-': [streichPreis_conf, bedienstab] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '-': [redPreis_conf, bedienstab] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '+': [redPreisTotal, bedienstab] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        // rabatt_betrag, sieSparen_new, total_cart_new
        let rabatt_betrag;
        let sieSparen_new;
        let warenkorbTotal_new;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // cart
            rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_a] }))//.toFixed(2);
            rabatt_betrag = (Math.round(rabatt_betrag * 100) / 100).toFixed(2).toString()
            sieSparen_new = (jsonLogic.apply({ '+': [sieSparen, rabatt_betrag] })).toFixed(2)
            warenkorbTotal_new = (jsonLogic.apply({ '-': [warenkorbTotal, rabatt_betrag] })).toFixed(2)

            rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            warenkorbTotal_new = warenkorbTotal_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000    
        }


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //--------------------------------------------------------------------------------------------------------------------------------\\


        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2);
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, grundpreis_mwst_2, bediengriff_mwst, bediengriff_aufpreis_mwst, pendelsicherung_mwst, befestigung_mwst, kurbel_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, grundPreis_red_mwst_2, bediengriff_mwst, pendelsicherung_mwst, befestigung_mwst, kurbel_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst, versandkosten] })).toFixed(2)
        let zwischensumme_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, bedienstab_mwst] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(4)
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
        let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, testcase.vat] }), testcase.mwst_1] }))
        steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding
        let steuer_betrag_3
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);


        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //--------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst;
        let rabatt_betrag_mwst_1;
        let rabatt_betrag_mwst_2;
        let bedienstab_mwst_total = bedienstab_mwst;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [zwischensumme_mwst, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            rabatt_betrag_mwst_1 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            rabatt_betrag_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [bedienstab_mwst, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);

            sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst_1] })).toFixed(2)
            bedienstab_mwst_total = (jsonLogic.apply({ '-': [bedienstab_mwst, rabatt_betrag_mwst_2] })).toFixed(2)
            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',')
            rabatt_betrag_mwst_1 = rabatt_betrag_mwst_1.replace('.', ',')
            rabatt_betrag_mwst_2 = rabatt_betrag_mwst_2.replace('.', ',')

        }



        //-------------------------------------------------------------------------------------------------------------------------------\\
        //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

        streichPreis_conf = streichPreis_conf.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_conf = redPreis_conf.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis = streichPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        bedienstab = bedienstab.replace('.', ',')
        bedienstab_mwst = bedienstab_mwst.replace('.', ',')
        bedienstab_mwst_total = bedienstab_mwst_total.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit product page
        await this.page.goto(testcase.stoff_url)

        //  wait for page to load completely
        // instead of wait for js-files
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


        // ---------------------------------------- START PRODUCT CONFIGURATION ----------------------------------------------------------//
        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        // select TAB
        await expect(this.page.getByText(testcase.produkttyp, { exact: true })).toBeVisible();
        await this.page.getByText(testcase.produkttyp, { exact: true }).click()

        // select window shape
        await expect(this.page.locator("label[for=" + testcase.form + "]")).toBeVisible();
        await this.page.locator("label[for=" + testcase.form + "]").click()

        //set Plissee typ
        await expect(this.page.locator("label[for=" + testcase.plisseetyp + "]")).toBeVisible();
        await this.page.locator("label[for=" + testcase.plisseetyp + "]").click()

        // check  from prices
        await expect(this.page.locator('.product_prices_top > .price .original_price')).toContainText(testcase.abPreis);
        await expect(this.page.locator('.product_prices_top > .price .final_price')).toContainText(testcase.abPreis_red);
        await expect(this.page.locator('.price_amount > .product_prices > .price .original_price')).toContainText(testcase.abPreis);
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).toContainText(testcase.abPreis_red);

        // select Befestigung 
        if (typeof testcase.befestigung !== "undefined") {
            await this.page.locator("label[for=" + testcase.befestigung + "]").click()
        }

        // set Ausrichtung
        if (typeof testcase.ausrichtung !== "undefined") {
            await this.page.locator('input[value=' + testcase.ausrichtung + ']').check();
        }

        // ************ fill in HÖHEN ************

        if (typeof testcase.hoehe !== "undefined") {
            await this.page.locator('id=hoehe').fill(testcase.hoehe)
        }

        if (typeof testcase.hoehe_links !== "undefined") {
            await this.page.locator('id=hoehe_links').fill(testcase.hoehe_links)
        }

        if (typeof testcase.hoehe_rechts !== "undefined") {
            await this.page.locator('id=hoehe_rechts').fill(testcase.hoehe_rechts)
        }

        if (typeof testcase.gesamthoehe !== "undefined") {
            await this.page.locator('id=gesamthoehe').fill(testcase.gesamthoehe)
        }

        if (typeof testcase.teilhoehe !== "undefined") {
            await this.page.locator('id=teilhoehe').fill(testcase.teilhoehe)
        }

        // ************ fill in BREITEN ************

        if (typeof testcase.breite !== "undefined") {
            await this.page.locator('id=breite').fill(testcase.breite)
        }

        if (typeof testcase.breite_oben !== "undefined") {
            await this.page.locator('id=breite_oben').fill(testcase.breite_oben)
        }

        if (typeof testcase.breite_unten !== "undefined") {
            await this.page.locator('id=breite_unten').fill(testcase.breite_unten)
        }

        // set unterer Stoff
        if (typeof testcase.unterer_Stoff !== "undefined") {
            await this.page.selectOption(('select[name="unterer_stoff_gruppe"]'), testcase.unterer_Stoff)
        }

        // set unterer Stoffcode
        if (typeof testcase.unterer_Stoffcode !== "undefined") {
            await this.page.selectOption(('select[name="unterer_stoff_nummer"]'), testcase.unterer_Stoffcode)
        }

        // set Pendelsicherung
        if (typeof testcase.pendelsicherung !== "undefined") {
            await this.page.locator("label[for=" + testcase.pendelsicherung + "]").click()
        }

        // set Bedienseite
        if (typeof testcase.bedienseite !== "undefined") {
            await this.page.locator("label[for=" + testcase.bedienseite + "]").click()
        }

        // set Optionalstab for Plafond --> Handkurbel or Elektrostab
        if (typeof testcase.optional_gruppe !== "undefined") {

            if (testcase.optional_gruppe == "Kurbel") {

                await this.page.locator("label[for='kurbel']").click()
                await this.page.selectOption(('select[name="handkurbel"]'), testcase.optional_name)

            }
            else
                if (testcase.optional_gruppe == "Elektrostab") {

                    await this.page.locator("label[for='elektrostab']").click()
                    await this.page.selectOption(('select[name="elektrostab"]'), testcase.optional_name)

                }
        }

        // select Schienenfarbe 
        await this.page.getByText(testcase.schienenfarbe, { exact: true }).click()

        // select Bediengriff 
        if (typeof testcase.bediengriff !== "undefined") {
            await this.page.locator("label[for=" + testcase.bediengriff + "]").click()
        }

        // select Bedienstab 
        if (typeof testcase.bedienstab !== "undefined") {
            await this.page.selectOption(('select[name="bedienstab"]'), testcase.bedienstab)
        }

        // check prices
        await expect(this.page.locator('.product_prices_top > .price .original_price')).toContainText(streichPreis_conf);
        await expect(this.page.locator('.product_prices_top > .price .final_price')).toContainText(redPreis_conf);
        await expect(this.page.locator('.price_amount > .product_prices > .price .original_price')).toContainText(streichPreis_conf);
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).toContainText(redPreis_conf);

        // set quantity and add to cart
        await this.page.locator('#qty').clear();
        await this.page.locator('#qty').fill(((testcase.anzahl).toString()), { force: true });
        await this.page.locator('.add_to_cart_button').click();

        await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));


        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // run checkCart
        await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, bedienstab, sieSparen, warenkorbTotal, testcase.rabatt_code, rabatt_betrag, sieSparen_new, warenkorbTotal_new)
        await newCheckout.checkOut(testcase.produkttyp, testcase.missing_name, testcase.login, testcase.prefix, testcase.first_name, testcase.last_name, testcase.company_name, testcase.vatID, testcase.email, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.password, testcase.prefix_2, testcase.first_name_2, testcase.last_name_2, testcase.company_name_2, testcase.vatID_2, testcase.street_2, testcase.postal_code_2, testcase.city_2, testcase.state_2, testcase.phone_2, versandkosten, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.produkttyp, testcase.payment, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, bedienstab_mwst, testcase.rabatt_code, rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.produkttyp, testcase.rmg, testcase.payment, testcase.canceled_payment, testcase.failed_payment, einzel_backend, summe_backend, befestigung_mwst, befestigung_mwst_total, bedienstab_mwst, bedienstab_mwst_total, versandkosten, total_backend, testcase.mwst_1, steuer_betrag, testcase.mwst_2, steuer_betrag_2, testcase.mwst_3, steuer_betrag_3, steuer_betrag_gesamt, rabatt_betrag_mwst, rabatt_betrag_mwst_1, rabatt_betrag_mwst_2, testcase.rabatt_code)
    }
}