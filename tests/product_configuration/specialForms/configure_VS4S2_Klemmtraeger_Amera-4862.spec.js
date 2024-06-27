import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS4S 2",
    "produkt": "Amera 4862",  //PG0 R8
    "stoff_url": "amera-4862",
    "abPreis": "183,00",
    "abPreis_red": "91,50", //-50%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s2",
    "befestigung": "klemmtraeger",  //+16,50
    "breite": "900",
    "hoehe_links": "1200",
    "hoehe_rechts": "900",
    "ausrichtung": "links",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis

    "anzahl": 4,
    "grundpreis": 298,  
    "grundpreis_b": 0,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.50,  //-50%
    "discount_2": 0,
    "discount_3": 0,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 20.85,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 42",
    "postal_code": "1110",
    "city": "Patras",
    "state": "Griechenland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 