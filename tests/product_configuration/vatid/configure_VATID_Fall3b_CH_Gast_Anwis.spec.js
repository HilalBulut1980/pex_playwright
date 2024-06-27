import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3b CH",
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
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Konrad",
    "last_name": "Hellinger",
    "company_name": "Webility GmbH",
    "vatID": "CHE150906972",
    "state_code": "CHE",
    "email": "ela@delphinus-test.de",
    "password": "",
    "street": "Treuplatz 29",
    "postal_code": "1090",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //configurator.configureVertical(test) --> PEX-3239  --> deaktivierter Anwis-Stoff, Test sollte ursprünglich Anwisprodukte mit UID prüfen
    // const Vertical = new VerticalForms(page)
    // await Vertical.configureProduct(testcase)

}) 
