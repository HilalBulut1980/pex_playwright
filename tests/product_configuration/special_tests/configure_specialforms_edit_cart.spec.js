import { expect } from 'playwright/test'
import { test } from 'playwright/test'


test('check edit in cart - vertical', async ({ page }) => {  // page is a page instance  

    // visit product page
    await page.goto('/perlissimo-5125')

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");

    await page.getByText('Sonderformen', { exact: true }).click()


    // check from prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('88,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('53,95'); // Regel 5, 6 --> -5,00 -35%
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('88,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('53,95'); // Regel 5, 6 --> -5,00 -35%


    // Vierecke is preselected
    // F1 is preselected
    // direkte Befestigung is preselected

    // fill in hoehe and breite
    await page.locator('id=hoehe').fill('1400')
    await page.locator('id=breite').fill('1200')


    // schienenfarbe weiß is preselected

    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('234,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('148,85');
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('234,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('148,85');


    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));

    //************************ CHECK CART PRICES ********************************/

    // check preices in cart and edit product
    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('234,00') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('148,85')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('468,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('297,70')

    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('170,30');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('297,70');


    //************************ EDIT PRODUCT ********************************/
    //******************************************************************* */

    await page.locator('a[title="Artikeloptionen bearbeiten"]').click();

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


    // select window shape
    await page.locator("label[for='triangle']").click()

    //set Plissee typ
    await page.locator("label[for='vs9']").click()

    // edit height & width
    await page.locator('id=hoehe').fill('1500')  // --> 1500 x 1200 --> 563,00
    await page.locator('id=breite').fill('1200')

    // edit schienenfarbe
    await page.getByText("bronze", { exact: true }).click()

    // edit bediengriff
    await page.locator("label[for='design']").click()

    // check prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('575,50'); // = 563 + 12,50 = 575,50
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('371,20'); // =563 -5,00 -35% = 362,70 + 8,50
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('575,50');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('371,20');

    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));


    //************************ CHECK CART PRICES ********************************/

    // check preices in cart and edit product
    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('575,50') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('371,20')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('1.151,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('742,40')


    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('408,60');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('742,40');


    // ******************************** PROCEED TO CHECKOUT *********************************

    await page.locator('div.cart-collaterals ul span > span').click();

    await expect(page).toHaveURL(new RegExp('/checkout/onepage$'));
    // // end test here without checkout test

})