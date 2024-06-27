import { test } from 'playwright/test'
import { GutscheinConfigurator } from '../../support/configurator_gutschein'

const testcase = {
    "name": "PEXConfig.-Gutschein_Email_CH",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Email",
    "beschenkter": "Maya",
    "strasse": "",
    "betrag": "100",
    "plz": "",
    "nachricht": "Zum Eigenheim alles Gute!",
    "stadt": "",

    "anzahl": 3,
    "grundpreis": 100,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Markus",
    "last_name": "Meyer",
    "email": "marcus@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "street2": "",
    "postal_code_2": "",
    "city_2": "",
    "state_2": "",
    "phone_2": "",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Gutschein = new GutscheinConfigurator(page)
    await Gutschein.configureProduct(testcase)

}) 