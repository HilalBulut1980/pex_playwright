import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Glasleistenwinkel",
    "produkt": "Glasleistenwinkel",
    "url": "/glasleistenwinkel",
    "abPreis": "12,00",
    "produkttyp": "Zubehoer",
    "option1": "grau, Montage oben (rechts & links)",
    "option2": "",
    "option3": "",

    "anzahl": 4,
    "grundpreis": 12,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Mia",
    "last_name": "Lehmann",
    "email": "test@delphinus-test.de",
    "street": "Steinstr. 20",
    "postal_code": "20095",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "996633",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
