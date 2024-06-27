import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-df30C_finnenwidth_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df30c",
    "stoffgruppe": "Bast",
    "stoffnummer": "4141",
    "glashoehe": "1500",
    "glasbreite": "1000",
    "falz": "50",
    "finnenhoehe": "1500",
    "finnenbreite_new": "1000",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_DF(testcase)

}) 