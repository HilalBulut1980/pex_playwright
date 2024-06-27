import { test } from 'playwright/test'
import { MusterConfigurator } from '../../support/configurator_muster'

const testcase = {
    "name": "PEXConfig. - Muster Wabe-Noblessa-4767",
    "produkt": "Wabe-Noblessa 4767",
    "stoff_url": "wabe-Noblessa-4767",
    "abPreis": "93,00",
    "abPreis_red": "52,80",
    "produkttyp": "Muster",
    "anzahl": "1",

    "vat_rate": "20",
    "vat_product": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Norbert",
    "last_name": "Klink",
    "email": "test@delphinus-test.de",
    "street": "Todavia Weg 36",
    "postal_code": "32448",
    "city": "Graz",
    "state": "Österreich",
    "phone": "35874",
    "shipping": "same",
    "versandkosten": "0,00",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Muster = new MusterConfigurator(page)
    await Muster.configureProduct(testcase)

}) 