import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Stick&Fix- einzelne Klebepads",
    "produkt": "Stick&Fix- einzelne Klebepads",
    "url": "/klebepads-einzeln",
    "abPreis": "8,00",
    "produkttyp": "Zubehoer",
    "option1": "4 Klebepads inkl. 1 Reinigungs- u. Haftvermittlertuch +2,00 €",  // 8 + 2
    "option2": "",
    "option3": "",

    "anzahl": 4,
    "grundpreis": 10,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Aman",
    "last_name": "Singh",
    "email": "test@delphinus-test.de",
    "street": "Kairing 10",
    "postal_code": "2154",
    "city": "Graz",
    "state": "Österreich",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
