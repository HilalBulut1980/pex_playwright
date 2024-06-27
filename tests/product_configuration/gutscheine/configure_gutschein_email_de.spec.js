import { test } from 'playwright/test'
import { GutscheinConfigurator } from '../../support/configurator_gutschein'

const testcase = {
    "name": "PEXConfig.-Gutschein_Email_DE",
    "url": "/geschenkgutschein",
    "produkttyp": "Gutschein",
    "modell": "Email",
    "beschenkter": "Markus",
    "strasse": "",
    "betrag": "20",
    "plz": "",
    "nachricht": "Hi Markus, dieser Gutschein ist für Dich!",
    "stadt": "",

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

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Gutschein = new GutscheinConfigurator(page)
    await Gutschein.configureProduct(testcase)

}) 