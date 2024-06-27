import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Salerno-1152",
    "produkt": "Salerno 1152",
    "stoff_url": "salerno-1152",
    "abPreis": "82,00",
    "abPreis_red": "53,30",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "20",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 51",
    "postal_code": "1110",
    "city": "Sofia",
    "state": "Bulgarien",
    "phone": "123456",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 