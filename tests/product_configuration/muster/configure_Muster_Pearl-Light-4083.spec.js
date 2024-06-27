import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Pearl-Light-4083",
    "produkt": "Pearl-Light 4083",
    "stoff_url": "pearl-light-4083",
    "abPreis": "67,00",
    "abPreis_red": "40,30",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "22",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Tom",
    "last_name": "Budermann",
    "email": "test@delphinus-test.de",
    "street": "Sumatrastr. 22",
    "postal_code": "95847",
    "city": "Ljubljana",
    "state": "Slowenien",
    "phone": "8547",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 