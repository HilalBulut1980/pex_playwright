import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Halteclip groß",
    "produkt": "Halteclip groß",
    "url": "/halteclip-gross",
    "abPreis": "5,00",
    "produkttyp": "Zubehoer",
    "option1": "silber",
    "option2": "",
    "option3": "",

    "anzahl": 12,
    "grundpreis": 5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 20,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Renate",
    "last_name": "Meier",
    "email": "test@delphinus-test.de",
    "street": "Main Street 10",
    "postal_code": "3658",
    "city": "Bukarest",
    "state": "Rumänien",
    "phone": "665588",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
