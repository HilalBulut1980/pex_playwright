import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-vs6sd_heights_empty",
    "url": "bologna-2028",
    "tab": "Sonderformen",
    "shape": "hexagon",
    "plisseetyp": "vs6sd",
    "gesamthoehe_new": "2000",
    "teilhoehe_new": "1500",
    "breite_oben": "500",
    "breite_unten": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein.",
    "message2": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein.",
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_SD(testcase)

}) 