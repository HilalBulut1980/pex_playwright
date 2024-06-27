import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6-hoehe_teil_min",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "1000",
    "teilhoehe": "50",
    "teilhoehe_new": "100",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 