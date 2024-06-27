import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - PLK 13 Bed.Links-Elektro",
    "produkt": "Rom 4583",  //PG 1 R5,6
    "stoff_url": "Rom-4583",
    "abPreis": "213,00",
    "abPreis_red": "135,20", //- 5 |-35%
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "plk13",
    "befestigung": "montageprofil_mit_winkeln",  //+66
    "hoehe": "2200",
    "breite": "1100",
    "bedienseite": "links",
    "schienenfarbe": "bronze",
    "optional_gruppe": "Elektrostab",
    "optional_name": "Elektrostab (150 cm)",  //+231
    "kosten_optional": "231,00",

    "anzahl": 2,
    "grundpreis": 485,  
    "grundpreis_b": 0,
    "befestigung_preis": 66,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 231,  
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
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 52",
    "postal_code": "1110",
    "city": "Warna",
    "state": "Bulgarien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 