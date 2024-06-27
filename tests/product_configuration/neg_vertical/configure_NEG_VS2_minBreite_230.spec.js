import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs2_minWidth_230",
    "product": "Bruneck 1186",
    "stoff_url": "bruneck-1186",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "1000",
    "breite": "200",
    "breite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 