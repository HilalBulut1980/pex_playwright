import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - VS1-Fensterflügel",
    "produkt": "Monza 1113",  //PG 4
    "stoff_url": "monza-1113",
    "abPreis": "93,00",
    "abPreis_red": "57,20",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1500",
    "breite": "600",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)", //+52,00

    "anzahl": 3,
    "grundpreis": 204,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,  
    "discount_1": 0.65, //-35%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,  //bedienstab
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 9",
    "postal_code": "1110",
    "city": "Basel",
    "state": "CH",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Danilo",
    "last_name_2": "Müller",
    "email_2": "test@delphinus-test.de",
    "street_2": "Heidenkampsweg 3",
    "postal_code_2": "95874",
    "city_2": "Düsseldorf",
    "state_2": "DE",
    "phone_2": "225588",
    "payment": "Paypal"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)
  
  }) 