
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-SD3-max.breite",
    "product": "Alegria 4570",
    "stoff_url": "Alegria-4570",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd3",
    "hoehe": "1000",
    "breite": "2100",
    "breite_new": "2000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 200 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 