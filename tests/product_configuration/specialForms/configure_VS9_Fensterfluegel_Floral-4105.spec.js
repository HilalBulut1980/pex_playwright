import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS9",
    "produkt": "Floral 4105",  //PG3 R5,R18
    "stoff_url": "floral-4105",
    "abPreis": "272,00",  //272
    "abPreis_red": "226,95", //-5 -15%
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1000",
    "breite": "800",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  // 8,50 / 12,50 simul.Aufpreis 4,00

    "anzahl": 2,
    "grundpreis": 411,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 8.50, 
    "bediengriff_aufpreis": 4, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.85,  //R18
    "discount_2": 5, //R5
    "discount_3": 0,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 30",
    "postal_code": "22043",
    "city": "Frankfurt",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 
