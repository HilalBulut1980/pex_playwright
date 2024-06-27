import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Matera-4909",
    "produkt": "Matera-4909",
    "stoff_url": "matera-4909",
    "abPreis": "82,00", // PG3
    "abPreis_red": "50,05",  // RG 5,6 --> 5,00 -35%
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "21",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Björn",
    "last_name": "Weidemann",
    "email": "test@delphinus-test.de",
    "street": "Mumkenstr. 55",
    "postal_code": "65897",
    "city": "Den Haag",
    "state": "Niederlande",
    "phone": "7584",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 
