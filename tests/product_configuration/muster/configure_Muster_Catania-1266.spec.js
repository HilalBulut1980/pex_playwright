import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Catania-1266",
    "produkt": "Catania 1266",
    "stoff_url": "catania-1266",
    "abPreis": "73,00",
    "abPreis_red": "47,45",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "23",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marion",
    "last_name": "Kunhardt",
    "email": "test@delphinus-test.de",
    "street": "Levystr. 14",
    "postal_code": "5426",
    "city": "Lublin",
    "state": "Polen",
    "phone": "12457",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 