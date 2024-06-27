import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - FS2",
    "produkt": "Dimout 5067",  //PG 2 R5,7
    "stoff_url": "dimout-5067",
    "abPreis": "203,00",
    "abPreis_red": "118,80", //- 5,00 |-40%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "befestigung": "klemmtraeger",  //+16,50
    "breite": "700",
    "hoehe_links": "1000",
    "hoehe_rechts": "600",
    "ausrichtung": "links",
    "schienenfarbe": "weiß",

    "anzahl": 1,
    "grundpreis": 268,  
    "grundpreis_b": 0,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.6,  //-40%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    
    //Backend
    "final_backend": "178,70",
    "final_backend_total": "178,70",
    "total_backend": "199,21",  // 178,70 + 20,51
    "vat_rate": "22%",
    "vat_product": "32,22",
    "vat_total": "35,92", //+ 3,70 (Versandsteuer)

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 39",
    "postal_code": "1110",
    "city": "Udine",
    "state": "Italien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 