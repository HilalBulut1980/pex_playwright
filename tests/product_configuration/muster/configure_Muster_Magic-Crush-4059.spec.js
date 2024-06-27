import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Magic-Crush-4059",
    "produkt": "Magic-Crush 4059",
    "stoff_url": "magic-crush-4059",
    "abPreis": "64,00",
    "abPreis_red": "35,40",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "20",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Moritz",
    "last_name": "Bachmann",
    "email": "test@delphinus-test.de",
    "street": "Columbusstr. 11",
    "postal_code": "9654",
    "city": "Marseille",
    "state": "Frankreich",
    "phone": "1235258",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 