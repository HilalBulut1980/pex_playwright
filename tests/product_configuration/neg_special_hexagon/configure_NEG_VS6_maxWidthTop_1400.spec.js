import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6-breite_oben_max",
    "product": "Finura 4439",
    "stoff_url": "Finura-4439",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "1401",
    "breite_oben_new": "1400",
    "breite_unten": "1500",
    "gesamthoehe": "1500",
    "teilhoehe": "1400",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 