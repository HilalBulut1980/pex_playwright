import { expect } from 'playwright/test'
import { Helper } from './helper'
import { Backend } from './backend'
import playwrightConfig from '../../playwright.config';
// Lade die Umgebungsvariablen aus der .env-Datei
require('dotenv').config();

exports.Checkout = class Checkout {

    constructor(page) {
        this.page = page;
    }

    async checkOut(type, missing_name, user, prefix, firstName, lastName, company, vatID1, email, street, postalCode, city, state, phone, shipping, password, prefix2, firstName2, lastName2, company2, vatID2, street2, postalCode2, city2, state2, phone2, versandkosten, payment) {

        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(this.page)

        //****************************************** LOGIN ************************************************************* */

        await newHelper.login(type, user, email, password)


        //****************************************** SET BILLING ADDRESS ************************************************************* */

        await newHelper.setBillingAddress(shipping, user, password, prefix, firstName, lastName, company, vatID1, email, street, postalCode, city, state, phone)


        //****************************************** SET SHIPPING ADDRESS ************************************************************* */

        await newHelper.setShippingAddress(shipping, user, prefix2, firstName2, lastName2, company2, vatID2, street2, postalCode2, city2, state2, phone2)


        //****************************************** CHECK SHIPPING COST ************************************************************* */

        await newHelper.checkShippingCosts(type, versandkosten)

        //****************************************** SET PAYMENT  ************************************************************* */

        await newHelper.setPayment(type, payment, missing_name, firstName, lastName)
    }

    async checkout_negVATID(type, user, prefix, firstName, lastName, company, vatID1_false, vatID1_correct, email, street, postalCode, city, state, phone, shipping, password, prefix2, firstName2, lastName2, company2, vatID2_false, vatID2_correct, street2, postalCode2, city2, state2, phone2, versandkosten, payment) {

        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(this.page)

        //****************************************** LOGIN ************************************************************* */

        await newHelper.login(type, user, email, password)

        //************************************************************ (1) user = guest (keine anderen Fälle bei neg_vatid) ********************************************************* */

        // we have only guest-testcases in neg_vatd
        await this.page.locator('[id="billing:prefix"]').click()
        await this.page.locator('[id="billing:prefix"]').type(prefix)
        await this.page.locator('[id="billing:prefix"]').click()
        await this.page.locator('[id="billing:firstname"]').clear()
        await this.page.locator('[id="billing:firstname"]').fill(firstName)
        await this.page.locator('[id="billing:lastname"]').clear()
        await this.page.locator('[id="billing:lastname"]').fill(lastName)
        await this.page.locator('[id="billing:company"]').clear()
        await this.page.locator('[id="billing:company"]').fill(company)
        await this.page.locator('[id="billing:email"]').fill(email)
        await this.page.locator('[id="billing:vat_id"]').fill(vatID1_false)
        await this.page.locator('[id="billing:street1"]').fill(street)
        await this.page.locator('[id="billing:postcode"]').fill(postalCode)
        await this.page.locator('[id="billing:city"]').fill(city)
        await this.page.selectOption("#billing\\:country_id", state)
        await this.page.locator('[id="billing:telephone"]').fill(phone)

        // IF SHIPPING = SAME
        if (shipping == "same") {
            // await this.page.locator('button[title="Weiter"]').click(); // --> this resilves 2 elements 
            await this.page.getByRole('button', { name: 'Weiter' }).click()
            //CHECK JS ALERT AND type correct VATID
            await newHelper.check_js_alert()
            await this.page.locator('[id="billing:vat_id"]').clear()
            await this.page.locator('[id="billing:vat_id"]').fill(vatID1_correct)
            // await this.page.locator('button[title="Weiter"]').click(); // --> this resilves 2 elements 
            await this.page.getByRole('button', { name: 'Weiter' }).click()



            // await newHelper.checkShippingCosts(type, versandkosten)
            // await newHelper.setPayment(type, payment)

        }
        // IF SHIPPING = NEW
        else if (shipping == "new") {

            await this.page.getByText(/An andere Adresse verschicken/).first().click();
           // await this.page.locator('button[title="Weiter"]').click(); // --> this resilves 2 elements 
           await this.page.getByRole('button', { name: 'Weiter' }).click()
            //CHECK JS ALERT AND type correct VATID
            await newHelper.check_js_alert()
            await this.page.locator('[id="billing:vat_id"]').clear()
            await this.page.locator('[id="billing:vat_id"]').fill(vatID1_correct)
            // await this.page.locator('button[title="Weiter"]').click(); // --> this resilves 2 elements 
            await this.page.getByRole('button', { name: 'Weiter' }).click()

            // ENTER DATA FOR SHIPPING ADDRESS
            await this.page.locator('[id="shipping:prefix"]').click()
            await this.page.locator('[id="shipping:prefix"]').type(prefix2)
            await this.page.locator('[id="shipping:prefix"]').click()
            await this.page.locator('[id="shipping:firstname"]').clear()
            await this.page.locator('[id="shipping:firstname"]').fill(firstName2)
            await this.page.locator('[id="shipping:lastname"]').clear()
            await this.page.locator('[id="shipping:lastname"]').fill(lastName2)
            await this.page.locator('[id="shipping:company"]').clear()
            await this.page.locator('[id="shipping:company"]').fill(company2)
            await this.page.locator('[id="shipping:vat_id"]').fill(vatID2_false)
            await this.page.locator('[id="shipping:street1"]').fill(street2)
            await this.page.locator('[id="shipping:postcode"]').fill(postalCode2)
            await this.page.locator('[id="shipping:city"]').fill(city2)
            await this.page.selectOption("#shipping\\:country_id", state2)
            await this.page.locator('[id="shipping:telephone"]').fill(phone2)

            //Fortsetzen Button bei Lieferadresse
            await this.page.locator("#opc-shipping button").click()

            //NO NEED TO CHECK JS ALERT again !!!
            // await newHelper.check_js_alert2() 
            // --> NOT NEEDED SINCE page.on() remains active for the duration of the script's execution, 
            // and it will capture and handle events as they occur
            await this.page.locator('[id="shipping:vat_id"]').clear()
            await this.page.locator('[id="shipping:vat_id"]').fill(vatID2_correct)
            await this.page.locator("#opc-shipping button").click()
        }

        // Verzögerung von 2 Sekunden
        await this.page.waitForTimeout(2000);

        await newHelper.checkShippingCosts(type, versandkosten)
        await newHelper.setPayment(type, payment)
    }

    async checkFinalPrices(type, payment, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, kostenBedienstab, rabattCode, rabattBetrag, shippingCosts, sieSparen, total_checkout) {

        // Erstelle eine Instanz der Klasse Checkout
        const newHelper = new Helper(this.page)

        await newHelper.checkFinalPrices(type, payment, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, kostenBedienstab, rabattCode, rabattBetrag, shippingCosts, sieSparen, total_checkout)

    }

    async checkRMG() {

        await expect(this.page.locator('.checkout-table > :nth-child(2)').locator('.checkout_item_name')).toHaveText(/Richtig Messen Garantie/);
        await expect(this.page.locator('.checkout-table > :nth-child(2)').locator('.einzelpreis').locator('.cart-price')).toHaveText(/kostenlos/); // Originalpreis einzeln
        await expect(this.page.locator('.checkout-table > :nth-child(2)').locator('.zwischensumme').locator('.cart-price')).toHaveText(/kostenlos/); // red. Preis einzeln

    }

    async placeOrder(type, rmg, payment, canceledPayment, failedPayment, reducedUnit, reducedLineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, versandkosten, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode) {

        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(this.page)
        const newBackend = new Backend(this.page)


        // ************************************************** TEST ON PRODUCTION / OR TESTUMGEBUNG ***********************************************
        // ******************************************************* NO ORDER **********************************************************************

        if (process.env.PLACE_ORDER == 'false') {  // WE ARE TESTING ON PRODUCTION

            await newHelper.emptyCart(kostenStab, rmg)
            // console.log('Bestellungen werden NICHT ausgeführt')

        }


        // ************************************************** TEST ON A TEST ENVIRONMENT ***********************************************************
        // ******************************************************* WITH ORDER **********************************************************************

        else if (process.env.BASE_URL != 'https://www.plissee-experte.de/' && process.env.PLACE_ORDER == 'true') {  // NO PRODUCTION

            // console.log('Die Base-URL lautet: ' + process.env.BASE_URL)
            // console.log('Bestellungen werden ausgeführt')

            await newHelper.confirmOrder(type, payment, canceledPayment, failedPayment)

            // check if successPage is loaded
            await newHelper.checkSuccessPage();
            const orderNumber = await newHelper.grabOrderNumber();


            await newBackend.login()
            await newBackend.getOrder(orderNumber)
            await newBackend.checkOrder(type, reducedUnit, reducedLineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, versandkosten, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode) //
            await newBackend.checkRMG(rmg)
            await newBackend.logout()

        }

        // *****************************************************************************************************************************
        // ******************************* CHECK CONDITIONS ABOVE **********************************************************************
        else {

            console.log('NOTHING HAPPENS')
            console.log('Die Base-URL lautet: ' + process.env.BASE_URL)
            console.log(process.env.PLACE_ORDER)
        }
    }
}