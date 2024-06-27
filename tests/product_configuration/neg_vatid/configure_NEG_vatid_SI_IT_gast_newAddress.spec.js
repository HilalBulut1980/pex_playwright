import { test } from 'playwright/test'
import { neg_VATID } from '../../support/configurator_NEG_vatid'

const testcase = {
    "name": "neg. Umsatzsteuertest ungültige UID DE/IT new address",
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
    "bedienstab": "Bedienstab (150 cm)", //+45,00
    // "kosten_stab": "45,00",

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 45,  
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
    "company_name": "Lidl Slovenija d.o.o. k.d.",
    "vatID_false": "SLI5931493",
    "vatID": "SI59314923",
    "state_code": "SL",
    "email": "lara@delphinus-test.de",
    "password": "",
    "street": "Pod lipami 1",
    "postal_code": "1218",
    "city": "Komenda",
    "state": "Slowenien",
    "phone": "456789",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Franco",
    "last_name_2": "Stefani",
    "company_name_2": "IMAGO",
    "vatID2_false": "ITL1111111111",
    "vatID2_correct": "IT01736210210",
    "state_code_2": "IT",
    "street_2": "3-ti mart str. 21 1",
    "postal_code_2": "1234",
    "city_2": "Milano",
    "state_2": "Italien",
    "phone_2": "225588",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const negVATID_test = new neg_VATID(page)
    await negVATID_test.configureProduct(testcase)

}) 