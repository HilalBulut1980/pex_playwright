import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-Glasleistenwinkel",
    "produkt": "Wabe Stylo 4786",  //PG 3
    "stoff_url": "wabe-stylo-4786",
    "abPreis": "82,00",
    "abPreis_red": "65,45",  // R 5,18 -5,00 -15%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "glasleistenwinkel",  //+16,50
    "hoehe": "1150",
    "breite": "850",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)", //+52,00

    "anzahl": 1,
    "grundpreis": 210,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,  
    "discount_1": 0.85, //-15%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 125,
    "mwst_1": 25,
    "mwst_2": 25, //bedienstab
    "versandkosten": 21.01,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 14",
    "postal_code": "1110",
    "city": "Kolding",
    "state": "DK",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 