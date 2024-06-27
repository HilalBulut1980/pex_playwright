import { expect } from 'playwright/test'
import { test } from 'playwright/test'

const testcase = {

    "name": "priceCheck_customer_account_AT",

    "email": "testkonto_AT@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-rot",
    "productname_1": "Meran-1177",
    "catPrice_special_1": "58,29",  // R5 + R18 = 73 -5,00 -15% = 51 --> /119*120 = 51,43
    "catPrice_old_1": "73,61", // 73,00 /119 * 120

    "categoryPage_2": "/plissee-beige",
    "productname_2": "Peschiera-2035",
    "catPrice_special_2": "29,75",  // R5 + R8 = 64,00 -5,00  -50% = 29,50 --> /119*120 = 29,75
    "catPrice_old_2": "64,54",  //64,00 /119 * 120

    "categoryPage_3": "/plissee-gelb",
    "productname_3": "Luna-4180",
    "catPrice_special_3": "45,38",  // R5 + R12 + R7 = 82 -5,00 -2,00 -40% = 45 --> /119*120 = 45,38
    "catPrice_old_3": "82,69",  //82,00 /119 * 120

    "productPage_1": "/riva-2083",
    "price_special_1": "49,61",  // R7 = 82 -40% = 49,20 --> /119*120 = 49,61
    "price_old_1": "82,69", //82,00 /119 * 120

    "productPage_2": "/liviano-4313",
    "price_special_2": "37,71", // R5 + R11 = 73 -5,00 -45% = 37,40 --> /119*120 = 37,71
    "price_old_2": "73,61", //73,00 /119 * 120

    "servicePage_1": "/aenderungsauftrag-breite",
    "price_service_1": "50,42",  // 50,00 /119 * 120 = 50,42

    "servicePage_2": "/aenderungsauftrag-schnurlaenge",
    "price_service_2": "30,25"  // 30,00 /119 * 120 = 30,25
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- testkonto_AT@delphinus-test.de ---
    // await page.goto('https://staging:staging_pwd@plissee-experte.de/scripts/customers/testaccounts.php?email=testkonto_AT@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Oesterreich&password=Abcde_12345&billing_street=Teststrasse%203&billing_postcode=1110&billing_city=Graz&billing_country=AT&shipping_street=Kobelgasse%203&shipping_postcode=1110&shipping_city=Wien&shipping_country=AT')
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_AT@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Oesterreich&password=Abcde_12345&billing_street=Teststrasse%203&billing_postcode=1110&billing_city=Graz&billing_country=AT&shipping_street=Kobelgasse%203&shipping_postcode=1110&shipping_city=Wien&shipping_country=AT')

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