import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS1-Klemmträger",
    "produkt": "Syrakus 2079",  //PG 2 
    "stoff_url": "syrakus-2079",
    "abPreis": "73,00",
    "abPreis_red": "33,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design", // 8,50 / 12,50 simul.Aufpreis 4,00
    "bedienstab": "Bedienstab (150 cm)", //+45,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 8.50, 
    "bediengriff_aufpreis": 4,
    "bedienstab_preis": 45,  
    "discount_1": 0.5, //-50%
    "discount_2": 5,
    "discount_3": 2,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0, //bedienstab
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 8",
    "postal_code": "1110",
    "city": "Wien",
    "state": "AT",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Frau",
    "first_name_2": "Magdalena",
    "last_name_2": "Hinrichsen",
    "email_2": "test@delphinus-test.de",
    "street_2": "Haubenweg 5",
    "postal_code_2": "7458",
    "city_2": "Basel",
    "state_2": "CH",
    "phone_2": "225588",
    "payment": "Kreditkarte"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 