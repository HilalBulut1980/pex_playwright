import { expect } from 'playwright/test'
import { test } from 'playwright/test'


test('check edit in cart - roof', async ({ page }) => {  // page is a page instance  

    // visit product page
    await page.goto('/syrakus-4218')

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


    await page.getByText('Dachfenster', { exact: true }).click()

    // check from prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('112,00'); //107 + 5 (Preis für ungenormte DF mit PG2 = 107 )
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('57,50'); // Regel 5, 12, 8 --> -5,00, -2,00, -35%, --> 112-5-2-50= 50,00 |+ 5,00
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('112,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('57,50');


    // DF20 standard is preselected

    // select DF modell
    await page.selectOption(('select[name="df_hersteller"]'), 'Fakro')
    await page.selectOption(('select[name="df_product"]'), 'FTP 9')
    await page.selectOption(('select[name="df_product_type"]'), '09 94 / 140 (Holz)') // --> 1233x780 --> 208,00 + 5,00

    // schienenfarbe weiß is preselected

    // bediensgriff standard is preselected


    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('213,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('108,00'); //213,00 -5,00 -2,00 -50% |+5,00
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('213,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('108,00');


    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));


    //************************ CHECK CART PRICES ********************************/

    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('213,00') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('108,00')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('426,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('216,00')


    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('210,00');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('216,00');


    // //************************ EDIT PRODUCT ********************************/
    // //******************************************************************* */

    await page.locator('a[title="Artikeloptionen bearbeiten"]').click();

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


    //set Plissee typ
    await page.locator("label[for='df20c']").click()

    // select DF modell
    await page.selectOption(('select[name="df_product"]'), 'PTL-V')
    await page.selectOption(('select[name="df_product_type"]'), '55 / 118 (Kunststoff)') // --> 1013 x 391 --> 196,00 + 5,00    

    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText('201,00');
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText('102,00'); // = 201,00 -5,00 -2,00 -50% |+5,00 = 102,00
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText('201,00');
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText('102,00');


    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));


    // //************************ CHECK CART PRICES ********************************/

    // check preices in cart and edit product
    //check prices
    await expect(page.locator("div.einzelpreis span.old-price")).toContainText('201,00') // Originalpreis einzeln
    await expect(page.locator("div.cart-table > div:nth-of-type(1) div.einzelpreis span.cart-price > span")).toContainText('102,00')
    await expect(page.locator("div.zwischensumme span.old-price")).toContainText('402,00')
    await expect(page.locator("div.cart-table > div:nth-of-type(1) span.cart-price > span > span")).toContainText('204,00')


    //check Versandkosten --> should be always 0,00 at this step
    await expect(page.locator("span.cart_versand_totals span.price")).toContainText('0,00 €');

    //check 'Sie sparen'
    await expect(page.locator("span.cart_saved_total")).toContainText('198,00');

    //check total cart
    await expect(page.locator("strong.cart_value > span")).toContainText('204,00');



    // ******************************** PROCEED TO CHECKOUT *********************************

    await page.locator('div.cart-collaterals ul span > span').click();

    await expect(page).toHaveURL(new RegExp('/checkout/onepage$'));
    // // end test here without checkout test

})