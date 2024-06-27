import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6SD-breite_oben_wabe",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "50",
    "breite_oben_new": "120",
    "breite_unten": "1000",
    "gesamthoehe": "1500",
    "teilhoehe": "1000",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 