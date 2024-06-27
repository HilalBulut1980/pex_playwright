import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-vs2_width_height_empty",
    "url": "bologna-2028",
    "tab": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe_new": "1000",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein.",
    "message2": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SF(testcase)

}) 