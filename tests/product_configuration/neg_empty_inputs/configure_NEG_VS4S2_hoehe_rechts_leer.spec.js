import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-vs4s2_heightRight_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "rectangle",
    "plisseetyp": "vs4s2",
    "hoehe_links": "1500",
    "hoehe_rechts_new": "1000",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2200 mm ein.",
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 