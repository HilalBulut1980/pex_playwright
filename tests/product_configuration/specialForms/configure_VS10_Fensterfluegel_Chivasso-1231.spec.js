import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS10",
    "produkt": "Chivasso 1231",  //PG2 R5,6
    "stoff_url": "chivasso-1231",
    "abPreis": "266,00",  //266
    "abPreis_red": "169,65",  // -5 -35%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs10",
    "ausrichtung": "rechts",
    "befestigung": "am_fensterfluegel",
    "breite": "1000",
    "hoehe": "1500",
    "schienenfarbe": "silber",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 3,
    "grundpreis": 572,  
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
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 31",
    "postal_code": "1110",
    "city": "Kopenhagen",
    "state": "Dänemark",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 