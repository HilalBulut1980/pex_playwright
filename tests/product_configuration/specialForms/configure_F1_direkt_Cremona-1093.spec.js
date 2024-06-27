import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - F1",
    "produkt": "Cremona 1093",  //PG 2
    "stoff_url": "cremona-1093",
    "abPreis": "96,00",
    "abPreis_red": "45,50",  //R 5,20 -5,00 -50% 
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "1000",
    "breite": "650",
    "bedienseite": "links",
    "pendelsicherung": "ja",  //+15,50
    "schienenfarbe": "weiß",

    "anzahl": 1,
    "grundpreis": 155,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 15.50,  
    "discount_1": 0.50,  //-50%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 34",
    "postal_code": "1110",
    "city": "Warna",
    "state": "Bulgarien",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Timur",
    "last_name_2": "Attilla",
    "email_2": "test@delphinus-test.de",
    "street_2": "Via Cologne 8",
    "postal_code_2": "85214",
    "city_2": "Marseille",
    "state_2": "Frankreich",
    "phone_2": "1598742",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)

}) 