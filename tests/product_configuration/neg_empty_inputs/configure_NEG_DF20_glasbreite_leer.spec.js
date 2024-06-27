import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-df20_glasswidth_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df20",
    "glashoehe": "1500",
    "glasbreite_new": "1000",
    "falz": "50",
    "finnenhoehe": "1500",
    "finnenbreite": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_DF(testcase)

}) 