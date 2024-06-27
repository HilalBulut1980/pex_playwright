import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-vs9_width_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "1000",
    "breite_new": "1000",
    "message2": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 