import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS4-max.hoehe_rechts",
    "product": "Bologna 2028",
    "stoff_url": "bologna-2028",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1000",
    "hoehe": "1100",
    "hoehe_new": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 