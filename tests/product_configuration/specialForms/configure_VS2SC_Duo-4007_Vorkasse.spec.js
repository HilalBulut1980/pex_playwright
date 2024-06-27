import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS2 Slide Comfort Wabe",
    "produkt": "Duo 4007",  //PG 3
    "stoff_url": "duo-4007",
    "abPreis": "316,00",
    "abPreis_red": "155,50",  //316-5-50%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2000",
    "breite": "1200",
    "schienenfarbe": "anthrazit",
    "bedienstab": "Bedienstab (150 cm)",  //+45,00

    "anzahl": 2,
    "grundpreis": 735,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 45,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.50,  //-50%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 122,
    "mwst_1": 22,
    "mwst_2": 22, //bedienstab
    "versandkosten": 20.50,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Francesca",
    "last_name": "Brambilla",
    "email": "francy@delphinus-test.de",
    "street": "Via Dei Condotti 100",
    "postal_code": "4321",
    "city": "Milano",
    "state": "Italien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 