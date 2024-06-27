import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 2 DE",
    "produkt": "Bologna 2028",
    "stoff_url": "bologna-2028",
    "abPreis": "64,00",
    "abPreis_red": "27,00",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "1000",
    "breite": "990",
    "schienenfarbe": "weiß",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (200 cm)", //+52

    "anzahl": 1,
    "grundpreis": 141,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 52,
    "discount_1": 0.5,
    "discount_2": 5,
    "discount_3": 5,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    //customer data
    "login": "customer",
    "prefix": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "vatID": "DE136627286",
    "state_code": "DE",
    "email": "uid_DE@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Deutschland",
    "phone": "",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- uid_DE@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_DE@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Deutschland&billing_company=Test%20GmbH&billing_vatid=DE136627286&password=Abcde_12345&billing_street=Teststraße%201&billing_postcode=12345&billing_city=Teststadt&billing_country=DE&shipping_vatid=DE136627286&shipping_street=Teststraße%201&shipping_postcode=12345&shipping_city=Teststadt&shipping_country=DE')

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 
