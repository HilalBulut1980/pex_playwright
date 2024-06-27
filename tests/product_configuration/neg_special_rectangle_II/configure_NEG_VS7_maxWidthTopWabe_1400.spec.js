import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS7-breite_oben",
    "product": "Duo-4013",
    "stoff_url": "Duo-4013",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "1000",
    "breite_oben": "1401",
    "breite_oben_new": "700",
    "breite_unten": "1500",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
