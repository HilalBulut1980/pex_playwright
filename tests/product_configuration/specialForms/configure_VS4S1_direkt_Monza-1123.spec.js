import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS4S 1",
    "produkt": "Monza 1123",  //PG 4 R5 + R6
    "stoff_url": "/monza-1123",
    "abPreis": "222,00", //-5,00 -35% 
    "abPreis_red": "141,05", 
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "befestigung": "direkt_vor_der_scheibe",
    "breite": "880",
    "hoehe_links": "900",
    "hoehe_rechts": "1550",
    "ausrichtung": "rechts",
    "schienenfarbe": "silber",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 3,
    "grundpreis": 494,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 8.50, 
    "bediengriff_aufpreis": 4, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 20.84,

  
    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 41",
    "postal_code": "1110",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 
