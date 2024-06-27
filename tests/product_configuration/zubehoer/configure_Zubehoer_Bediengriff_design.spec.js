import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Bediengriff (Design)",
    "produkt": "Bediengriff (Design)",
    "url": "/bediengriff-design",
    "abPreis": "10,00",
    "produkttyp": "Zubehoer",
    "option1": "silbergrau",
    "option2": "",
    "option3": "",

    "anzahl": 6,
    "grundpreis": 10,
    "vat": 117,
    "mwst_1": 17,
    "versandkosten": 19.67,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lara",
    "last_name": "Monden",
    "email": "test@delphinus-test.de",
    "street": "Latviastreet 65",
    "postal_code": "6587",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "phone": "14785",
    "shipping": "same",   
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 