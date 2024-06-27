import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - FDS3",
    "produkt": "Rimini 1017",  //PG2 R5,6
    "stoff_url": "rimini-1017",
    "abPreis": "203,00",
    "abPreis_red": "128,70", //-5,00 -35%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "befestigung": "direkt_vor_der_scheibe",
    "breite": "900",
    "hoehe": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "anthrazit",

    "anzahl": 5,
    "grundpreis": 338,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

   
    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Harald",
    "last_name": "Weinmann",
    "email": "harry@delphinus-test.de",
    "street": "Kobelgasse 28",
    "postal_code": "1110",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 