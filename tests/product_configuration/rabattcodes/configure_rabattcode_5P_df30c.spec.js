import { test } from 'playwright/test'
import { RoofForms } from '../../support/configurator_roof'

const testcase = {
    
    "name": "PEXConfig. - Rabattcode 5% mit DF30C",
    "produkt": "Amparo 4529",  //PG 3 --> R 5,18
    "stoff_url": "amparo-4529",
    "abPreis": "142,00",  //137 + 5
    "abPreis_red": "121,45", //R 5,18 + 5,00 --> 142 -5,00 -15% +5,00 = 107,75
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_standard",
    "unterer_Stoff": "Moda",  //PG 2 --> 5,6
    "unterer_Stoffcode": "4592",
    "df_hersteller": "Fakro",
    "df_produkt": "FTP-V",
    "df_typ": "114 / 118 (Holz)", // --> 1013x981 --> 1100x1000
    "schienenfarbe": "weiß",
    "bedienstab": "Bedienstab (125 cm)", //+44

    "rabatt_code": "PEX-TEST-5P",  // 5%
    "rabatt_faktor_a": 5,  
    "rabatt_faktor_b": 95,

    "anzahl": 2,
    "grundpreis": 301,  
    "df_aufschlag": 5,
    "grundpreis_b": 275,
    "df_aufschlag_b": 5,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0, 
    "bedienstab_preis": 44,  
    "discount_1": 0.85,  //-15%
    "discount_2": 5,
    "discount_3": 0,
    "discount_1b": 0.65, // -35%
    "discount_2b": 5,
    "discount_3b": 0,
    "vat": 122,
    "mwst_1": 22,
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


test('Test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto('/scripts/coupons/create.php');

    const Roof = new RoofForms(page)
    await Roof.configureProduct(testcase)

}) 