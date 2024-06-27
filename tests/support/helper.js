import { expect } from 'playwright/test'

exports.Helper = class Helper {

    constructor(page) {
        this.page = page;
    }

    async login(type, user, email, password) {

        if (user == "guest") {

            if (type != "Muster") {
                await this.page.getByText(/Als Gast zur Kasse gehen/).first().click();

            }
            else { //if (type == "Muster") {
                await this.page.getByText(new RegExp("^" + "Als Gast bestellen" + "\\s*$")).first().click();
            }

            await this.page.waitForTimeout(1000);  // replace this with wait for js-files --> minjs
            await this.page.getByText(/Fortsetzen/).first().click();

        } else if (user == "register") {

            // await this.page.getByText(/Registrieren/).first().click(); // no need to click since 'Registrieren' should be PRESELECTED
            await this.page.waitForTimeout(1000);  // replace this with wait for js-files --> minjs
            await this.page.getByText(/Fortsetzen/).first().click();

        }
        else if (user == "customer") {
            // console.log('KUNDE')
            await this.page.locator('input[id="login-email"]').fill(email);
            await this.page.locator('input[id="login-password"]').fill(password);
            await this.page.locator('button').getByText(/Anmelden/).first().click();
        }

    }

    async setBillingAddress(shipping, login, password, prefix, first_name, last_name, company, vatID, email, street, postal_code, city, state, phone) {

        //************************************************************ ZWEI MÖGLICHE FÄLLE **************************************************************************** */
        //************************************************************ (1) user = guest oder user = register ********************************************************* */
        //************************************************************ (2) user = customer (registered customer) **************************************************** */


        //************************************************************ (1) user = guest oder user = register ********************************************************* */

        if (login == "guest" || login == "register") { // if user is a guest or wants to register (not a registered customer) --> then we have to fill the form 'billing'

            await this.page.locator('[id="billing:prefix"]').click()
            await this.page.locator('[id="billing:prefix"]').type(prefix)
            await this.page.locator('[id="billing:prefix"]').click()
            await this.page.locator('[id="billing:firstname"]').clear()
            await this.page.locator('[id="billing:firstname"]').fill(first_name)
            await this.page.locator('[id="billing:lastname"]').clear()
            await this.page.locator('[id="billing:lastname"]').fill(last_name)
            if (typeof company !== "undefined" && company != "") {
                await this.page.locator('[id="billing:company"]').clear()
                await this.page.locator('[id="billing:company"]').fill(company)
            }
            await this.page.locator('[id="billing:email"]').fill(email)
            if (typeof vatID !== "undefined" && vatID != "") {
                await this.page.locator('[id="billing:vat_id"]').fill(vatID)
            }
            await this.page.locator('[id="billing:street1"]').fill(street)
            await this.page.locator('[id="billing:postcode"]').fill(postal_code)
            await this.page.locator('[id="billing:city"]').fill(city)
            await this.page.selectOption("#billing\\:country_id", state)
            await this.page.locator('[id="billing:telephone"]').fill(phone)

            if (login == "register") { // if the user chooses registration
                await this.page.locator('#billing\\:customer_password').fill(password)
                await this.page.locator('#billing\\:confirm_password').fill(password)
            }
        }

        //************************************************************ (2) user = customer (registered customer) **************************************************** */

        else    // if user is a registered customer and already logged in (?) --> then we don't have to fill the form 'billing'
            if (login == "customer" || shipping == "") {   // AND "" is for using shipping address from account

                if (shipping == "new") {            // if there is a delivery address given
                    await this.page.getByText(/An andere Adresse verschicken/).first().click();
                } else
                    if (shipping == "same") {   // if there is NO delivery address given
                        await this.page.getByText(/An diese Adresse verschicken/).first().click();

                    }
                // await this.page.locator('button[title="Weiter"]').click();
                await this.page.getByRole('button', { name: 'Weiter' }).click();
            }
    }

    async setShippingAddress(shipping, login, prefix2, first_name2, last_name2, company2, vatID2, street2, postal_code2, city2, state2, phone2) {


        //************************************************************ DREI MÖGLICHE FÄLLE **************************************************************************** */
        //************************************************************ (1) An Lieferadresse aus Kundenkonto sersenden ************************************************* */
        //************************************************************ (2) An gleiche Adresse versenden *************************************************************** */
        //************************************************************ (3) An abw. Lieferanschrift versenden*********************************************************** */



        //************************************************************ (1) An Lieferadresse aus Kundenkonto sersenden ************************************************* */

        if (shipping == "" && login == "customer") { // take shipping address from account
            cy.contains('Fortsetzen').click()
        }

        //************************************************************ (2) An gleiche Adresse versenden *************************************************************** */
        else if (shipping == "same" && login != "customer") {
            await this.page.locator('button').getByText(/Weiter/).first().click();
        }

        //************************************************************ (3) An abw. Lieferanschrift versenden*********************************************************** */

        else if (shipping == "new") {

            if (login == "customer") {
                //select: Neue Adresse
                // cy.get('select[id="shipping-address-select"]').select("Neue Adresse")
                await this.page.locator('select[id="shipping-address-select"]').selectOption({ label: "Neue Adresse" })
            }
            else {
                // cy.contains('An andere Adresse verschicken').click()
                // cy.get('button').contains('Weiter').click()
                await this.page.getByText(/An andere Adresse verschicken/).first().click()
                await this.page.locator('button').getByText(/Weiter/).first().click();
            }

            await this.page.locator('[id="shipping:prefix"]').click()
            await this.page.locator('[id="shipping:prefix"]').type(prefix2)
            await this.page.locator('[id="shipping:prefix"]').click()
            await this.page.locator('[id="shipping:firstname"]').clear()
            await this.page.locator('[id="shipping:firstname"]').fill(first_name2)
            await this.page.locator('[id="shipping:lastname"]').clear()
            await this.page.locator('[id="shipping:lastname"]').fill(last_name2)
            if (typeof company2 !== "undefined" && company2 != "") {
                await this.page.locator('[id="shipping:company"]').clear()
                await this.page.locator('[id="shipping:company"]').fill(company2)
            }
            if (typeof vatID2 !== "undefined" && vatID2 != "") {
                await this.page.locator('[id="shipping:vat_id"]').fill(vatID2)
            }
            await this.page.locator('[id="shipping:street1"]').fill(street2)
            await this.page.locator('[id="shipping:postcode"]').fill(postal_code2)
            await this.page.locator('[id="shipping:city"]').fill(city2)
            await this.page.selectOption("#shipping\\:country_id", state2)
            await this.page.locator('[id="shipping:telephone"]').fill(phone2)

            //Fortsetzen Button bei Lieferadresse
            await this.page.locator("#opc-shipping button").click()

            //Fortsetzen Button bei Versandart
            // await this.page.locator("#opc-shipping_method button").click()

        }
    }

    async checkShippingCosts(type, versandkosten) {

        if (type != "Muster") {
            // await this.page.waitForSelector("#opc-shipping_method label > span")
            await expect(this.page.locator("#opc-shipping_method label > span")).toContainText(versandkosten);
            //Button "Fortsetzen" bei Versandart
            await this.page.locator("#opc-shipping_method button").click()
        }
    }

    async setPayment(type, payment) {

        if (type == "Muster") {
            //  DO NOTHING - NO PAYMENT SELECTION FOR MUSTER
        }
        else {

            if (payment == "Vorkasse") {

                await this.page.locator("label[for='p_method_bankpayment']").click()
                await expect(this.page.locator('.payment_method.ppp.bankpayment.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Paypal") {

                await this.page.locator("label[for='p_method_paypal']").click()
                await expect(this.page.locator('.payment_method.ppp.paypal.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Kreditkarte") {

                await this.page.locator("label[for='p_method_card']").click()
                await expect(this.page.locator('.payment_method.ppp.card.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Giropay") {

                await this.page.locator("label[for='p_method_giropay']").click()
                await expect(this.page.locator('.payment_method.ppp.giropay.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Sepa") {

                await this.page.locator("label[for='p_method_sepa']").click()
                await expect(this.page.locator('.payment_method.ppp.sepa.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Sofort") {

                await this.page.locator("label[for='p_method_sofort']").click()
                await expect(this.page.locator('.payment_method.ppp.sofort.ppp-selected')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Rechnungskauf") {

                await this.page.locator("label[for='p_method_ratepay']").click()
                await expect(this.page.locator('.payment_method.ppp.ratepay.ppp-selected')).toBeVisible(); //only an additional check of the right selection


                await this.page.selectOption(('select[name="payment\\[birthdate_day\\]"]'), '05')
                await this.page.selectOption(('select[name="payment\\[birthdate_month\\]"]'), '10')
                await this.page.selectOption(('select[name="payment\\[birthdate_year\\]"]'), '1980')

                await this.page.locator("label:has-text('Telefonnummer') + input").clear()
                await this.page.locator("label:has-text('Telefonnummer') + input").type("040785582");
            }

            // Fortsetzen Button
            await this.page.getByRole('button', { name: 'Fortsetzen' }).click();

        }
    }

    async checkFinalPrices(type, payment, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, kostenBedienstab, rabattCode, rabattBetrag, shippingCosts, sieSparen, total_checkout) {

        if (type == "Muster") {

            await expect(this.page.locator(".einzelpreis .cart-price")).toContainText("kostenlos")
            await expect(this.page.locator(".prices_section .rowtotal-container")).toContainText("kostenlos")

        }

        // products without Streichpreis ==> Gutscheine, Service, 
        else if (type == "Serviceprodukt" || type == "Zubehoer" || type == "Gutschein") {   // TO DO

            await expect(this.page.locator("div.einzelpreis span > span")).toContainText(final_checkout)
            await expect(this.page.locator("div.checkout-table span > span > span")).toContainText(final_checkout_total)
        }
        else { //if it is a regular product

            //check prices
            await expect(this.page.locator("div.einzelpreis span.old-price")).toContainText(strike_checkout) // Originalpreis einzeln
            await expect(this.page.locator("div.checkout-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText(final_checkout)
            await expect(this.page.locator("div.zwischensumme span.old-price")).toContainText(strike_checkout_total)
            await expect(this.page.locator("div.checkout-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText(final_checkout_total)

            //check Preis Bedienstab
            if (typeof kostenBedienstab != "undefined" && kostenBedienstab != "0,00") {

                // THIS CAN BE FAIL WHEN ADDING OTHER PAYMENTS
                await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) div.einzelpreis span > span")).toContainText(kostenBedienstab)
                await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) span > span > span")).toContainText(kostenBedienstab)

                // // if payment is Vorkasse
                // if (payment == 'Vorkasse') {
                //     // cy.get('.checkout-table > :nth-child(2)').find('.einzelpreis').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab einzeln
                //     // cy.get('.checkout-table > :nth-child(2)').find('.zwischensumme').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab total
                //     await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) div.einzelpreis span > span")).toContainText(kostenBedienstab)
                //     await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) span > span > span")).toContainText(kostenBedienstab)

                // }
                // //all other payment methods --> different layout of Bestellübersicht
                // else {
                //     // cy.get('.checkout-table > :nth-child(4)').find('.einzelpreis').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab einzeln
                //     // cy.get('.checkout-table > :nth-child(4)').find('.zwischensumme').find('.cart-price').should('contain', kostenBedienstab)  // Bedienstab total
                //     await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) div.einzelpreis span > span")).toContainText(kostenBedienstab)
                //     await expect(this.page.locator("div.checkout-table > div:nth-of-type(2) span > span > span")).toContainText(kostenBedienstab)
                // }
            }
        }


        //check Rabatt
        if (typeof rabattCode != "undefined") {
            // check rabattcode
            await expect(this.page.locator("span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(1)")).toHaveText('Rabatt (' + rabattCode + ')')
            // check rabattbetrag next element to rabatt
            await expect(this.page.locator('span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(2)')).toContainText(rabattBetrag)
        }

        //Versandkosten
        if (type != "Gutschein") {
            //check Versandkosten
            // await expect(this.page.locator("span.cart_versand_totals span.price")).toContainText(shippingCosts)
            // await page.locator('a[href="#shipping"]:has-text("Ändern")').click();
            await expect(this.page.locator('span:has-text("Versand & Bearbeitung") + .price')).toContainText(shippingCosts)
        }

        //check 'Sie sparen'
        if (typeof sieSparen != "undefined") {
            // cy.get('.cart_saved_total.cart_value').should("contain", sieSparen)
            await expect(this.page.locator("span.cart_saved_total")).toContainText(sieSparen)
        }

        //check Gesamtsumme
        if (type == "Muster") {
            //     cy.get('.cart_value').should('contain', "0,00")
            await expect(this.page.locator("strong.cart_value > span")).toContainText("0,00")
        }
        else {
            //     cy.contains('Gesamtsumme').next('.cart_value').should("contain", total_checkout)
            await expect(this.page.locator("strong.cart_value > span")).toContainText(total_checkout)
        }
    }

    async confirmOrder(type, payment, canceledPayment, failedPayment) {

        if (type != "Muster") {
            await this.page.locator("#agreement-1").click()
            await this.page.locator("#agreement-2").click()




            // ************************************************* VORKASSE ***************************************************
            //*************************************************************************************************************/
            if (payment == "Vorkasse") {
                // await this.page.locator("#opc-review button").click()
                await this.page.getByRole('button', { name: 'Jetzt kaufen' }).click()
            }

            // ************************************************* PAYPAL ***************************************************
            //*************************************************************************************************************/

            else if (payment == "Paypal") {

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')

                // Click on the PayPal button inside PayPal's iframe
                // new window opens
                const [PP_popup] = await Promise.all([
                    this.page.waitForEvent('popup'),
                    await iframe.getByLabel('Mit PayPal zahlen').click()
                ])

                // wait until new window is loaded
                await PP_popup.waitForLoadState();

                console.log('title of PP-popup: ' + await PP_popup.title());
                console.log('title of main page: ' + await this.page.title());

                // now we can interact with elements of the new window
                await PP_popup.locator("#email").type("sb-zsomv8592744@personal.example.com");  // btnNext
                await PP_popup.locator("#btnNext").click();
                await PP_popup.locator("#password").type("c)79sJ!.");
                await PP_popup.locator("#btnLogin").click();
                await expect(PP_popup.locator('div[data-testid="fi-amount"]')).toContainText('440,05 EUR');
                await PP_popup.locator('button#payment-submit-btn').click();
            }


            // ************************************************* KREDITKARTE ***************************************************
            //*************************************************************************************************************/

            else if (payment == "Kreditkarte") {

                // no new window loaded @creditcard
                // --> MAIN-iframe is placed within main window

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')
                await iframe.getByLabel('Debit- oder Kreditkarte').click()

                // Verzögerung von 5 Sekunden --> TIME TO LOAD THE IFRAME CONTENT
                await this.page.waitForTimeout(5000);

                // @CREDITCARD WE HAVE AN IFRAME INSIDE ANOTHER IFRAME
                const cc_window = await iframe.frameLocator('.zoid-visible')

                // credit card information
                await cc_window.locator('#credit-card-number').fill('4020022493974697')
                await cc_window.locator('#expiry-date').fill('11 / 24')
                await cc_window.locator('#credit-card-security').fill('079')

                await this.page.pause()

                // change state --> couldnt select Österreich --> changed address below
                // await cc_window.selectOption("#billingAddress\\.country", 'AT') // --> selectOption does not work here (iframe)
                // await cc_window.locator("#billingAddress\\.country").click()
                // await cc_window.locator("#billingAddress\\.country").type("Ö");

                // personal information
                await cc_window.locator('input[name="givenName"]').fill('Hilal')
                await cc_window.locator('input[name="familyName"]').fill('Bulut')
                await cc_window.locator('input[name="line1"]').fill('Kobelgasse 7')
                await cc_window.locator('input[name="line2"]').fill('Hochparterre')
                await cc_window.locator('input[name="postcode"]').fill('21109')
                await cc_window.locator('input[name="city"]').fill('Hamburg')
                await cc_window.locator('input[name="phone"]').fill('17600099955')
                await cc_window.locator('input[name="email"]').fill('hilal@livoneo.com')

                // click submit button within iframe
                await cc_window.locator('button#submit-button').click()

            }

            // ************************************************* SOFORT || GIRO ***************************************************
            //*************************************************************************************************************/

            else if (payment == "Giropay" || payment == "Sofort") {

                // click jetzt kaufen button
                await this.page.getByRole('button', { name: 'Jetzt kaufen' }).click();

                // Wait for the new page to load
                await this.page.waitForLoadState('load');

                if (canceledPayment == true) {

                    await this.page.locator("[data-testid='Canceled']").click()
                    console.log('PAYMENT CANCELED')

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    // proceed to checkout
                    await this.page.locator('div.cart-collaterals ul span > span').click();
                    // Als Gast zur Kasse gehen
                    await this.page.getByText(/Als Gast zur Kasse gehen/).first().click();
                    // Fortsetzen
                    await this.page.getByText(/Fortsetzen/).first().click();
                    // click Weiter button in checkout 'rechnungsadresse'
                    await this.page.locator('button[title="Weiter"]').click();
                    //Button "Fortsetzen" in Versandinformationen
                    await this.page.locator("#opc-shipping_method button").click()
                    //select 'Vorkasse' this time
                    await this.page.locator("label[for='p_method_bankpayment']").click()
                    await expect(this.page.locator('.payment_method.ppp.bankpayment.ppp-selected')).toBeVisible(); //only an additional check of the right selection
                    //click 'Fortsetzen' -Button
                    await this.page.getByRole('button', { name: 'Fortsetzen' }).click();
                    // confirm agreements
                    await this.page.locator("#agreement-1").click()
                    await this.page.locator("#agreement-2").click()
                    // confirm oder
                    await this.page.getByRole('button', { name: 'Jetzt kaufen' }).click()
                }

                else if (failedPayment == true) {

                    await this.page.locator("[data-testid='Failed']").click()
                    console.log('PAYMENT FAILED')

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    // proceed to checkout
                    await this.page.locator('div.cart-collaterals ul span > span').click();
                    // Als Gast zur Kasse gehen
                    await this.page.getByText(/Als Gast zur Kasse gehen/).first().click();
                    // Fortsetzen
                    await this.page.getByText(/Fortsetzen/).first().click();
                    // click Weiter button in checkout 'rechnungsadresse'
                    await this.page.locator('button[title="Weiter"]').click();
                    //Button "Fortsetzen" in Versandinformationen
                    await this.page.locator("#opc-shipping_method button").click()
                    //select 'Vorkasse' this time
                    await this.page.locator("label[for='p_method_bankpayment']").click()
                    await expect(this.page.locator('.payment_method.ppp.bankpayment.ppp-selected')).toBeVisible(); //only an additional check of the right selection
                    //click 'Fortsetzen' -Button
                    await this.page.getByRole('button', { name: 'Fortsetzen' }).click();
                    // confirm agreements
                    await this.page.locator("#agreement-1").click()
                    await this.page.locator("#agreement-2").click()
                    // confirm oder
                    await this.page.getByRole('button', { name: 'Jetzt kaufen' }).click()

                }
                else {


                    await this.page.locator("[data-testid='Successful']").click()

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');
                }
            }

            // ************************************************* SEPA ***************************************************
            //*************************************************************************************************************/

            else if (payment == "Sepa") {

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')

                // Click on the PayPal button inside PayPal's iframe
                // new window opens
                const [Sepa_popup] = await Promise.all([
                    this.page.waitForEvent('popup'),
                    await iframe.locator('div[data-funding-source="sepa"] .paypal-button-label-container').click()
                ])

                // wait until new window is loaded
                await Sepa_popup.waitForLoadState();

                console.log('title of PP-popup: ' + await Sepa_popup.title());
                console.log('title of main page: ' + await this.page.title());

                // now we can interact with elements of the new window
                await Sepa_popup.locator("input#bankIban").type("DE80494501201220230930");
                await Sepa_popup.locator("input#dateOfBirth").type("01012000");
                await Sepa_popup.locator("input#phone").type("+1724920233");
                await Sepa_popup.locator("input#email").type("hakandemirhan@livoneo.com");
                await Sepa_popup.locator('button[type="submit"]').click();
            }

            // ************************************************* RECHNUNG ***************************************************
            //*************************************************************************************************************/

            else if (payment == "Rechnungskauf") {

                await this.page.getByRole('button', { name: 'Jetzt kaufen und später per Rechnung zahlen' }).click()
                // Wait for the new page to load
                await this.page.waitForLoadState('load');
            }
        }

        else if (type == "Muster") {
            await this.page.getByRole('button', { name: 'Kostenfrei bestellen' }).click()
        }

    }

    async checkSuccessPage() {

        await expect(this.page.locator("#text > p:nth-of-type(1)")).toContainText('Ihre Bestellnummer lautet: ')
        await expect(this.page.locator("#text > p:nth-of-type(2)")).toContainText('In wenigen Augenblicken erhalten Sie eine Bestätigungsmail.')
        await expect(this.page.locator("#text > p:nth-of-type(3)")).toContainText('Sollten Sie keine Bestätigungsmail in Ihrem Posteingang vorfinden, prüfen Sie bitte auch den SPAM-Ordner Ihres E-Mail Kontos, da vereinzelt (insbesondere bei z.B. GMX oder WEB.DE) die Bestätigungsmails dort einsortiert werden. Sollten Sie innerhalb der nächsten 30 Minuten keine Bestätigungsmail erhalten haben, kontaktieren Sie uns bitte über mail@plissee-experte.de.')

    }

    async grabOrderNumber() {

        const text = await this.page.locator("#text > p:nth-of-type(1)").textContent();
        console.log('Text: ' + text)
        const orderNumber = text.slice(27, 36);
        console.log('Bestellnummer: ' + orderNumber)

        return orderNumber;
    }

    async emptyCart(kostenStab, rmg) {

        await this.page.locator("div.cart_block img").click()

        if ((typeof kostenStab !== "undefined" && kostenStab !== "0,00") || typeof rmg !== "undefined") {  //if bedienstab OR RMG exists...
            await this.page.locator("div.wrapper > div > div div:nth-of-type(2) > a > img").click()
        }
        await this.page.locator("div.wrapper > div > div a > img").click()

        await expect(this.page.locator("h1")).toHaveText('Der Warenkorb ist leer')
        await expect(this.page.locator(".cart-empty p:nth-of-type(1)")).toHaveText('Sie haben keine Artikel im Warenkorb.')

    }

    async check_js_alert() {
        // Listen for the 'dialog' event --> page.on() --> we can remove the event listener with page.off() later 
        await this.page.on('dialog', async (dialog) => {
            // Check if the dialog type is 'alert'
            if (dialog.type() === 'alert') {
                // Get the text of the alert
                const alertText = dialog.message();

                // Perform an assertion on the alert text
                expect(alertText).toBe('Die USt-IdNr. ist ungültig.');
                console.log('erster Alert: ' + alertText)

                // Accept the alert (close it)
                // await dialog.accept(); //--> this should close the alert but it does not
                // workaround:
                // Automatically close the dialog after a delay (adjust the delay as needed)
                setTimeout(async () => {
                    await dialog.accept();
                }, 2000); // 2 seconds delay
            }
        });
    }
}