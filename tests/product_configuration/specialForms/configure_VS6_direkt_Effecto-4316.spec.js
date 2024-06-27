import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS6",
    "produkt": "Effecto 4316",  //PG2 R5,6
    "stoff_url": "effecto-4316",
    "abPreis": "290,00",
    "abPreis_red": "185,25",  //-5 -35%
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "befestigung": "direkt_vor_der_scheibe",
    "breite_oben": "450",
    "breite_unten": "700",
    "gesamthoehe": "1000",
    "teilhoehe": "800",
    "schienenfarbe": "anthrazit",
    "bediengriff": "design",  ///17,00/25,00  --> 8,00 ist simulierter Aufpreis

    "anzahl": 2,
    "grundpreis": 386,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 48",
    "postal_code": "22043",
    "city": "Kiel",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 