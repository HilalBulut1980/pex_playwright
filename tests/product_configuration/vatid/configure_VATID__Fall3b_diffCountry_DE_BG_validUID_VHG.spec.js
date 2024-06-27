import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3b different Address DE-->BG",
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
    "bedienstab": "Bedienstab (200 cm)",  // +52,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 2,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 16.81,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lara",
    "last_name": "Uhlmann",
    "company_name": "TUI Cruises GmbH",
    "vatID": "DE259608001",
    "state_code": "DE",
    "email": "lara@delphinus-test.de",
    "password": "",
    "street": "Hammerbrook 125",
    "postal_code": "20097",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "456789",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Franco",
    "last_name_2": "Menden",
    "company_name_2": "Lidl BG",
    "vatID_2": "BG131071587",
    "state_code_2": "BG",
    "street_2": "3-ti mart str. 21 1",
    "postal_code_2": "1234",
    "city_2": "Sofia",
    "state_2": "Bulgarien",
    "phone_2": "225588",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
