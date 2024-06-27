import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS2-Klebeleisten",
    "produkt": "Finura 4440",  //PG 2
    "stoff_url": "finura-4440",
    "abPreis": "73,00",
    "abPreis_red": "44,20",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "klebeleisten",  //+37,50
    "hoehe": "1000",
    "breite": "700",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //56,50

    "anzahl": 3,
    "grundpreis": 143,
    "befestigung_preis": 37.50,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
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
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "hilal@delphinus-test.de",
    "street": "Kobelgasse 12",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "DE",
    "phone": "491724920233",
    "shipping": "same",
    "payment": "Sepa"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 