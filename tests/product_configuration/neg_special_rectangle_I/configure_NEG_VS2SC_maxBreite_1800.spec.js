import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-vs2sc_max.Width_1800",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "1500",
    "breite": "1900",
    // "hoehe_new": "1500",
    "breite_new": "1800",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1800 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 