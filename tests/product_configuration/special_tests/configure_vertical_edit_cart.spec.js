import { expect } from 'playwright/test'
import { test } from 'playwright/test'


test('check edit in cart - vertical', async ({ page }) => {  // page is a page instance  

    // visit product page
    await page.goto('/bruneck-1186')

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");



    await page.getByText('Senkrechte Fenster', { exact: true }).click()

    // check from prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('67,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('43,55');
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('67,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('43,55');

    // VS2 is preselected
    // direkte Befestigung is preselected

    // fill in hoehe and breite
    await page.locator('id=hoehe').fill('1400')
    await page.locator('id=breite').fill('1200')


    // schienenfarbe weiß is preselected

    // bediensgriff standard is preselected

    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('216,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('140,40');
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('216,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('140,40');


    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));

    //************************ CHECK CART PRICES ********************************/

    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('216,00') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('140,40')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('432,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('280,80')


    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('151,20');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('280,80');


    // //************************ EDIT PRODUCT ********************************/
    // //******************************************************************* */

    await page.locator('a[title="Artikeloptionen bearbeiten"]').click();

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");



    // edit befestigung
    await page.locator("label[for='gelenkklebeplatten']").click()

    // edit height
    await page.locator('id=hoehe').clear()
    await page.locator('id=hoehe').fill('1500')

    // // edit schienenfarbe
    await page.locator("label[for='silber']").click()

    // // edit bediengriff  //+17,00/25,00
    await page.locator("label[for='design']").click()

    // check new prices in configurator
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('271,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('183,90');
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('271,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('183,90');

    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));


    // //************************ CHECK CART PRICES ********************************/

    // check preices in cart and edit product
    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('271,00') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('183,90')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('542,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('367,80')


    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('174,20');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('367,80');



    // ******************************** PROCEED TO CHECKOUT *********************************
   
    await page.locator('div.cart-collaterals ul span > span').click();

    await expect(page).toHaveURL(new RegExp('/checkout/onepage$'));
    // // end test here without checkout test

})