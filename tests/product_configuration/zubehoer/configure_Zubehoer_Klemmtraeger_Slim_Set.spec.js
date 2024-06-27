import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Klemmträger Slim Set",
    "produkt": "Klemmträger Slim Set",
    "url": "/klemmtraeger-slim",
    "abPreis": "20,00",
    "produkttyp": "Zubehoer",
    "option1": "schwarzbraun",
    "option2": "",
    "option3": "",

    "anzahl": 2,
    "grundpreis": 20,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 20.68,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Franco",
    "last_name": "Milara",
    "email": "test@delphinus-test.de",
    "street": "Via Cecenia 18",
    "postal_code": "1268",
    "city": "Porto",
    "state": "Portugal",
    "phone": "995511",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 