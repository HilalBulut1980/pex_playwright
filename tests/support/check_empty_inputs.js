import { expect } from 'playwright/test'

exports.CheckEmptyInputs = class CheckEmptyInputs {

    constructor(page) {
        this.page = page;
    }

    async selectProduct(testcase) {

        // visit product page
        await this.page.goto(testcase.url)

        // instead of wait for js-files
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");

        // select TAB
        await this.page.getByText(testcase.tab, { exact: true }).click()

        if (testcase.tab == "Sonderformen") {
            // select window shape
            await this.page.locator("label[for=" + testcase.shape + "]").click()
        }

        //set plissee type
        await this.page.locator("label[for=" + testcase.plisseetyp + "]").click()


    }

    async emptyInputs_DF(testcase) {

        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************

        // set switcher standard/nonstandard
        await this.page.locator("label[for='df_nonstandard']").click()

        if (typeof testcase.glasbreite != 'undefined') {
            await this.page.locator('#glasbreite').fill(testcase.glasbreite, { force: true });
        }

        if (typeof testcase.glashoehe != 'undefined') {
            await this.page.locator('#glashoehe').fill(testcase.glashoehe, { force: true });
        }

        if (typeof testcase.falz != 'undefined') {
            await this.page.locator('#glasleistentiefe').fill(testcase.falz, { force: true });
        }

        if (typeof testcase.finnenbreite != 'undefined') {
            await this.page.locator('#fluegelinnenmass').fill(testcase.finnenbreite, { force: true });
        }

        if (typeof testcase.finnenhoehe != 'undefined') {
            await this.page.locator('#fluegelhoehe').fill(testcase.finnenhoehe, { force: true });
        }

        // only needed for DF30C
        if (typeof testcase.stoffgruppe !== 'undefined') {
            await this.page.selectOption(('select[name="unterer_stoff_gruppe"]'), testcase.stoffgruppe)
            await this.page.selectOption(('select[name="unterer_stoff_nummer"]'), testcase.stoffnummer)
        }

        // click out --> workaround
        await this.page.click('h3:text("Schienenfarbe")')


        // GENERATE ERROR MESSAGE
        // ********************************************************************************
        // ********************************************************************************


        // add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is NOT loaded
        await expect(this.page).not.toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).not.toHaveURL(new RegExp('/checkout/cart$'));


        // CHECK ERROR MESSAGES
        // ********************************************************************************
        // ********************************************************************************

        // error container GLASBREITE
        if (typeof testcase.glasbreite_new != "undefined") {
            await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container GLASHÖHE
        if (typeof testcase.glashoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container GLASLEISTENTIEFE
        if (typeof testcase.falz_new != "undefined") {
            await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container FINNENBREITE
        if (typeof testcase.finnenbreite_new != "undefined") {
            await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toContainText(testcase.message)
        }

        // error container FINNENHÖHE
        if (typeof testcase.finnenhoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toContainText(testcase.message)
        }


        // ENTER CORRECTED DATA
        // ********************************************************************************
        // ********************************************************************************

        // fill in correct glasbreite
        if (typeof testcase.glasbreite_new !== "undefined") {
            await this.page.locator('#glasbreite').clear()
            await this.page.locator('#glasbreite').fill(testcase.glasbreite_new)
        }

        // fill in correct glashöhe
        if (typeof testcase.glashoehe_new !== "undefined") {
            await this.page.locator('#glashoehe').clear()
            await this.page.locator('#glashoehe').fill(testcase.glashoehe_new)
        }

        // fill in correct falztiefe
        if (typeof testcase.falz_new !== "undefined") {
            await this.page.locator('#glasleistentiefe').clear()
            await this.page.locator('#glasleistentiefe').fill(testcase.falz_new)
        }

        // fill in correct finnenbreite
        if (typeof testcase.finnenbreite_new !== "undefined") {
            await this.page.locator('#fluegelinnenmass').clear()
            await this.page.locator('#fluegelinnenmass').fill(testcase.finnenbreite_new)
        }

        // fill in correct finnenhöhe
        if (typeof testcase.finnenhoehe_new !== "undefined") {
            await this.page.locator('#fluegelhoehe').clear()
            await this.page.locator('#fluegelhoehe').fill(testcase.finnenhoehe_new)
        }

        // click out --> workaround 
        await this.page.locator("label[for='gerader_falz']").click()


        // CHECK ERROR MESSAGES (SHOULD NOT EXIST / NOT BE VISIBLE)
        // ********************************************************************************
        // ********************************************************************************

        await expect(this.page.locator("label[for=\'glasbreite\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'glashoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'glasleistentiefe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'fluegelinnenmass\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'fluegelhoehe\'] + div.error_message")).toHaveCount(0) // exist assertion


        // add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is loaded
        await expect(this.page).toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));
    }

    async emptyInputs_SF(testcase) {

        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************

        if (typeof testcase.hoehe != 'undefined') {
            await this.page.locator('id=hoehe').fill(testcase.hoehe)
        }
        if (typeof testcase.breite != 'undefined') {
            await this.page.locator('id=breite').fill(testcase.breite)
        }

        // click out --> workaround
        await this.page.click('h3:text("Schienenfarbe")')


        // GENERATE ERROR MESSAGE
        // ********************************************************************************
        // ********************************************************************************

        // add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is NOT loaded
        await expect(this.page).not.toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).not.toHaveURL(new RegExp('/checkout/cart$'));


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
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toContainText(testcase.message2)

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


        // CHECK ERROR MESSAGES (SHOULD NOT EXIST / NOT BE VISIBLE)
        // ********************************************************************************
        // ********************************************************************************

        await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(0) // exist assertion


        // add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is loaded
        await expect(this.page).toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));

    }

    async emptyInputs_SD(testcase) {

        // ENTER DATA
        // ********************************************************************************
        // ********************************************************************************



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

        // only needed for VSSD
        if (typeof testcase.stoffgruppe !== 'undefined') {
            await this.page.selectOption(('select[name="unterer_stoff_gruppe"]'), testcase.stoffgruppe)
            await this.page.selectOption(('select[name="unterer_stoff_nummer"]'), testcase.stoffnummer)
        }

        // click out --> workaround
        await this.page.click('h3:text("Maße für")')



        // GENERATE ERROR MESSAGE
        // ********************************************************************************
        // ********************************************************************************

        // add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is NOT loaded
        await expect(this.page).not.toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).not.toHaveURL(new RegExp('/checkout/cart$'));


        // CHECK ERROR MESSAGES
        // ********************************************************************************
        // ********************************************************************************

        // error container HÖHE
        if (typeof testcase.hoehe_new != "undefined") {
            await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("[for=\'hoehe\'] + div.error_message")).toContainText(testcase.message)
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
            await expect(this.page.locator("label[for=\'teilhoehe\'] + div.error_message")).toContainText(testcase.message2)
        }

        // error container BREITE
        if (typeof testcase.breite_new != "undefined") {
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(1) // exist assertion
            await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toContainText(testcase.message2)
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


        // ENTER CORRECTED DATA
        // ********************************************************************************
        // ********************************************************************************

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


        await expect(this.page.locator("label[for=\'hoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'hoehe_links\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'hoehe_rechts\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'gesamthoehe\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'breite\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'breite_oben\'] + div.error_message")).toHaveCount(0) // exist assertion
        await expect(this.page.locator("label[for=\'breite_unten\'] + div.error_message")).toHaveCount(0) // exist assertion


        //add to cart
        await this.page.locator('.add_to_cart_button').click();

        //make sure that cart is loaded
        await expect(this.page).toHaveURL(/\/checkout\/cart/);
        // also works:
        // await expect(this.page).toHaveURL(new RegExp('/checkout/cart$'));

    }
}