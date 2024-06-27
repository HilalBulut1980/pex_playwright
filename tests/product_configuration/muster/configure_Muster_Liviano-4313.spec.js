import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Liviano-4313",
    "produkt": "Liviano 4313",
    "stoff_url": "liviano-4313",
    "abPreis": "73,00",
    "abPreis_red": "37,40",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "25",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Melanie",
    "last_name": "Heinrichsen",
    "email": "test@delphinus-test.de",
    "street": "Trenkwalder Ring 10",
    "postal_code": "12457",
    "city": "Esberg",
    "state": "Dänemark",
    "phone": "95784",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 