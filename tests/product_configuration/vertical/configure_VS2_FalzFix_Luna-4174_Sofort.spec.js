import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-FalzFix",
    "produkt": "Luna 4174",  //PG 3
    "stoff_url": "luna-4174",
    "abPreis": "82,00",
    "abPreis_red": "45,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "falzfix",  //+16,50
    "hoehe": "1100",
    "breite": "800",
    "schienenfarbe": "anthrazit",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (200 cm)", // +52,00

    "anzahl": 5,
    "grundpreis": 179,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.6, //-40%
    "discount_2": 5,
    "discount_3": 2,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19, //bedienstab
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Marilyn",
    "email": "marta@delphinus-test.de",
    "street": "Kobelgasse 13",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "DE",
    "phone": "123456",
    "shipping": "same",
    "payment": "Sofort"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 