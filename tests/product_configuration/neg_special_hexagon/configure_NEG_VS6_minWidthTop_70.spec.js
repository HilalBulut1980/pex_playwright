import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6-breite_oben",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "50",
    "breite_oben_new": "70",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 70 mm und 1400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 