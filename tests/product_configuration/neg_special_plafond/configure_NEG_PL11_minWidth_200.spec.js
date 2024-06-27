import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-PL11-min.breite",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "pl11",
    "hoehe": "1000",
    "breite": "175",
    "breite_new": "200",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 1500 mm ein."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 