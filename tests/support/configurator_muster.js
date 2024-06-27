import { expect } from 'playwright/test'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.MusterConfigurator = class MusterConfigurator {

    constructor(page) {
        this.page = page;
    }

    async configureProduct(testcase) {

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit product page
        await this.page.goto(testcase.stoff_url)

        // instead of wait for js-files
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");

        // check  from prices
        await expect(this.page.locator('.product_prices_top > .price .original_price')).toContainText(testcase.abPreis);
        await expect(this.page.locator('.product_prices_top > .price .final_price')).toContainText(testcase.abPreis_red);
        await expect(this.page.locator('.price_amount > .product_prices > .price .original_price')).toContainText(testcase.abPreis);
        await expect(this.page.locator('.price_amount > .product_prices > .price .final_price')).toContainText(testcase.abPreis_red);

        await this.page.locator('button.add_stoffmuster_button').click()

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        await newCart.checkCartMuster()
        await newCheckout.checkOut(testcase.produkttyp, testcase.missing_name, testcase.login, testcase.prefix, testcase.first_name, testcase.last_name, testcase.company_name, testcase.vatID, testcase.email, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.password, testcase.prefix_2, testcase.first_name_2, testcase.last_name_2, testcase.company_name_2, testcase.vatID_2, testcase.street_2, testcase.postal_code_2, testcase.city_2, testcase.state_2, testcase.phone_2, testcase.versandkosten, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.produkttyp, testcase.payment, testcase.strike_checkout, testcase.strike_checkout_total, testcase.final_checkout, testcase.final_checkout_total, testcase.kosten_stab_checkout, testcase.rabatt_code, testcase.rabatt_betrag_checkout, testcase.versandkosten, testcase.sieSparen_checkout, testcase.total_checkout)
        await newCheckout.placeOrder(testcase.produkttyp, testcase.rmg, testcase.payment, testcase.canceled_payment, testcase.failed_payment, testcase.final_backend, testcase.final_backend_total, testcase.kosten_befestigung, testcase.kosten_befestigung_total, testcase.kosten_stab_backend, testcase.kosten_stab_checkout, testcase.versandkosten, testcase.total_backend, testcase.vat_rate, testcase.vat_product, testcase.vat_rate_2, testcase.vat_bedienstab, testcase.vat_rate_3, testcase.vat_befestigung, testcase.vat_total, testcase.rabattbetrag_backend, testcase.rabattbetrag_backend_1, testcase.rabattbetrag_backend_2, testcase.rabatt_code)
    }
}