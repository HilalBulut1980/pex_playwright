import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "PEXConfig. - neg. Paypal - failed Sofort",
    "produkt": "Hestia 4544",  //PG 1
    "stoff_url": "hestia-4544",
    "abPreis": "67,00",
    "abPreis_red": "52,70",  // R5,18 -5,00 -15% --> 67 -5 = 62 -25%
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix_front",  //+20
    "hoehe": "900",
    "breite": "600",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Keinen Bedienstab",

    "anzahl": 1,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0, 
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,  
    "discount_1": 0.85, //-15%
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Lena",
    "last_name": "Hellmann",
    "email": "lena@delphinus-test.de",
    "street": "Kobelgasse 11",
    "postal_code": "22043",
    "city": "Berlin",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "payment": "Sofort",
    "failed_payment": true
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 