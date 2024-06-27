import { test } from 'playwright/test'
import { RoofForms } from '../../support/configurator_roof'

const testcase = {
    "name": "PEXConfig. - DF30C-nonstandard",
    "produkt": "Curly 4365",  //PG4 R5,6
    "stoff_url": "curly-4365",
    "abPreis": "144,00", //139 + 5,00 (Preis für ungenormte DFC mit PG4 = 139,00 )
    "abPreis_red": "95,35",  //R5,6 + 5,00 --> 144 -5 -35% +5,00 = 89,50
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_nonstandard",
    "unterer_Stoff": "Syrakus",
    "unterer_Stoffcode": "2079",  //PG 2 R5,12,8
    "df_glasbreite": "650",
    "df_glashoehe": "950",
    "df_falztiefe": "55",
    "df_fluegelbreite": "750",
    "df_fluegelhoehe": "1050",  //1100 x 800
    "df_falzart": "falz_mit_aufsatz_vor_glas",
    "schienenfarbe": "weiß",
    "bedienstab": "Bedienstab (125 cm)", //+44,00

    "anzahl": 4,
    "grundpreis": 273,  
    "df_aufschlag": 5,
    "grundpreis_b": 242,  
    "df_aufschlag_b": 5,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 44,  
    "discount_1": 0.65,  //-35%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0.5,  //-50%
    "discount_2b": 5,
    "discount_3b": 2,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 29.90,

    //customer data
    "login": "guest",
    "prefix": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 27",
    "postal_code": "1110",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Roof = new RoofForms(page)
    await Roof.configureProduct(testcase)

}) 