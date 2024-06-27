import { test } from 'playwright/test'
import { RoofForms } from '../../support/configurator_roof'

const testcase = {
    "name": "PEXConfig. - DF20C-standard",
    "produkt": "Novara 4520",  // PG 2
    "stoff_url": "novara-4520",
    "supplier": "VHG",
    "abPreis": "135,00",  //130 + 5,00 (Preis für ungenormte DFC mit PG2 = 130,00 )
    "abPreis_red": "89,50", //R 5,6 +5,00 [135-5-35%+5]
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "df_standard",
    "df_hersteller": "Roto",
    "df_produkt": "Designo R8_K/H",
    "df_typ": "6 / 14 (Kunststoff/Holz)",
    "schienenfarbe": "grau",
    "bedienstab": "Bedienstab (125 cm)",  //+44,00

    "anzahl": 1,
    "grundpreis": 206,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, //simulierter aufpreis
    "bedienstab_preis": 44,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 121,
    "mwst_1": 21,
    "mwst_2": 21,  //bedienstab
    "versandkosten": 20.34,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 19",
    "postal_code": "1110",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Roof = new RoofForms(page)
    await Roof.configureProduct(testcase)

}) 