import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS2 Slide Comfort",
    "produkt": "Luna 4192",  //PG 3
    "stoff_url": "luna-4192",
    "abPreis": "260,00",
    "abPreis_red": "151,80", // 260 -5 -2 -40%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2000",
    "breite": "1200",
    "schienenfarbe": "anthrazit",
    "bedienstab": "Bedienstab (125 cm)",  //+44,00

    "anzahl": 2,
    "grundpreis": 604,
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 44,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.6, //-40%
    "discount_2": 5,
    "discount_3": 2,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 122,
    "mwst_1": 22,
    "mwst_2": 22, //bedienstab
    "versandkosten": 20.51,

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