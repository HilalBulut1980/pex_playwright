import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS4-min.breite",
    "product": "Peschiera 2034",
    "stoff_url": "peschiera-2034",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "250",
    "breite_new": "300",
    "hoehe": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

