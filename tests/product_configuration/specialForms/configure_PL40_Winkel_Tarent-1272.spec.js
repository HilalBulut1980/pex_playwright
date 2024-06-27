import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - PL 40",
    "produkt": "Tarent-1272",  //PG 3 R18
    "stoff_url": "tarent-1272",
    "supplier": "Erfal",
    "abPreis": "274,00", 
    "abPreis_red": "232,90",//-15%
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl40",
    "befestigung": "winkel",
    "breite": "900",
    "hoehe_links": "1500",
    "hoehe_rechts": "1900",
    "ausrichtung": "rechts",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)",  // 52,00

    "anzahl": 3,
    "grundpreis": 561,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 52, 
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.85,  //-15%
    "discount_2": 0,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

   
    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 51",
    "postal_code": "1110",
    "city": "Sofia",
    "state": "Bulgarien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 