import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Ligereza-4322",
    "produkt": "Ligereza 4322",
    "stoff_url": "ligereza-4322",
    "abPreis": "73,00",
    "abPreis_red": "44,20",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "24",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Hans",
    "last_name": "Heller",
    "email": "test@delphinus-test.de",
    "street": "Buala street 3",
    "postal_code": "9955",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "7584",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 