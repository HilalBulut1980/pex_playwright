import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Stick & Fix Front - einzeln",
    "produkt": "Stick & Fix Front - einzeln",
    "url": "/klebeplatten-front-einzeln",
    "abPreis": "10,00",
    "produkttyp": "Zubehoer",
    "option1": "3 Klebeplatten inkl. Klebepads +8,00 €",  //10+8
    "option2": "",
    "option3": "",

    "anzahl": 2,
    "grundpreis": 18,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Maria",
    "last_name": "Taubenwaller",
    "email": "test@delphinus-test.de",
    "street": "Karl-Arnold-Ring 5",
    "postal_code": "12345",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 