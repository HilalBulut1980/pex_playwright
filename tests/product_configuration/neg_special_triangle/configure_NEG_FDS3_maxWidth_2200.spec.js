import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS3-max.breite",
    "product": "Rimini 1017",
    "stoff_url": "rimini-1017",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "2300",
    "breite_new": "2200",
    "hoehe": "600",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
