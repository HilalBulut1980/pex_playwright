import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3a LUX",
    "produkt": "Triest 1029",  //PG1 R18
    "stoff_url": "triest-1029",
    "supplier": "Erfal",
    "abPreis": "67,00", //-15%
    "abPreis_red": "56,95", 
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 56.50,
    "discount_1": 0.85,
    "discount_2": 0,
    "discount_3": 0,
    "vat": 117,
    "mwst_1": 17,
    "mwst_2": 17,
    "versandkosten": 19.67,  // 20/119*117 

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Ela",
    "last_name": "David",
    "company_name": "Lidl Luxemburg",
    "vatID": "",
    "email": "ela@delphinus-test.de",
    "password": "",
    "street": "Berliner Allee 32",
    "postal_code": "123587",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 

