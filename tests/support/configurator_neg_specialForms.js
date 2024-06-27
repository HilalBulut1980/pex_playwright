import { expect } from 'playwright/test'

exports.NEG_SpecialForms = class NEG_SpecialForms {

    constructor(page) {
        this.page = page;
    }

    async configureProduct(testcase) {

        // visit product page
        await this.page.goto(testcase.stoff_url)
        await this.page.pause()

        //  wait for page to load completely
        // instead of wait for js-files
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


        // select TAB
        await expect(this.page.getByText(testcase.produkttyp, { exact: true })).toBeVisible();
        await this.page.getByText(testcase.produkttyp, { exact: true }).click()

        // select window shape
        await expect(this.page.locator("label[for=" + testcase.form + "]")).toBeVisible();
        await this.page.locator("label[for=" + testcase.form + "]").click()

        //set Plissee typ
        await expect(this.page.locator("label[for=" + testcase.plisseetyp + "]")).toBeVisible();
        await this.page.locator("label[for=" + testcase.plisseetyp + "]").click()



        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************

        // set Ausrichtung
        if (typeof testcase.ausrichtung !== "undefined") {
            await this.page.locator('input[value=' + testcase.ausrichtung + ']').check();
        }

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

        if (typeof testcase.breite !== "undefined") {
            await this.page.locator('id=breite').fill(testcase.breite)
        }

        if (typeof testcase.breite_oben !== "undefined") {
            await this.page.locator('id=breite_oben').fill(testcase.breite_oben)
        }

        if (typeof testcase.breite_unten !== "undefined") {
            await this.page.locator('id=breite_unten').fill(testcase.breite_unten)
        }

        // click out --> workaround
        // await this.page.click('h3:text("Befestigungstyp")')
        await this.page.click('h3:text("Maße für")')


        // CHECK ERROR MESSAGES
        // ********************************************************************************
        // ********************************************************************************

        // if it is a neigung-test then check only the neigung error container 
        if (testcase.neigung) {
            await expect(this.page.locator('p:text("Neigungswinkel:") + div.error_message')).toHaveCount(1) // exist assertion
            await expect(this.page.locator('p:text("Neigungswinkel:") + div.error_message')).toContainText(testcase.message)
        }
        // if it is a schraege-test then check only the schräge error container 
        else if (testcase.schraege) {
            await expect(this.page.locator('p:text("Schräge:") + div.error_message')).toHaveCount(1) // exist assertion
            await expect(this.page.locator('p:text("Schräge:") + div.error_message')).toContainText(testcase.message)
        }
        else {

            // error container HÖHE
            if (typeof testcase.hoehe_new != "undefined") {
                await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container HÖHE LINKS
            if (typeof testcase.hoehe_links_new != "undefined") {
                await expect(this.page.locator("label[for=\'hoehe_links\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'hoehe_links\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container HÖHE RECHTS
            if (typeof testcase.hoehe_rechts_new != "undefined") {
                await expect(this.page.locator("label[for=\'hoehe_rechts\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'hoehe_rechts\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container GESAMTHÖHE
            if (typeof testcase.gesamthoehe_new != "undefined") {
                await expect(this.page.locator("label[for=\'gesamthoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'gesamthoehe\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container TEILHÖHE
            if (typeof testcase.teilhoehe_new != "undefined") {
                await expect(this.page.locator("label[for=\'teilhoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'teilhoehe\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container BREITE
            if (typeof testcase.breite_new != "undefined") {
                await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container BREITE OBEN
            if (typeof testcase.breite_oben_new != "undefined") {
                await expect(this.page.locator("label[for=\'breite_oben\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'breite_oben\'] + div.error_message")).toContainText(testcase.message)
            }

            // error container BREITE UNTEN
            if (typeof testcase.breite_unten_new != "undefined") {
                await expect(this.page.locator("label[for=\'breite_unten\'] + div.error_message")).toHaveCount(1) // exist assertion
                await expect(this.page.locator("label[for=\'breite_unten\'] + div.error_message")).toContainText(testcase.message)
            }
        }

        // ENTER CORRECTED DATA
        // ********************************************************************************
        // ********************************************************************************

        // set Ausrichtung
        if (typeof testcase.ausrichtung_new !== "undefined") {
            await this.page.locator('input[value=' + testcase.ausrichtung_new + ']').check();
        }

        if (typeof testcase.hoehe_new !== "undefined") {
            await this.page.locator('id=hoehe').clear()
            await this.page.locator('id=hoehe').fill(testcase.hoehe_new)
        }

        if (typeof testcase.hoehe_links_new !== "undefined") {
            await this.page.locator('id=hoehe_links').clear()
            await this.page.locator('id=hoehe_links').fill(testcase.hoehe_links_new)
        }

        if (typeof testcase.hoehe_rechts_new !== "undefined") {
            await this.page.locator('id=hoehe_rechts').clear()
            await this.page.locator('id=hoehe_rechts').fill(testcase.hoehe_rechts_new)
        }

        if (typeof testcase.gesamthoehe_new !== "undefined") {
            await this.page.locator('id=gesamthoehe').clear()
            await this.page.locator('id=gesamthoehe').fill(testcase.gesamthoehe_new)
        }

        if (typeof testcase.teilhoehe_new !== "undefined") {
            await this.page.locator('id=teilhoehe').clear()
            await this.page.locator('id=teilhoehe').fill(testcase.teilhoehe_new)
        }

        if (typeof testcase.breite_new !== "undefined") {
            await this.page.locator('id=breite').clear()
            await this.page.locator('id=breite').fill(testcase.breite_new)
        }

        if (typeof testcase.breite_oben_new !== "undefined") {
            await this.page.locator('id=breite_oben').clear()
            await this.page.locator('id=breite_oben').fill(testcase.breite_oben_new)
        }

        if (typeof testcase.breite_unten_new !== "undefined") {
            await this.page.locator('id=breite_unten').clear()
            await this.page.locator('id=breite_unten').fill(testcase.breite_unten_new)
        }

        // click out --> workaround
        await this.page.click('h3:text("Maße für")')

        // CHECK ERROR MESSAGES (SHOULD NOT EXIST / BE VISIBLE)
        // ********************************************************************************
        // ********************************************************************************

        // if it is a neigung-test then check only the neigung error container 
        if (testcase.neigung) {
            await expect(this.page.locator('p:text("Neigungswinkel:") + div.error_message')).toHaveCount(0) // exist assertion
        }
        // if it is a schräge-test then check only the schräge error container 
        else if (testcase.schraege) {
            await expect(this.page.locator('p:text("Schräge:") + div.error_message')).toHaveCount(0) // exist assertion
        }
        else {
            await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'hoehe_links\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'hoehe_rechts\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'gesamthoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'breite_oben\'] + div.error_message")).toHaveCount(0) // exist assertion
            await expect(this.page.locator("label[for=\'breite_unten\'] + div.error_message")).toHaveCount(0) // exist assertion
        }
    }
}