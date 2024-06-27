import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Mosaik-4510",
    "produkt": "Mosaik 4510",
    "stoff_url": "mosaik-4510",
    "abPreis": "93,00",  //PG 4
    "abPreis_red": "57,20", // RG 5,6 --> 5,00 -35%
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "25",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Daria",
    "last_name": "Numan",
    "email": "test@delphinus-test.de",
    "street": "Bremer Str. 158",
    "postal_code": "98569",
    "city": "Stockholm",
    "state": "Schweden",
    "phone": "95784",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 