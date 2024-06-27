import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Bediengriff (Standard)",
    "produkt": "Bediengriff (Standard)",
    "url": "/bediengriff-standard-neu",
    "abPreis": "7,00",
    "produkttyp": "Zubehoer",
    "option1": "grau",
    "option2": "",
    "option3": "",

    "anzahl": 5,
    "grundpreis": 7,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Jens",
    "last_name": "Friedrichsen",
    "email": "test@delphinus-test.de",
    "street": "Steparedlo 65",
    "postal_code": "14785",
    "city": "Split",
    "state": "Kroatien",
    "phone": "19876",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
