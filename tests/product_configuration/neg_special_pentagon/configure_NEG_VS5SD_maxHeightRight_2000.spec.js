import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5SD-hoehe_rechts",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "300",
    "hoehe_rechts": "2100",
    "hoehe_rechts_new": "2000",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 