import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6SD-hoehe_teil_max",
    "product": "Luna 4176",
    "stoff_url": "Luna-4176",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6sd",
    "breite_oben": "200",
    "breite_unten": "1000",
    // "gesamthoehe": "2600",
    // "gesamthoehe_new": "2000",
    "teilhoehe": "2500",
    "teilhoehe_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 