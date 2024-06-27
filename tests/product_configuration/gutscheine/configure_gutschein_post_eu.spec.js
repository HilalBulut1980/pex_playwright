import { test } from 'playwright/test'
import { GutscheinConfigurator } from '../../support/configurator_gutschein'

const testcase = {
    "name": "PEXConfig.-Gutschein_Post_EU",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Post",
    "beschenkter": "Maya Cosic",
    "strasse": "Heinfeld 5",
    "betrag": "250",
    "plz": "12345",
    "nachricht": "Alles Gute zur Silberhochzeit!",
    "stadt": "Rom",

    "anzahl": 1,
    "grundpreis": 255,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Svetlana",
    "last_name": "Kühlheim",
    "email": "svetlana@delphinus-test.de",
    "street": "Teststrasse",
    "postal_code": "12345",
    "city": "Sofia",
    "state": "Bulgarien",
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