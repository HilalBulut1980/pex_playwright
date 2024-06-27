import { test } from 'playwright/test'
import { SpecialForms } from '../../support/configurator_specialForms'

const testcase = {
    "name": "PEXConfig. - VS3",
    "produkt": "Finessa 4576",  //PG2 R5,6
    "stoff_url": "finessa-4576",
    "abPreis": "88,00",
    "abPreis_red": "53,95", //- 5 |-35%
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1000",
    "breite": "850",
    "unterer_Stoff": "Rovereto",  //PG0 R5,11 --> 139,00
    "unterer_Stoffcode": "1134",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis

    "anzahl": 2,
    "grundpreis": 183,  
    "grundpreis_b": 139,
    "befestigung_preis": 0,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8, 
    "bedienstab_preis": 0,  
    "kurbel_preis": 0,  
    "pendelsicherung_preis": 0,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0.55,  //-45%
    "discount_2b": 5,
    "discount_3b": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 40",
    "postal_code": "1110",
    "city": "Brindisi",
    "state": "Italien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Special = new SpecialForms(page)
    await Special.configureProduct(testcase)
  
  }) 