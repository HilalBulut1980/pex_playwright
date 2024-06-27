import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Wabe-Dekora 4754",
    "produkt": "Wabe-Dekora 4754",
    "stoff_url": "wabe-dekora-4754",
    "abPreis": "93,00",
    "abPreis_red": "57,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "20",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Liana",
    "last_name": "Dober",
    "email": "test@delphinus-test.de",
    "street": "Asutmanistr. 53",
    "postal_code": "3698",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "8547",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 