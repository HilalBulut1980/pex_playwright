import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS7-breite_oben",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "500",
    "breite_oben": "1401",
    "breite_oben_new": "1000",
    "breite_unten": "1500",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
