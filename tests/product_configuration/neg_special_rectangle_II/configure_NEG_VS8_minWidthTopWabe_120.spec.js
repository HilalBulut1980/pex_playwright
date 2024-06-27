import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS8-breite_oben_wabe",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_oben_new": "120",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 1450 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 