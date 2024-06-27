import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS5",
    "produkt": "Movimento 4330",  //PG 2 R5,6
    "stoff_url": "movimento-4330",
    "abPreis": "290,00",
    "abPreis_red": "185,25", //-5 -35%
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "befestigung": "am_fensterfluegel",
    "hoehe_links": "900",
    "hoehe_rechts": "800",
    "breite_oben": "400",
    "breite_unten": "600",
    "ausrichtung": "links",
    "schienenfarbe": "silber",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis

    "anzahl": 3,
    "grundpreis": 342,  
    "grundpreis_b": 0,
    "befestigung_preis": 0,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,  
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 46",
    "postal_code": "1110",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 