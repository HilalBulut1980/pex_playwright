import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-PLK13-min.hoehe",
    "product": "Novella 4930",
    "stoff_url": "Novella-4933",
    "produkttyp": "Sonderformen",
    "form": "plafond",
    "plisseetyp": "plk13",
    "hoehe": "290",
    "hoehe_new": "300",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 4000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 