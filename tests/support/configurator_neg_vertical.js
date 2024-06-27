import { expect } from 'playwright/test'

exports.NEG_VerticalForms = class NEG_VerticalForms {

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

        // select TAB (product typ)
        await this.page.getByText(testcase.produkttyp, { exact: true }).click()


        // select plissee type VS1 / VS2
        await this.page.locator("label[for=" + testcase.plisseetyp + "]").click()

        // select Befestigung 
        if (typeof testcase.befestigung !== "undefined") {
            await this.page.locator("label[for=" + testcase.befestigung + "]").click()
        }


        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************

        // fill in hoehe and breite
        await this.page.locator('id=hoehe').fill(testcase.hoehe)
        await this.page.locator('id=breite').fill(testcase.breite)

        // click out --> workaround
        await this.page.click('h3:text("Schienenfarbe")')



        // CHECK ERROR MESSAGES
        // ********************************************************************************
        // ********************************************************************************

        // error container HÖHE
        if (typeof testcase.hoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container BREITE
        if (typeof testcase.breite_new != "undefined") {
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toContainText(testcase.message)

        }


        // ENTER CORRECTED DATA
        // ********************************************************************************
        // ********************************************************************************

        // fill in correct hoehe 
        if (typeof testcase.hoehe_new !== "undefined") {
            await this.page.locator('id=hoehe').clear()
            await this.page.locator('id=hoehe').fill(testcase.hoehe_new)
        }

        // fill in correct breite 
        if (typeof testcase.breite_new !== "undefined") {
            await this.page.locator('id=breite').clear()
            await this.page.locator('id=breite').fill(testcase.breite_new)
        }

        // click out --> workaround 
        await this.page.click('h3:text("Schienenfarbe")')


        // CHECK ERROR MESSAGES (SHOULD NOT EXIST / BE VISIBLE)
        // ********************************************************************************
        // ********************************************************************************

        await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(0) // exist assertion

    }
}