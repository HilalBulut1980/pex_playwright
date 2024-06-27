import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {

    "name": "PEXConfig. - Rabattcode 20% mit Falzfix",
    "produkt": "Falzfix",
    "url": "/falzfix",
    "abPreis": "6,50",
    "produkttyp": "Zubehoer",
    "option1": "dunkelbraun",
    "option2": "4 Falzfixträger +10,50 €", //6,50+ 10,50
    "option3": "",

    "rabatt_code": "PEX-TEST-20P", 
    "rabatt_faktor_a": 20,  
    "rabatt_faktor_b": 80,

    "anzahl": 1,
    "grundpreis": 17,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Tobias",
    "last_name": "Kunze",
    "email": "test@delphinus-test.de",
    "street": "Santosdamm 55",
    "postal_code": "22043",
    "city": "Köln",
    "state": "Deutschland",
    "phone": "225544",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('Test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto('/scripts/coupons/create.php');

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
