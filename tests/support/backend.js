import { expect } from 'playwright/test'
import { Helper } from './helper'
import playwrightConfig from '../../playwright.config';

exports.Backend = class Backend {

    constructor(page) {
        this.page = page;
    }

    async login() {

        await this.page.goto(process.env.BACKEND_URL)
        await this.page.locator('#username').fill(process.env.BACKEND_USER);
        await this.page.locator('#login').fill(process.env.BACKEND_PASSW);
        await this.page.locator('button').click();

    }

    async getOrder(orderNumber) {

        // hover over 'Verkäufe'
        await this.page.locator('span:has-text("Verkäufe")').first().hover()
        // click Bestellungen
        await this.page.locator('span:has-text("Bestellungen")').first().click()
        // select order
        await this.page.getByText(orderNumber).click()
    }

    async checkOrder(type, unit, lineTotal, befestigungUnit, befestigungTotal, kostenStab, kostenStabTotal, shippingCost, totalBackend, vatRate, vatProduct, vatRate2, vatBedienstab, vatRate3, vatBefestigung, vatTotal, rabattbetrag, rabattbetrag_1, rabattbetrag_2, rabattcode) {


        //************************************************************************* */

        // CHECK PRICE OF MAIN PRODUCT

        if (type == "Muster") {

            await expect(this.page.locator("tbody.even td:nth-of-type(4) > span > span")).toContainText("0,00")
            await expect(this.page.locator("tbody.even td:nth-of-type(10) > span")).toContainText("0,00")
        }
        else {
            await expect(this.page.locator("tbody.even td:nth-of-type(4) > span > span")).toContainText(unit)
            await expect(this.page.locator("tbody.even td:nth-of-type(10) > span")).toContainText(lineTotal)
        }

        //************************************************************************* */

        //CHECK BEDIENSTAB 
        // if (typeof kostenStab != "undefined") {
        if (typeof kostenStab != "undefined" && kostenStab != "0,00") {

            await expect(this.page.locator("tbody.odd td:nth-of-type(4) > span > span")).toContainText(kostenStab)
            await expect(this.page.locator("tbody.odd td:nth-of-type(10) > span")).toContainText(kostenStabTotal)
        }

        //************************************************************************* */

        // IN CASE OF ANWIS

        //CHECK BEFESTIGUNG BEI: ANWIS-PLISSEE + VHG-BEFESTIGUNG  --> ONLY NEEDED WHEN ANWIS PRODUCTS WITH VHG BEFESTIGUNG EXISTS !!!
        // --> currently no anwis products active <--
        // if (typeof befestigungUnit != "undefined") {
        //     // CHECK UNIT COST OF BEFESTIGUNG
        //     cy.get(befestigung_unit).should(($txt) => {
        //         expect($txt).to.contain(befestigungUnit)
        //     })
        //     // CHECK LINE TOTAL OF BEFESTIGUNG
        //     cy.get(befestigung_total).should(($txt) => {
        //         expect($txt).to.contain(befestigungTotal)
        //     })
        // }


        // ******************************** CHECK VATS ********************************
        // ****************************************************************************

        // CHECK VAT RATE AND VAT AMOUNT OF MAIN PRODUCT
        await expect(this.page.locator("tbody.even td:nth-of-type(8)")).toContainText(vatRate + '%')
        await expect(this.page.locator("tbody.even td:nth-of-type(7) > span")).toContainText(vatProduct)

        // CHECK VAT RATE AND VAT AMOUNT OF BEDIENSTAB
        if (typeof vatRate2 !== "undefined") {
            await expect(this.page.locator("tbody.odd td:nth-of-type(8)")).toContainText(vatRate2 + '%')
            await expect(this.page.locator("tbody.odd td:nth-of-type(7) > span")).toContainText(vatBedienstab)
        }

        // IN CASE OF ANWIS

        // CHECK VAT RATE AND VAT AMOUNT OF BEFESTIGUNG --> ONLY NEEDED WHEN ANWIS PRODUCTS WITH VHG BEFESTIGUNG EXISTS !!!
        //  if (typeof vatRate3 !== "undefined") {
        //      cy.get(vat_rate_befestigung).should('contain', vatRate3 + '%')
        //      cy.get(vat_befestigung).should('contain', vatBefestigung)
        //  }




        // ******************************** CHECK RABATTCODE & -BETRAG ********************************
        // ********************************************************************************************

        if (typeof rabattcode != "undefined") {

            if (typeof rabattbetrag_1 !== "undefined" && rabattbetrag_1 != "0,00") {  //wenn es mehrere Zeilen gibt zB wegen Bedienstab gibt es rabattcode_1 und _2, sonst nur rabattbetrag
                console.log('mehrere Rabattbeträge im Backend')
                await expect(this.page.locator("tbody.even td:nth-of-type(9) > span")).toContainText(rabattbetrag_1)
                await expect(this.page.locator("tbody.odd td:nth-of-type(9) > span")).toContainText(rabattbetrag_2)

            }
            else {
                console.log('ein Rabattbetrag im Backend')
                await expect(this.page.locator("tbody.even td:nth-of-type(9) > span")).toContainText(rabattbetrag)
            }

            // wenn es Versandkosten gibt:
            if (type != "Gutschein") {
                await expect(this.page.locator("tbody > tr.\\32  > td.label")).toContainText('Rabatt (' + rabattcode + ')')
                await expect(this.page.locator("tbody > tr.\\32  span")).toContainText(rabattbetrag)
            }
            else {
                // wenn es keine Versandkosten gibt --> bei Gutscheinen:
                await expect(this.page.locator("tbody > tr.\\31  > td.label")).toContainText('Rabatt (' + rabattcode + ')')
                await expect(this.page.locator("tbody > tr.\\31  span")).toContainText(rabattbetrag)
            }
        }


        //************************************************************************* */
        // **************************** CHECK TOTALS *******************************

        //CHECK LAST SHIPPING COST
        if (type != "Gutschein") {
            await expect(this.page.locator("tbody > tr.\\31  span")).toContainText(shippingCost)

            // The expression tr.\\31 in a CSS selector refers to a specific table row (<tr>) element that has a class name of 1 --> <tr class="1">
            // The \\31 part is an escaped Unicode character sequence that corresponds to the digit 1 in the UTF-8 encoding. 
            // <tr class="1">
        }

        // check Gesamtsteuern
        // await expect(this.page.locator("tbody > tr:last-of-type > td:last-of-type")).toContainText(vatTotal)
        await expect(this.page.locator(".order-totals > table > tbody > tr:last-of-type > td:first-of-type")).toContainText("Gesamtbetrag Steuern")
        await expect(this.page.locator(".order-totals > table > tbody > tr:last-of-type > td:last-of-type")).toContainText(vatTotal)

        //CHECK FINAL TOTAL
        if (type == "Muster") {
            await expect(this.page.locator("tfoot > tr.\\30  span")).toContainText("0,00")

        }
        else {
            await expect(this.page.locator("tfoot > tr.\\30  span")).toContainText(totalBackend)
        }
    }

    async checkRMG(rmg) {

        if (typeof rmg != "undefined") {
            await expect(this.page.locator('.data.order-tables')).toContainText('Richtig Messen Garantie')
            await expect(this.page.locator('.data.order-tables')).toContainText('0,00')
        }
    }

    async logout() {
        await this.page.getByText('Abmelden').click()
    }
}