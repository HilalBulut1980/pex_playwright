import { test } from 'playwright/test'
import { RoofForms } from '../../support/configurator_roof'

const testcase = {
    "name": "PEXConfig. - DF20-standard",
    "produkt": "Duo 4010",  //PG 3  //WABE
    "stoff_url": "duo-4010",
    "supplier": "VHG",
    "abPreis": "145,00", //140 + 5 (Preis für ungenormte DF mit PG3 = 140 )
    "abPreis_red": "75,00", //R 5,8 +5,00 --> 145 -5,00 -50% +5,00 = 75,00
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_standard",
    "df_hersteller": "Velux",
    "df_produkt": "GIU",
    "df_typ": "CK 02 (Kunststoff)",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (150 cm)",  //+45,00

    "anzahl": 5,
    "grundpreis": 140,  
    "df_aufschlag": 5,
    "grundpreis_b": 0,
    "df_aufschlag_b": 0,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, //simulierter aufpreis
    "bedienstab_preis": 45,  
    "discount_1": 0.5,  //-50%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0,
    "discount_2b": 0,
    "discount_3b": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 29.90,

    //Backend
    "final_backend": "63,02",
    "final_backend_total": "315,10",
    "kosten_stab_backend": "36,97",
    "total_backend": "381,97",  // 315,10 + 36,97 + 29,90
    "vat_rate": "0%",
    "vat_product": "0,00",
    "vat_rate_2": "0%",
    "vat_bedienstab": "0,00",
    "vat_total": "0,00",

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marta",
    "last_name": "Musterfrau",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 18",
    "postal_code": "1110",
    "city": "Cannes",
    "state": "Frankreich",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Herr",
    "first_name_2": "Keith",
    "last_name_2": "Lorden",
    "email_2": "test@delphinus-test.de",
    "street_2": "Teichweg 6",
    "postal_code_2": "7458",
    "city_2": "Basel",
    "state_2": "Schweiz",
    "phone_2": "225588",
    "payment": "Vorkasse"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Roof = new RoofForms(page)
    await Roof.configureProduct(testcase)

}) 