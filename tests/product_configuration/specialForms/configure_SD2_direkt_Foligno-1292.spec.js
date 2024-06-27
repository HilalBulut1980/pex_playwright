import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - SD2",
    "produkt": "Foligno 1292",  //PG0 R5,11
    "stoff_url": "foligno-1292",
    "abPreis": "183,00",
    "abPreis_red": "97,90", //- 5 |-45%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "befestigung": "direkt_vor_der_scheibe",
    "breite": "800",
    "hoehe": "900",
    "ausrichtung": "links",
    "schienenfarbe": "bronze",

    "anzahl": 4,
    "grundpreis": 260,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.55,  //-45%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 32",
    "postal_code": "1110",
    "city": "Kolding",
    "state": "Dänemark",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 