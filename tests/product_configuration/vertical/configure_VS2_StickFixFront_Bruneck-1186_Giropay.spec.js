import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-Stick&Fix-Front",
    "produkt": "Bruneck 1186",  //PG 1
    "stoff_url": "bruneck-1186",
    "abPreis": "67,00",
    "abPreis_red": "43,55",  //R 6 --> 35%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix_front",  //+20
    "hoehe": "900",
    "breite": "600",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Keinen Bedienstab",

    "anzahl": 1,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,  
    "discount_1": 0.65, //-35%
    "discount_2": 0,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 11",
    "postal_code": "22043",
    "city": "Berlin",
    "state": "DE",
    "phone": "123456",
    "shipping": "same",
    "payment": "Giropay"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 