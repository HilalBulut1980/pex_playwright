import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - FK",
    "produkt": "Nuvola 4613",  //PG 2 R5,6
    "stoff_url": "nuvola-4613",
    "abPreis": "142,00",
    "abPreis_red": "89,05",  //-5,00 -35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "befestigung": "am_mauerwerk",
    "hoehe": "1100",
    "breite": "900",
    "bedienseite": "links",
    "pendelsicherung": "ja", //+16,50
    "schienenfarbe": "anthrazit",

    "anzahl": 4,
    "grundpreis": 234,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 16.50,  
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
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 37",
    "postal_code": "1110",
    "city": "Madrid",
    "state": "Spanien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 
