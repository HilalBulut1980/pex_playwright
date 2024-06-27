import { expect } from 'playwright/test'
import { test } from 'playwright/test'

const testcase = {

    "name": "priceCheck_customer_account_CH",

    "email": "testkonto_CH@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/zubehoer",
    "productname_1": "Wandwinkel", //5,00
    "cat_price_1": "4,20",  //  --> 5,00 / 119 * 100

    "categoryPage_2": "/zubehoer",
    "productname_2": "Halteclip klein", //4,00
    "cat_price_2": "3,36",  // --> 4,00 / 119 * 100

    "categoryPage_3": "/zubehoer",
    "productname_3": "Ausgleichskeil 7,5°",  //4,00
    "cat_price_3": "3,36",   //  --> 4,00 / 119 * 100

    "categoryPage_4": "/zubehoer",
    "productname_4": "Glasleistenwinkel - Set mit 2 Stück",  //12
    "cat_price_4": "10,08",   //  --> 12 / 119 * 100

    "productPage_1": "/spannschuh", //4,15
    "price_1": "3,49", // --> 4,15 / 119 * 100

    "productPage_2": "/distanzstuecke", //7,00
    "price_2": "5,88",  //  --> 7,00 / 119 * 100

    "productPage_3": "/bedienstab", // 44
    "price_3": "36,97",// --> 44 / 119 * 100

    "productPage_4": "/klemmtraeger-slim-einzeln", // 7,00
    "price_4": "5,88" // --> 7,00 / 119 * 100
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- testkonto_CH@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_CH@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Schweiz&password=Abcde_12345&billing_street=Teststrasse%205&billing_postcode=1234&billing_city=Zürich&billing_country=CH&shipping_street=Cypressstrasse%2010&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')

    // ******************************* LOGIN TO USER ACCOUNT *******************************
    // *************************************************************************************
    await page.goto('/customer/account/login')
    await page.locator('input[id="login-email"]').fill(testcase.email);
    await page.locator('input[id="login-password"]').fill(testcase.password);
    await page.locator('button').getByText(/Anmelden/).first().click();


    // ******************************* CHECK PRICES ON 1ST CAT PAGE *******************************
    await page.goto(testcase.categoryPage_1);
    await expect(page.getByText(testcase.productname_1).first().locator('.price')).toContainText(testcase.cat_price_1);


    // ******************************* CHECK PRICES ON 2ND CAT PAGE *******************************
    // await page.goto(testcase.categoryPage_2);
    await expect(page.getByText(testcase.productname_2).first().locator('.price')).toContainText(testcase.cat_price_2);


    // ******************************* CHECK PRICES ON 3RD CAT PAGE *******************************
    // await page.goto(testcase.categoryPage_3);
    await expect(page.getByText(testcase.productname_3).first().locator('.price')).toContainText(testcase.cat_price_3);


    // ******************************* CHECK PRICES ON 4TH CAT PAGE *******************************
    // await page.goto(testcase.categoryPage_4);
    await expect(page.getByText(testcase.productname_4).first().locator('.price')).toContainText(testcase.cat_price_4);


    // ******************************* CHECK PRICES ON 1ST PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_1);
    await expect(page.locator('.product_prices')).toContainText(testcase.price_1);


    // ******************************* CHECK PRICES ON 2ND PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_2);
    await expect(page.locator('.product_prices')).toContainText(testcase.price_2);


    // ******************************* CHECK PRICES ON 3RD PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_3);
    await expect(page.locator('.product_prices')).toContainText(testcase.price_3);


    // ******************************* CHECK PRICES ON 4TH PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_4);
    await expect(page.locator('.product_prices')).toContainText(testcase.price_4);


})