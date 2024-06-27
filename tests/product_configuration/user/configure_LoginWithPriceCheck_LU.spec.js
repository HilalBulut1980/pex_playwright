import { expect } from 'playwright/test'
import { test } from 'playwright/test'

const testcase = {

    "name": "priceCheck_customer_account_LU",

    "email": "testkonto_LU@delphinus-test.de",
    "password": "Abcde_12345",

    "categoryPage_1": "/plissee-violett",
    "productname_1": "Lecce-4914",
    "catPrice_special_1": "39,62",  // R5 + R6 = 67 -5,00 -35% = 40,30 --> /119*117 = 39,62
    "catPrice_old_1": "65,87", // 67,00 /119 * 117

    "categoryPage_2": "/plissee-weiss",
    "productname_2": "Monza-1113",
    "catPrice_special_2": "56,24",  // R5 + R6 = 93,00 -5,00 -35% = 57,20  --> /119*117 = 56,24
    "catPrice_old_2": "91,44",  //93,00 /119 * 117

    "categoryPage_3": "/plissee-blau",
    "productname_3": "Finura-4440",
    "catPrice_special_3": "43,46",  // R5 + R6 = 73 -5,00 -35% = 44,20 --> /119*117 = 43,46
    "catPrice_old_3": "71,77",  //73,00 /119 * 117

    "productPage_1": "/rom-1064",
    "price_special_1": "39,62",  // R5 + R6 = 67 -5,00 -35% = 40,30 --> /119*117 = 39,62
    "price_old_1": "65,87", //67,00 /119 * 117

    "productPage_2": "/structura-4032",
    "price_special_2": "40,56", // R5 + R12 + R11 = 82 -5,00 -2,00 -45% = 41,25 --> /119*117 = 40,56
    "price_old_2": "80,62", //82,00 /119 * 117

    "servicePage_1": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "price_service_1": "19,66",  // 20,00 /119 * 117 = 19,66

    "servicePage_2": "/reparaturauftrag-schnur-ersetzen",
    "price_service_2": "29,50"  // 30,00 /119 * 117 = 29,50
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- testkonto_LU@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_LU@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Luxemburg&password=Abcde_12345&billing_street=Teststrasse%2010&billing_postcode=8521&billing_city=Luxemburg&billing_country=LU&shipping_street=Lorbeergasse%203&shipping_postcode=6666&shipping_city=Luxemburg&shipping_country=LU')

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