import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - PLK 13 Bed.Rechts-Kurbel",
    "produkt": "Brigid 4428",  //PG2 R5,6
    "stoff_url": "brigid-4428",
    "abPreis": "221,00",
    "abPreis_red": "140,40", //- 5 |-35%
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "plk13",
    "befestigung": "montageprofil_haltebolzen",  //+66
    "hoehe": "2300",
    "breite": "1200",
    "bedienseite": "mitte",
    "schienenfarbe": "silber",
    "optional_gruppe": "Kurbel",
    "optional_name": "Handkurbel (150 cm)",
    "kosten_optional": "64,00",

    "anzahl": 2,
    "grundpreis": 608,  
    "grundpreis_b": 0,
    "befestigung_preis": 66,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 64,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.18,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 53",
    "postal_code": "1110",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 