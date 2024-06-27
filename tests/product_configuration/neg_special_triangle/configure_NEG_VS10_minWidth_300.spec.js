import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS10-breite",
    "product": "Alegria 4565",
    "stoff_url": "Alegria-4565",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs10",
    "breite": "299",
    "breite_new": "300",
    "hoehe": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 