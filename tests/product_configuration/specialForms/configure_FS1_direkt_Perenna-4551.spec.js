import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - FS1",
    "produkt": "Perenna 4551",  //PG 2 R5,6
    "stoff_url": "perenna-4551",
    "abPreis": "203,00",
    "abPreis_red": "128,70",  //- 5 |-35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "befestigung": "direkt_vor_der_scheibe",
    "breite": "800",
    "hoehe_links": "800",
    "hoehe_rechts": "900",
    "ausrichtung": "rechts",
    "schienenfarbe": "weiß",

    "anzahl": 5,
    "grundpreis": 292,  
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
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

     
    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@test.de",
    "street": "Kobelgasse 38",
    "postal_code": "1110",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 