import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS1-direkt",
    "produkt": "Crush-Topar-4270",  //PG 2
    "route_url": "customoptions/index/specialshape",
    "route_DF": "/customoptions/index/fill",
    "stoff_url": "crush-topar-4270",
    "abPreis": "73,00", 
    "abPreis_red": "44,20", //R 5,6 --> -5,00 -35%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klebeleisten",  //+65,00
    "hoehe": "2000",
    "breite": "1200",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Keinen Bedienstab",

    "anzahl": 2,
    "grundpreis": 351,
    "befestigung_preis": 65,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,  
    "discount_1": 0.65, //-35%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Vincento",
    "last_name": "Zanna",
    "email": "vinny@delphinus-test.de",
    "street": "Via de'larga 99",
    "postal_code": "1110",
    "city": "Venezia",
    "state": "IT",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 