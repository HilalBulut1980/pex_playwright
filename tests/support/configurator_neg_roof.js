import { expect } from 'playwright/test'

exports.NEG_RoofForms = class NEG_RoofForms {

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


        // select plissee type DF20, DF20C or DF30C
        await this.page.locator("label[for=" + testcase.plisseetyp + "]").click()

        // set switcher standard/nonstandard
        await this.page.locator("label[for=" + testcase.df_switcher + "]").click()


        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************

        await this.page.locator('#glasbreite').fill(testcase.df_glasbreite, { force: true });
        await this.page.locator('#glashoehe').fill(testcase.df_glashoehe, { force: true });
        await this.page.locator('#glasleistentiefe').fill(testcase.df_falztiefe, { force: true });
        await this.page.locator('#fluegelinnenmass').fill(testcase.df_fluegelbreite, { force: true });
        await this.page.locator('#fluegelhoehe').fill(testcase.df_fluegelhoehe, { force: true });


        // click out --> workaround 
        await this.page.locator("label[for='gerader_falz']").click()

        // CHECK ERROR MESSAGES
        // ********************************************************************************
        // ********************************************************************************

        // error container GLASBREITE
        if (typeof testcase.df_glasbreite_new != "undefined") {
            await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container GLASHÖHE
        if (typeof testcase.df_glashoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container GLASLEISTENTIEFE
        if (typeof testcase.df_falztiefe_new != "undefined") {
            await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container FINNENBREITE
        if (typeof testcase.df_fluegelbreite_new != "undefined") {
            await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container FINNENHÖHE
        if (typeof testcase.df_fluegelhoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toContainText(testcase.message)
        }


        // ENTER CORRECTED DATA
        // ********************************************************************************
        // ********************************************************************************

        // fill in correct glasbreite
        if (typeof testcase.df_glasbreite_new !== "undefined") {
            await this.page.locator('#glasbreite').clear()
            await this.page.locator('#glasbreite').fill(testcase.df_glasbreite_new)
        }

        // fill in correct glashöhe
        if (typeof testcase.df_glashoehe_new !== "undefined") {
            await this.page.locator('#glashoehe').clear()
            await this.page.locator('#glashoehe').fill(testcase.df_glashoehe_new)
        }

        // fill in correct falztiefe
        if (typeof testcase.df_falztiefe_new !== "undefined") {
            await this.page.locator('#glasleistentiefe').clear()
            await this.page.locator('#glasleistentiefe').fill(testcase.df_falztiefe_new)
        }

        // fill in correct finnenbreite
        if (typeof testcase.df_fluegelbreite_new !== "undefined") {
            await this.page.locator('#fluegelinnenmass').clear()
            await this.page.locator('#fluegelinnenmass').fill(testcase.df_fluegelbreite_new)
        }

        // fill in correct finnenhöhe
        if (typeof testcase.df_fluegelhoehe_new !== "undefined") {
            await this.page.locator('#fluegelhoehe').clear()
            await this.page.locator('#fluegelhoehe').fill(testcase.df_fluegelhoehe_new)
        }

        // click out --> workaround 
        await this.page.locator("label[for='gerader_falz']").click()

        // CHECK ERROR MESSAGES (SHOULD NOT EXIST / BE VISIBLE)
        // ********************************************************************************
        // ********************************************************************************

        await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toHaveCount(0) // exist assertion

    }
}