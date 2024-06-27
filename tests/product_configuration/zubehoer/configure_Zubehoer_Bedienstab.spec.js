import { test } from 'playwright/test'
import { ZubehoerConfigurator } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "PEXConfig. - Zubehör Bedienstab",
    "produkt": "Bedienstab",
    "url": "/bedienstab",
    "abPreis": "44,00",
    "produkttyp": "Zubehoer",
    "option1": "200 cm +8,00 €",  //44 + 8
    "option2": "Plissee Dachfenster",
    "option3": "",

    "anzahl": 2,
    "grundpreis": 52,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Jack",
    "last_name": "Jones",
    "email": "test@delphinus-test.de",
    "street": "Amalienweg 99",
    "postal_code": "65478",
    "city": "Riga",
    "state": "Lettland",
    "phone": "125478",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Zubehoer = new ZubehoerConfigurator(page)
    await Zubehoer.configureProduct(testcase)

}) 