import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - F3",
    "produkt": "Grace 4114",  //PG 2 R 5,6
    "stoff_url": "grace-4114",
    "abPreis": "96,00",
    "abPreis_red": "59,15",  //-5,00 -35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f3",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "1000",
    "breite": "800",
    "pendelsicherung": "ja",  //+15,50
    "unterer_Stoff": "Bologna", // --> 128,00
    "unterer_Stoffcode": "2027",  //PG 0 R 5,9,8
    "schienenfarbe": "schwarzbraun",

    "anzahl": 2,
    "grundpreis": 167,  
    "grundpreis_b": 128,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 15.50,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0.50,
    "discount_2b": 0,
    "discount_3b": 5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.18,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 35",
    "postal_code": "1110",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 