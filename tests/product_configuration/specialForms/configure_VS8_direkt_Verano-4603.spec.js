import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS8",
    "produkt": "Verano 4603",  //PG2 R5,6
    "stoff_url": "verano-4603",
    "abPreis": "266,00",  //266,00
    "abPreis_red": "169,65",  //-5 -35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "900",
    "breite_oben": "350",
    "breite_unten": "750",
    "ausrichtung": "rechts",
    "schienenfarbe": "weiß",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 1,
    "grundpreis": 372,  
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
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 44",
    "postal_code": "1110",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 