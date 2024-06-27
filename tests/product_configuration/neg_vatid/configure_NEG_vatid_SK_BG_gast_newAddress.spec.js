import { test } from 'playwright/test'
import { neg_VATID } from '../../support/configurator_NEG_vatid'

const testcase = {
    "name": "neg. Umsatzsteuertest ungültige UID AT/BG new address",
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
    "bediengriff": "design",  //17,00/25,00 (14+8) --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (150 cm)", //+45,00

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
    "first_name": "Mia",
    "last_name": "Rechberger",
    "company_name": "Lidl Slovenska",
    "vatID_false": "SLK202027941",
    "vatID": "SK2020279415",
    "state_code": "SK",
    "email": "mia@delphinus-test.de",
    "password": "",
    "street": "Karlsplatz 4",
    "postal_code": "1010",
    "city": "Bratislava",
    "state": "Slowakei",
    "phone": "456789",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Mirco",
    "last_name_2": "Yanar",
    "company_name_2": "Chaimag Ltd",
    "vatID2_false": "BLG201794665",
    "vatID2_correct": "BG201794665",
    "street_2": "104 Bdin Str., Büro 12",
    "postal_code_2": "1234",
    "city_2": "Sofia",
    "state_2": "Bulgarien",
    "state_code_2": "BG",
    "phone_2": "225588",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const negVATID_test = new neg_VATID(page)
    await negVATID_test.configureProduct(testcase)

}) 
