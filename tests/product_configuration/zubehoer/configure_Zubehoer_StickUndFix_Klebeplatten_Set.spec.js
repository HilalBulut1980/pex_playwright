import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Stick & Fix Klebeplattenset",
    "produkt": "Stick & Fix Klebeplattenset",
    "url": "/klebeplatten",
    "abPreis": "20,00",
    "produkttyp": "Zubehoer",
    "option1": "",
    "option2": "",
    "option3": "",

    "anzahl": 2,
    "grundpreis": 20,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 20.84,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Manuela",
    "last_name": "Triebl",
    "email": "test@delphinus-test.de",
    "street": "Via Rotta 5",
    "postal_code": "123456",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "885522",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
