import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS1-min.breite",
    "product": "Bozen 1161",
    "stoff_url": "bozen-1161",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "100",
    "breite_new": "300",
    "hoehe_links": "1000",
    "hoehe_rechts": "800",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 800 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
