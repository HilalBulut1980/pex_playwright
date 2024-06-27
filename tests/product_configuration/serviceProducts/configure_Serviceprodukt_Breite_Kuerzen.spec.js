import { test } from 'playwright/test'
import { ServiceProductConfigurator } from '../../support/configurator_serviceProducts'

const testcase = {
    "name": "PEXConfig. - Serviceprodukt Änderungsauftrag Breite kürzen",
    "service": "Änderungsauftrag Breite Kürzen",
    "url": "/aenderungsauftrag-breite",
    "produkttyp": "Serviceprodukt",
    "bestellnummer": "1000999",
    "breite": "1400",
    "hoehe": "1600",
    "kuerzung": "100",
    "produkt": "Monza-1121",

    "anzahl": 2,
    "grundpreis": 50,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Laila",
    "last_name": "Gomez",
    "email": "test@delphinus-test.de",
    "street": "Via Colinale 33",
    "postal_code": "123456",
    "city": "Rom",
    "state": "Italien",
    "phone": "665544",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const ServiceProduct = new ServiceProductConfigurator(page)
    await ServiceProduct.configureProduct(testcase)

}) 
