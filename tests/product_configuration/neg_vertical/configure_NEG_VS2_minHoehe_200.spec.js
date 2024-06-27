import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs2_minHeight_200",
    "product": "Liviano 4313",
    "stoff_url": "liviano-4313",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "180",
    "breite": "1000",
    "hoehe_new": "200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 