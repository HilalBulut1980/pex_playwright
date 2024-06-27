import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 2 CH",
    "produkt": "Monza 1113",
    "stoff_url": "monza-1113",
    "abPreis": "93,00",
    "abPreis_red": "57,20",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "am_fensterfluegel",
    "hoehe": "1500",
    "breite": "600",
    "schienenfarbe": "silber",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)",  //+52,00

    "anzahl": 3,
    "grundpreis": 204,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,

    //customer data
    "login": "customer",
    "prefix": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "vatID": "CHE150906972",
    "state_code": "CHE",
    "email": "uid_CH@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Schweiz",
    "phone": "",
    "shipping": "same",
    "payment": "Vorkasse"
}


// Fall 2 für Drittländer können wir nicht testen, da innerhalb von Magento die UStID auf einer Webseite der EU geprüftwird. 
// Nicht-EU-Länder werden dort standardmäßig als ungültig validiert. 
test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    // const Vertical = new VerticalForms(page)
    // await Vertical.configureProduct(testcase)

}) 

 