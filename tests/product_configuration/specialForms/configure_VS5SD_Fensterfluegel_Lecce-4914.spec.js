import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS5 SD",
    "produkt": "Lecce 4914",  //PG1 R5,6
    "stoff_url": "lecce-4914",
    "abPreis": "300,00",  //280 + 20
    "abPreis_red": "198,75",  //280 -5 -35% | +20
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "befestigung": "am_fensterfluegel",
    "hoehe_links": "700",
    "hoehe_rechts": "1000",
    "breite_oben": "350",
    "breite_unten": "550",
    "ausrichtung": "rechts",
    "schienenfarbe": "bronze",
    "bediengriff": "design",  // 25,50 / 37,50  --> 12,00 ist simulierter Aufpreis

    "anzahl": 4,
    "grundpreis": 339,  
    "grundpreis_b": 0,
    "befestigung_preis": 24,  //hier SD-Aufpreis statt Befestigung
    "bediengriff_preis": 25.50, 
    "bediengriff_aufpreis": 12, 
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
    "street": "Kobelgasse 47",
    "postal_code": "22043",
    "city": "München",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 