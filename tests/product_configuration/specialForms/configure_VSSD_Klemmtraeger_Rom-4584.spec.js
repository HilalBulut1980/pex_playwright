import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS SD",
    "produkt": "Rom 4584",  //PG1 R5,6
    "stoff_url": "rom-4584",
    "abPreis": "81,00",  
    "abPreis_red": "49,40",  //-5 -35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vssd",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "990",
    "breite": "750",
    "unterer_Stoff": "Luna",
    "unterer_Stoffcode": "4187",  //PG3 R5,12,7 --> 177,00
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  // 25,50 / 37,50  --> 12,00 ist simulierter Aufpreis

    "anzahl": 2,
    "grundpreis": 139,  
    "grundpreis_b": 177,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 25.50, 
    "bediengriff_aufpreis": 12, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0.60,  //-40%
    "discount_2b": 5,
    "discount_3b": 2,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 45",
    "postal_code": "1110",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 
