import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-fk_height_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "rectangle",
    "plisseetyp": "fk",
    "hoehe_new": "1500",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 