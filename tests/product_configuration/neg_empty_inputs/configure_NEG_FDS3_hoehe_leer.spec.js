
import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-fds3_height_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "triangle",
    "plisseetyp": "fds3",
    "hoehe_new": "1000",
    "breite": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 