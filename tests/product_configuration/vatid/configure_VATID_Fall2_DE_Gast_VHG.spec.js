import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 2 DE",
    "produkt": "Bologna 2028",  //PG0 R5,9,8
    "stoff_url": "bologna-2028",
    "abPreis": "64,00",
    "abPreis_red": "27,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "1000",
    "breite": "990",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)", // +52,00

    "anzahl": 1,
    "grundpreis": 141,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.5,
    "discount_2": 5,
    "discount_3": 5,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Henrico",
    "last_name": "Trapanta",
    "company_name": "Aldi Nord GmbH",
    "vatID": "DE136627286",
    "state_code": "DE",
    "email": "henry@delphinus-test.de",
    "password": "",
    "street": "Lange Reihe 1",
    "postal_code": "12345",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
