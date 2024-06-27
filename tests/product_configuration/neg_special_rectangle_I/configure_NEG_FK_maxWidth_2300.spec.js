import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FK-max.breite",
    "product": "Bast 4141",
    "stoff_url": "Bast-4141",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fk",
    "hoehe": "1000",
    "breite": "2400",
    "breite_new": "2300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 400 mm und 2300 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
