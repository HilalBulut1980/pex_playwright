import { test } from 'playwright/test'
import { neg_VATID } from '../../support/configurator_NEG_vatid'

const testcase = {
    "name": "neg. Umsatzsteuertest ungültige UID CZ Gast same address",  //Fall 3b
    "produkt": "Syrakus 4220",//PG2 R5,12,8
    "stoff_url": "syrakus-4220",
    "abPreis": "73,00",
    "abPreis_red": "33,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "1000",
    "breite": "1000",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00 (14+8) --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (150 cm)", //+45,00
    // "kosten_stab": "45,00",

    "anzahl": 2,
    "grundpreis": 187,
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
    "first_name": "Marlene",
    "last_name": "Friedrich",
    "company_name": "BACHL, spol. s r.o.",
    "vatID_false": "CZE1450360",
    "vatID": "CZ14503603",
    "state_code": "CZ",
    "email": "marlene@delphinus-test.de",
    "password": "",
    "street": "Evropská 669",
    "postal_code": "66442",
    "city": "Modřice",
    "state": "Tschechische Republik",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const negVATID_test = new neg_VATID(page)
    await negVATID_test.configureProduct(testcase)

}) 