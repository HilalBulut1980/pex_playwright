import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-F5-min.breite",
    "product": "Conforto 4336",
    "stoff_url": "Conforto-4336",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f5",
    "hoehe": "1500",
    "breite": "100",
    "breite_new": "150",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 150 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 