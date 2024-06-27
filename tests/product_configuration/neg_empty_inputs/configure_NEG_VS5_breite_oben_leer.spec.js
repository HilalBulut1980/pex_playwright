import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-vs5_widthTopWabe_empty",
    "url": "duo-4010",
    "tab": "Sonderformen",
    "shape": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben_new": "500",
    "breite_unten": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1450 mm ein.",
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 