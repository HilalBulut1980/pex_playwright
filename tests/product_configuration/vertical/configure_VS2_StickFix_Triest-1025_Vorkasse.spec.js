import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-Stick&Fix",
    "produkt": "Triest 1025",  //PG 1
    "stoff_url": "triest-1025",
    "supplier": "Erfal",
    "abPreis": "67,00",
    "abPreis_red": "56,95",  //-15%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    // "befestigung": "Befestigung direkt vor der Scheibe ohne Bohren mit innovativer Klebetechnik", //+20
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //56,50

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 56.50,  
    "discount_1": 0.85, //-15%
    "discount_2": 0,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0, //bedienstab
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 10",
    "postal_code": "1110",
    "city": "Zürich",
    "state": "CH",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 