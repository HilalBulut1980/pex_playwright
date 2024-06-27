import { test } from 'playwright/test'
import { ServiceProductConfigurator } from '../../support/configurator_serviceProducts'

const testcase = {
    "name": "PEXConfig. - Serviceprodukt Änderungsauftrag Schnurlänge",
    "service": "Änderungsauftrag Schnurlänge",
    "url": "/aenderungsauftrag-schnurlaenge",
    "produkttyp": "Serviceprodukt",
    "bestellnummer": "1000999",
    "breite": "950",
    "hoehe": "1500",
    "laenge_neu": "1800",
    "produkt": "Magic-Crush-4058",

    "anzahl": 3,
    "grundpreis": 30,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Marcus",
    "last_name": "Martinez",
    "email": "test@delphinus-test.de",
    "street": "Oldesloer Weg 12",
    "postal_code": "32574",
    "city": "Genf",
    "state": "Schweiz",
    "phone": "665544",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const ServiceProduct = new ServiceProductConfigurator(page)
    await ServiceProduct.configureProduct(testcase)

}) 
