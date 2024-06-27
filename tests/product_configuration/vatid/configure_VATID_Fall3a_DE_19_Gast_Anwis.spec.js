import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3a DE",
    "produkt": "Abdunkelnd 5024",  //PG2 R5,6
    "stoff_url": "/abdunkelnd-5024",
    "supplier": "Anwis",
    "abPreis": "73,00", //-5,00 | -35%
    "abPreis_red": "44,20",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "kosten_befestigung": "20,00",
    "hoehe": "1800",
    "breite": "1000",
    "schienenfarbe": "silber",
    "bediengriff": "",
    "bedienstab": "Bedienstab (200 cm)",  //+52

    "anzahl": 3,
    "grundpreis": 279,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Ela",
    "last_name": "Timurcin",
    "company_name": "",
    "vatID": "",
    "email": "ela@delphinus-test.de",
    "password": "",
    "street": "Lange Reihe 57",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //configurator.configureVertical(test) --> PEX-3239  --> deaktivierter Anwis-Stoff, Test sollte ursprünglich Anwisprodukte mit UID prüfen
    // const Vertical = new VerticalForms(page)
    // await Vertical.configureProduct(testcase)

}) 
