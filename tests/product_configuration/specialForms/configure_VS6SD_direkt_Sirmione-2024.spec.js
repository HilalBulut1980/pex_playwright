import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS6 SD",
    "produkt": "Sirmione 2024",  //PG4 R5,6
    "stoff_url": "Sirmione-2024",
    "abPreis": "331,00",  // 311 + 20
    "abPreis_red": "280,10",  //311 -5 -15% | +20
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "befestigung": "direkt_vor_der_scheibe",
    "breite_oben": "420",
    "breite_unten": "720",
    "gesamthoehe": "900",
    "teilhoehe": "700",
    "schienenfarbe": "weiß",
    "bediengriff": "design", // 25,50 + 12,00 (sim. Aufpreis) ---> früher wurden 5 Griffe abgebildet und berechnet --> korrigiert auf 3

    "anzahl": 1,
    "grundpreis": 433,  
    "grundpreis_b": 0,
    "befestigung_preis": 31,  //hier SD-Aufpreis statt Befestigung
    "bediengriff_preis": 25.50, 
    "bediengriff_aufpreis": 12, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.85,  //-15%
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
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 49",
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