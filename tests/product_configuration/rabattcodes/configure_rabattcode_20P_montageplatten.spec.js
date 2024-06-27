import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {

    "name": "PEXConfig. - Rabattcode 20% mit Montageplatten",
    "produkt": "Stick&Fix- einzelne Montageplatten",
    "url": "/montageplatten-einzeln",
    "abPreis": "9,35",
    "produkttyp": "Zubehoer",
    "option1": "weiß",
    "option1": "3 Montageplatten inkl. Klebepads +8,00 €",
    "option2": "",
    "option3": "",


    "rabatt_code": "PEX-TEST-20P", 
    "rabatt_faktor_a": 20,  
    "rabatt_faktor_b": 80,

    "anzahl": 5,
    "grundpreis": 17.35,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Mahmoudi",
    "email": "test@delphinus-test.de",
    "street": "Via Cardinale 11",
    "postal_code": "2145",
    "city": "Venedig",
    "state": "Italien",
    "phone": "114477",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('Test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto('/scripts/coupons/create.php');

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
