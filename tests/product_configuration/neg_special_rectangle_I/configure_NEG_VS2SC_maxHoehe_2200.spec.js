import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-vs2sc_max.Height_2200",
    "product": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2300",
    "breite": "1500",
    "hoehe_new": "2200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 