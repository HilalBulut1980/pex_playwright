import { test } from 'playwright/test'
import { RoofForms } from '../../support/configurator_roof'

const testcase = {
    "name": "PEXConfig. - DF30C-nonst._Wabe",
    "produkt": "Wabe-Flair-4837",  //PG 3 R5,6
    "stoff_url": "wabe-flair-4837",
    "abPreis": "176,00",  //171 + 5 (Preis für ungenormte DFC Wabe mit PG3 = 171,00 )
    "abPreis_red": "116,15",  //R 5,6 + 5,00 --> 176-5 -35% +5,00 = 116,15
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_nonstandard",
    "unterer_Stoff": "Syrakus",
    "unterer_Stoffcode": "2079",  //PG 2 R5,12,8 kein Wabe
    "df_glasbreite": "650",
    "df_glashoehe": "950",
    "df_falztiefe": "55",
    "df_fluegelbreite": "750",
    "df_fluegelhoehe": "1050",  //1100 x 800
    "df_falzart": "falz_mit_aufsatz_vor_glas",
    "schienenfarbe": "weiß",
    "bedienstab": "Bedienstab (125 cm)",  //+44

    "anzahl": 3,
    "grundpreis": 327,  
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
    "vat": 122,
    "mwst_1": 22,
    "mwst_2": 22,  //bedienstab
    "versandkosten": 20.51,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 21",
    "postal_code": "1110",
    "city": "Rom",
    "state": "Italien",
    "phone": "123456",
    "shipping": "same",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Roof = new RoofForms(page)
    await Roof.configureProduct(testcase)

}) 