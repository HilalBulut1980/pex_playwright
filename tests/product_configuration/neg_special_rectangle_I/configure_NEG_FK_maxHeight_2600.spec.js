import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FK-max.hoehe",
    "product": "Syrakus 4215",
    "stoff_url": "Syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "hoehe": "2650",
    "hoehe_new": "2600",
    "breite": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 