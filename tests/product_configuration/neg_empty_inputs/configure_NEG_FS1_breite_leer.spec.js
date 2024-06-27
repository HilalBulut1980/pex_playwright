import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-fs1_width_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "rectangle",
    "plisseetyp": "fs1",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_new": "800",
    "message2": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 800 mm ein.",
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 