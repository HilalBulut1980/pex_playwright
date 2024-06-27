import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Falzfix",
    "produkt": "Falzfix",
    "url": "/falzfix",
    "abPreis": "6,50",
    "produkttyp": "Zubehoer",
    "option1": "dunkelbraun",
    "option2": "4 Falzfixträger +10,50 €", //6,50+ 10,50
    "option3": "",

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
    "postal_code": "52148",
    "city": "Köln",
    "state": "Deutschland",
    "phone": "225544",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
