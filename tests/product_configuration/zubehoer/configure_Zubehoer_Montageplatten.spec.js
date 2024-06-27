import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Stick&Fix- einzelne Montageplatten",
    "produkt": "Stick&Fix- einzelne Montageplatten",
    "url": "/montageplatten-einzeln",
    "abPreis": "9,35",
    "produkttyp": "Zubehoer",
    "option1": "3 Montageplatten inkl. Klebepads +8,00 €",
    "option2": "",
    "option3": "",

    "anzahl": 2,
    "grundpreis": 17.35,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.50,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Mahmoudi",
    "email": "test@delphinus-test.de",
    "street": "Via Cardinale 11",
    "postal_code": "2145",
    "city": "Venedig",
    "state": "Italien",
    "phone": "114477",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 