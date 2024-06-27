import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 2 AT",
    "produkt": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "abPreis": "73,00",
    "abPreis_red": "33,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
   "befestigung": "klemmtraeger",  //+16,50
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "schwarzbraun",
    "bediengriff": "design",  //17,00/25,00  --> 8,00 ist simulierter Aufpreis
    "bedienstab": "Bedienstab (200 cm)",  //52,00

    "anzahl": 2,
    "grundpreis": 129,
    "befestigung_preis": 16.50,
    "bediengriff_preis": 17, 
    "bediengriff_aufpreis": 8,
    "bedienstab_preis": 52,  
    "discount_1": 0.50,
    "discount_2": 5,
    "discount_3": 2,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 0,  //bedienstab
    "versandkosten": 15.03,

    //customer data
    "login": "customer",
    "prefix": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "vatID": "ATU33803701",
    "state_code": "ATU",
    "email": "uid_AT@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Österreich",
    "phone": "",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- uid_AT@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_AT@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=%C3%96sterreich&billing_company=Test%20AG&billing_vatid=ATU33803701&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=AT&shipping_vatid=ATU33803701&shipping_street=Teststra%C3%9Fe%202&shipping_postcode=1110&shipping_city=Teststadt&shipping_country=AT')

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
