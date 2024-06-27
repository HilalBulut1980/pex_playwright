import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5-breite_oben_max_wabe",
    "product": "Duo 4001",
    "stoff_url": "Duo-4001",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "1000",
    "hoehe_rechts": "950",
    "breite_unten": "1000",
    "breite_oben": "951",
    "breite_oben_new": "950",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die obere Breite in Millimeter im Bereich von 120 mm und 950 mm ein."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
