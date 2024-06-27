import { expect } from 'playwright/test'

exports.Cart = class Cart {

    constructor(page) {
        this.page = page;
    }

    async checkCart(original_cart, reduced_cart, original_total, reduced_total, kosten_stab, sieSparen, totalCart, rabattCode, rabattBetrag, sieSparen_new, totalCart_new) {



        //check prices
        await expect(this.page.locator("div.einzelpreis span.old-price")).toContainText(original_cart) // Originalpreis einzeln
        await expect(this.page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText(reduced_cart)
        await expect(this.page.locator("div.zwischensumme span.old-price")).toContainText(original_total)
        await expect(this.page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText(reduced_total)


        //check Preis Bedienstab
        if (typeof kosten_stab !== "undefined" && kosten_stab != "0,00") {
            await expect(this.page.locator("div.cart-table > div:nth-of-type(2) div.einzelpreis span > span")).toContainText(kosten_stab); // Bedienstab einzeln
            await expect(this.page.locator("div.cart-table > div:nth-of-type(2) span > span > span")).toContainText(kosten_stab); // Bedienstab total
        }

        //check Versandkosten --> should be always 0,00 at this step
        await expect(this.page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

        //check 'Sie sparen'
        await expect(this.page.locator("span.cart_saved_total")).toContainText(sieSparen);

        //check total cart
        await expect(this.page.locator("strong.cart_value > span")).toContainText(totalCart);


        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattCode !== "undefined") {//if Code exists
            await this.page.locator('div').filter({ hasText: /^Gutschein einlösen$/ }).click();
            await this.page.locator('#coupon_code').fill(rabattCode);

            // this wait is needed since without we receive ReferenceError: discountForm is not defined
            await this.page.waitForTimeout(3000);

            // await this.page.getByRole('button', { name: 'Gutschein einlösen' }).click();
            await this.page.locator("#discount-coupon-form button").click()

            // check rabattcode
            await expect(this.page.locator("span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(1)")).toHaveText('Rabatt (' + rabattCode + ')')
            // check rabattbetrag next element to rabatt
            // await expect(this.page.locator('span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(1) + span')).toContainText(rabattBetrag)
            await expect(this.page.locator('span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(2)')).toContainText(rabattBetrag)

            //check 'Sie sparen new'
            await expect(this.page.locator("span.cart_saved_total")).toContainText(sieSparen_new);

            //check total cart new
            await expect(this.page.locator("strong.cart_value > span")).toContainText(totalCart_new);

        }


        // ******************************** PROCEED TO CHECKOUT *********************************
        await this.page.locator('div.cart-collaterals ul span > span').click();

        await expect(this.page).toHaveURL(new RegExp('/checkout/onepage$'));

    }
    // products without Streichpreis ==> Gutscheine, Service, Zubehör
    async checkCartSimple(price, total_price, totalCart, rabattCode, rabattBetrag, sieSparen_new, totalCart_new) {

        await expect(this.page.locator("div.einzelpreis span > span")).toContainText(price);
        await expect(this.page.locator("#cart-submit-form span > span > span")).toContainText(total_price);

        // --> TO DO: acivate this for all simples außer Gutscheine
        //check Versandkosten --> should be always 0,00 at this step
        // await expect(this.page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

        //check total cart
        await expect(this.page.locator("strong.cart_value > span")).toContainText(totalCart);




        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattCode !== "undefined") {//if Code exists
            await this.page.locator('div').filter({ hasText: /^Gutschein einlösen$/ }).click();
            await this.page.locator('#coupon_code').fill(rabattCode);

            // this wait is needed since without we receive ReferenceError: discountForm is not defined
            await this.page.waitForTimeout(3000);

            // await this.page.getByRole('button', { name: 'Gutschein einlösen' }).click();
            await this.page.locator("#discount-coupon-form button").click()

            // check rabattcode
            await expect(this.page.locator("span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(1)")).toHaveText('Rabatt (' + rabattCode + ')')
            // check rabattbetrag next element to rabatt
            await expect(this.page.locator('span.cart_versand_totals > span:nth-of-type(1) > span:nth-of-type(1) + span')).toContainText(rabattBetrag)

            //check 'Sie sparen new'
            await expect(this.page.locator("span.cart_saved_total")).toContainText(sieSparen_new);

            //check total cart new
            await expect(this.page.locator("strong.cart_value > span")).toContainText(totalCart_new);

        }

        // ******************************** PROCEED TO CHECKOUT *********************************
        await this.page.locator('div.cart-collaterals ul span > span').click();

        await expect(this.page).toHaveURL(new RegExp('/checkout/onepage$'));

    }

    async checkCartMuster() {

        await expect(this.page.locator(".prices_section .einzelpreis")).toContainText("kostenlos");
        await expect(this.page.locator(".prices_section .rowtotal-container")).toContainText("kostenlos");


        //check Versandkosten --> should be always 0,00 at this step
        await expect(this.page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

        //check total cart
        await expect(this.page.locator("strong.cart_value > span")).toContainText('0,00 €');

        // proceed to checkout
        await this.page.locator("div.cart-collaterals ul span > span").click()
    }

    async checkCartRMG(original_cart, reduced_cart, original_total, reduced_total, sieSparen, totalCart) {

        //check prices
        await expect(this.page.locator("div.einzelpreis span.old-price")).toContainText(original_cart) // Originalpreis einzeln
        await expect(this.page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText(reduced_cart)
        await expect(this.page.locator("div.zwischensumme span.old-price")).toContainText(original_total)
        await expect(this.page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText(reduced_total)

        //check RMG
        await expect(this.page.locator('.cart-table > :nth-child(2)').locator('.cart_item_name')).toHaveText(/Richtig Messen Garantie für diese Bestellung/);
        await expect(this.page.locator('.cart-table > :nth-child(2)').locator('.einzelpreis').locator('.cart-price')).toHaveText(/kostenlos/); // Originalpreis einzeln
        await expect(this.page.locator('.cart-table > :nth-child(2)').locator('.zwischensumme').locator('.cart-price')).toHaveText(/kostenlos/); // red. Preis einzeln

        //check Versandkosten --> should be always 0,00 at this step
        await expect(this.page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

        //check 'Sie sparen'
        await expect(this.page.locator("span.cart_saved_total")).toContainText(sieSparen);

        //check total cart
        await expect(this.page.locator("strong.cart_value > span")).toContainText(totalCart);

        // ******************************** PROCEED TO CHECKOUT *********************************
        await this.page.locator('div.cart-collaterals ul span > span').click();

        await expect(this.page).toHaveURL(new RegExp('/checkout/onepage$'));

    }
}