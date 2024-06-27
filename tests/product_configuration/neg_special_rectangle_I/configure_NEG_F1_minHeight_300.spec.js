import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-F1-min.hoehe",
    "product": "Dimout 5067",
    "stoff_url": "Dimout-5067",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "200",
    "hoehe_new": "300",
    "breite": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 