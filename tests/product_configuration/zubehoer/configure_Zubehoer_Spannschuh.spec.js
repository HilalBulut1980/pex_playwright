import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Spannschuh",
    "produkt": "Spannschuh",
    "url": "/spannschuh",
    "abPreis": "4,15",
    "produkttyp": "Zubehoer",
    "option1": "schwarzbraun",
    "option2": "3 Spannschuhe +3,00 €",
    "option3": "",

    "anzahl": 4,
    "grundpreis": 7.15,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Alain",
    "last_name": "Victor",
    "email": "test@delphinus-test.de",
    "street": "Laisweg 30",  
    "postal_code": "3254",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "125487",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
