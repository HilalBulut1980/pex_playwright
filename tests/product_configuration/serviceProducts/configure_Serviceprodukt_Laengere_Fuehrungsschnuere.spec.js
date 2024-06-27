import { test } from 'playwright/test'
import { ServiceProductConfigurator } from '../../support/configurator_serviceProducts'

const testcase = {
    "name": "PEXConfig. - Serviceprodukt Längere Führungsschnüre",
    "service": "Längere Führungsschnüre",
    "url": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "produkttyp": "Serviceprodukt",
    "produktname": "Bologna-2027",
    "schienenfarbe": "weiss",
    "breite": "1100",
    "hoehe": "1300",
    "laenge_neu": "1500",
    "seite": "links",
    "anmerkungen": "Bitte jeweils an beiden Seiten die Schnüre länger anfertigen. Danke.",

    "anzahl": 3,
    "grundpreis": 20,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 20.67,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Silvia",
    "last_name": "Da Silva",
    "email": "test@delphinus-test.de",
    "street": "Prega Via 5",
    "postal_code": "1110",
    "city": "Lissabon",
    "state": "Portugal",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const ServiceProduct = new ServiceProductConfigurator(page)
    await ServiceProduct.configureProduct(testcase)

}) 