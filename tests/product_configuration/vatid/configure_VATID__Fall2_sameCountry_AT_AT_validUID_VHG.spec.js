import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 2 same Address AT-->AT",
    "produkt": "Syrakus 2079",//PG2 R5,12,8
    "stoff_url": "syrakus-2079",
    "abPreis": "73,00",
    "abPreis_red": "33,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (200 cm)",  //+52,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 2,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,  //bedienstab
    "versandkosten": 15.03,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Mia",
    "last_name": "Rechberger",
    "company_name": "Powerserv Austria GmbH",
    "vatID": "ATU56160004",
    "state_code": "ATU",
    "email": "mia@delphinus-test.de",
    "password": "",
    "street": "Leinenweg 66",
    "postal_code": "1010",
    "city": "Wien",
    "state": "Österreich",
    "phone": "456789",
    "shipping": "new",
    "prefix_2": "Frau",
    "first_name_2": "Michaela",
    "last_name_2": "Baader",
    "company_name_2": "AOC Fünf Immobilien GmbH & Co OG",
    "vatID_2": "ATU68925229",
    "state_code": "ATU",
    "street_2": "Heinweg 33",
    "postal_code_2": "1234",
    "city_2": "Graz",
    "state_2": "Österreich",
    "phone_2": "225588",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
