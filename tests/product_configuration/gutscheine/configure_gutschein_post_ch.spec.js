import { test } from 'playwright/test'
import { GutscheinConfigurator } from '../../support/configurator_gutschein'

const testcase = {
    "name": "PEXConfig.-Gutschein_Post_CH",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Post",
    "beschenkter": "Lara Feld",
    "strasse": "Mittelstr. 3",
    "betrag": "100",
    "plz": "12345",
    "nachricht": "Zum Eigenheim alles Gute!",
    "stadt": "Basel",

    "anzahl": 2,
    "grundpreis": 105,
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
    "email": "markus@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "20099",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "775300",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "street_2": "",
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