import { test } from 'playwright/test'
import { VerticalForms } from '../../support/configurator_vertical'

const testcase = {
    "name": "Umsatzsteuertest Fall 3b SK",
    "produkt": "Triest 1029",  //PG1
    "stoff_url": "triest-1029",
    "supplier": "Erfal",
    "abPreis": "67,00", //R18 -15%
    "abPreis_red": "56,95",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix", //+20
    "hoehe": "850",
    "breite": "550",
    "schienenfarbe": "anthrazit",
    "bediengriff": "standard",
    "bedienstab": "Bedienstab (250 cm)",  //+56,50

    "anzahl": 5,
    "grundpreis": 110,
    "befestigung_preis": 20,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 56.50,
    "discount_1": 0.85,
    "discount_2": 0,
    "discount_3": 0,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 16.81,

    //customer data
    "login": "customer",
    "prefix": "",
    "first_name": "",
    "last_name": "",
    "company_name": "",
    "vatID": "SK2020279415",
    "state_code": "SK",
    "email": "uid_EU@delphinus-test.de",
    "password": "Abcde_12345",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Slowakei",
    "phone": "",
    "shipping": "same",
    "payment": "Vorkasse"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- uid_EU@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_EU@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=EU-Staat&billing_company=Test%20Company&billing_vatid=SK2020279415&password=Abcde_12345&billing_street=Teststraße%2010&billing_postcode=1234&billing_city=Bratislava&billing_country=SK&shipping_vatid=SK2020279415&shipping_street=Teststraße%2010&shipping_postcode=1234&shipping_city=Bratislava&shipping_country=SK')

    const Vertical = new VerticalForms(page)
    await Vertical.configureProduct(testcase)

}) 