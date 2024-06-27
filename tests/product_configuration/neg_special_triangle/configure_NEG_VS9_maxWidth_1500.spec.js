import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS9-breite",
    "product": "Syrakus 4215",
    "stoff_url": "Syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "500",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 