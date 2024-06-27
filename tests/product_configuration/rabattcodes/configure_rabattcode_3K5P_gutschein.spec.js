import { test } from 'playwright/test'
import { GutscheinConfigurator } from '../../support/configurator_gutschein'

const testcase = {

    "name": "Rabattcode 3,5% mit Gutschein",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Email",
    "beschenkter": "Markus",
    "strasse": "",
    "betrag": "20",
    "plz": "",
    "nachricht": "Hi Markus, dieser Gutschein ist für Dich!",
    "stadt": "",

    "rabatt_code": "PEX-TEST-3K5P",  //3,5%
    "rabatt_faktor_a": 3.5,  
    "rabatt_faktor_b": 96.5,  

    "anzahl": 2,
    "grundpreis": 20,  
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "775300",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "street_2": "",
    "postal_code_2": "",
    "city_2": "",
    "state_2": "",
    "phone_": "",
    "payment": "Vorkasse"
}


test('Test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto('/scripts/coupons/create.php');

    const Gutschein = new GutscheinConfigurator(page)
    await Gutschein.configureProduct(testcase)

}) 