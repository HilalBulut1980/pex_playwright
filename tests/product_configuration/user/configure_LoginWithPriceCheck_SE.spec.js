import { expect } from 'playwright/test'
import { test } from 'playwright/test'

const testcase = {

    "name": "priceCheck_customer_account_SE",

    "email": "testkonto_SE@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-rot",
    "productname_1": "Meran-1177",
    "catPrice_special_1": "60,71",  // R5 + R18 = 73 -5,00 -15% = 51 --> /119*125 = 53,57
    "catPrice_old_1": "76,68", // 73,00 /119 * 125

    "categoryPage_2": "/plissee-beige",
    "productname_2": "Peschiera-2035",
    "catPrice_special_2": "30,99",  // R5 + R8 = 64,00 -5,00 -50% = 29,50  --> /119*125 = 30,99
    "catPrice_old_2": "67,23",  //64,00 /119 * 125

    "categoryPage_3": "/plissee-gelb",
    "productname_3": "Luna-4180",
    "catPrice_special_3": "47,27",  // R5 + R12 + R7 = 82 -5,00 -2,00 -40% = 45 --> /119*125 = 47,27
    "catPrice_old_3": "86,13",  //82,00 /119 * 125

    "productPage_1": "/riva-2083",
    "price_special_1": "51,68",  // R7 = 82 -40% = 49,20 --> /119*125 = 51,68
    "price_old_1": "86,13", //82,00 /119 * 125

    "productPage_2": "/liviano-4313",
    "price_special_2": "39,29", // R5 + R11 = 73 -5,00 -45% = 37,40 --> /119*125 = 39,29
    "price_old_2": "76,68", //73,00 /119 * 125

    "servicePage_1": "/aenderungsauftrag-breite",
    "price_service_1": "52,52",  // 50,00 /119 * 125 = 52,52

    "servicePage_2": "/aenderungsauftrag-schnurlaenge",
    "price_service_2": "31,51"  // 30,00 /119 * 125 = 31,51
}



test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- testkonto_SE@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_SE@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Schweden&password=Abcde_12345&billing_street=Teststrasse%205&billing_postcode=8521&billing_city=Stockholm&billing_country=SE&shipping_street=Testingstreet%2010&shipping_postcode=1234&shipping_city=Testcity&shipping_country=SE')

    // ******************************* LOGIN TO USER ACCOUNT *******************************
    // *************************************************************************************
    await page.goto('/customer/account/login')
    await page.locator('input[id="login-email"]').fill(testcase.email);
    await page.locator('input[id="login-password"]').fill(testcase.password);
    await page.locator('button').getByText(/Anmelden/).first().click();


    // ******************************* CHECK PRICES ON 1ST CAT PAGE *******************************
    await page.goto(testcase.categoryPage_1);
    await expect(page.getByText(testcase.productname_1).first().locator('.original_price')).toContainText(testcase.catPrice_old_1);
    await expect(page.getByText(testcase.productname_1).first().locator('.final_price')).toContainText(testcase.catPrice_special_1);


    // ******************************* CHECK PRICES ON 2ND CAT PAGE *******************************
    await page.goto(testcase.categoryPage_2);
    await expect(page.getByText(testcase.productname_2).first().locator('.original_price')).toContainText(testcase.catPrice_old_2);
    await expect(page.getByText(testcase.productname_2).first().locator('.final_price')).toContainText(testcase.catPrice_special_2);


    // ******************************* CHECK PRICES ON 3RD CAT PAGE *******************************
    await page.goto(testcase.categoryPage_3);
    await expect(page.getByText(testcase.productname_3).first().locator('.original_price')).toContainText(testcase.catPrice_old_3);
    await expect(page.getByText(testcase.productname_3).first().locator('.final_price')).toContainText(testcase.catPrice_special_3);


    // ******************************* CHECK PRICES ON 1ST PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_1);
    const original_prices1 = await page.locator('.original_price').all(); // put all original prices in an array
    const final_prices1 = await page.locator('.final_price').all(); // put all final prices in an array

    // You can perform actions or assertions on each element of the array --> the only way to simulate {multiple: true} from cypress
    for (const original_price1 of original_prices1) {
        await expect(original_price1).toContainText(testcase.price_old_1); // Example assertion
    }

    // You can perform actions or assertions on each element of the array --> the only way to simulate {multiple: true} from cypress
    for (const final_price1 of final_prices1) {
        await expect(final_price1).toContainText(testcase.price_special_1); // Example assertion
    }


    // ******************************* CHECK PRICES ON 2ND PRODUCT PAGE *******************************
    await page.goto(testcase.productPage_2);
    const original_prices2 = await page.locator('.original_price').all(); // put all original prices in an array
    const final_prices2 = await page.locator('.final_price').all(); // put all final prices in an array

    // You can perform actions or assertions on each element of the array --> the only way to simulate {multiple: true} from cypress
    for (const original_price2 of original_prices2) {
        await expect(original_price2).toContainText(testcase.price_old_2); // Example assertion
    }

    // You can perform actions or assertions on each element of the array --> the only way to simulate {multiple: true} from cypress
    for (const final_price2 of final_prices2) {
        await expect(final_price2).toContainText(testcase.price_special_2); // Example assertion
    }


    // ******************************* CHECK PRICES ON 1ST SERVICE PAGE *******************************
    await page.goto(testcase.servicePage_1);
    await expect(page.locator('.price')).toContainText(testcase.price_service_1);


    // ******************************* CHECK PRICES ON 2ND SERVICE PAGE *******************************
    await page.goto(testcase.servicePage_2);
    await expect(page.locator('.price')).toContainText(testcase.price_service_2);
})