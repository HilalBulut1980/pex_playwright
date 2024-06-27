import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Halteclip klein",
    "produkt": "Halteclip klein",
    "url": "/halteclip-klein",
    "abPreis": "4,00",
    "produkttyp": "Zubehoer",
    "option1": "silber",
    "option2": "",
    "option3": "",

    "anzahl": 8,
    "grundpreis": 4,
    "vat": 127,
    "mwst_1": 27,
    "versandkosten": 21.35,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Franco",
    "last_name": "Losante",
    "email": "test@delphinus-test.de",
    "street": "Trevale Via no46",
    "postal_code": "1254",
    "city": "Budapest",
    "state": "Ungarn",
    "phone": "665588",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 
