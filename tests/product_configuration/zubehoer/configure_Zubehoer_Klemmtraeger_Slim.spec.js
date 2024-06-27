import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Klemmträger Slim",
    "produkt": "Klemmträger Slim",
    "url": "/klemmtraeger-slim-einzeln",
    "abPreis": "7,00",
    "produkttyp": "Zubehoer",
    "option1": "grau",
    "option2": "",
    "option3": "",

    "anzahl": 4,
    "grundpreis": 7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Ulrich",
    "last_name": "Soest",
    "email": "test@delphinus-test.de",
    "street": "Klosterneuburger Ring 10",
    "postal_code": "1011",
    "city": "Wien",
    "state": "Österreich",
    "phone": "114488",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
