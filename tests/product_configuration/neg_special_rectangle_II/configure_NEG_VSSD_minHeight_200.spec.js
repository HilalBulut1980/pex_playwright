import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VSSD-min.hoehe",
    "product": "Brescia 1147",
    "stoff_url": "Brescia-1147",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vssd",
    "hoehe": "100",
    "hoehe_new": "200",
    "breite": "500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
