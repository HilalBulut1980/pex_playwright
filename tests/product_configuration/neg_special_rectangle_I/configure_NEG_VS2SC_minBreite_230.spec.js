import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-vs2sc_min.Width_230",
    "product": "Bruneck 1186",
    "stoff_url": "bruneck-1186",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "800",
    "breite": "200",
    "breite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1800 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 