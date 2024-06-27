import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3a SK",
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
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",  
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Kuhlmann",
    "company_name": "Lidl Slovenska",
    "vatID": "",
    "email": "lena@delphinus-test.de",
    "password": "",
    "street": "Karlsplatz 4",
    "postal_code": "5248",
    "city": "Bratislava",
    "state": "Slowakei",
    "phone": "85469",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 

