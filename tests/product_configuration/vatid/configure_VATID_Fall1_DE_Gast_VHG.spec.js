import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 1 DE",
    "produkt": "Syrakus 2079",
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
    "bedienstab": "Bedienstab (200 cm)",  //52,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 2,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,  //bedienstab
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Nadine",
    "last_name": "Fielmann",
    "company_name": "Sinulix AG",
    "vatID": "",
    "email": "nadine@delphinus-test.de",
    "password": "",
    "street": "Treustraße 19",
    "postal_code": "10256",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "456789",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
