import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VSSD-breite",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vssd",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 