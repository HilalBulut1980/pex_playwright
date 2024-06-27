import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-Slim",
    "produkt": "Radiance 4876",  //PG 1 
    "stoff_url": "/radiance-4876",
    "abPreis": "67,00",
    "abPreis_red": "40,30",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klemmtraeger_slim",  //+20,00
    "hoehe": "1200",
    "breite": "900",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (250 cm)",  //56.50

    "anzahl": 2,
    "grundpreis": 163,
    "befestigung_preis": 20,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 56.50,  
    "discount_1": 0.65, //-35%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19, //bedienstab
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Lenny",
    "last_name": "Tinhold",
    "email": "lenny@delphinus-test.de",
    "street": "Kobelgasse 15",
    "postal_code": "10099",
    "city": "Berlin",
    "state": "DE",
    "phone": "123456",
    "shipping": "same",
    "payment": "Rechnungskauf"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 