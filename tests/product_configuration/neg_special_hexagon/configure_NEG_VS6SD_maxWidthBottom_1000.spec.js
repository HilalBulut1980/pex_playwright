import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6-breite_unten",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "500",
    "breite_unten": "1001",
    "breite_unten_new": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
