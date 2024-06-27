import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-F1-max_hoehe_1500",
    "product": "Wabe-Twine-4743",
    "stoff_url": "Wabe-Twine-4743",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "hoehe": "1700",
    "hoehe_new": "1500",
    "breite": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1500 mm ein." //Wabe-Light and Wabe-Twine only till 1500 mm --> PEX-4084
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 