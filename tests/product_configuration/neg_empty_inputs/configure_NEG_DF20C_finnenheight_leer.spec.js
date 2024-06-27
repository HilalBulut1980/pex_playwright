import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-df20C_finnenheight_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df20c",
    "glashoehe": "1500",
    "glasbreite": "1000",
    "falz": "50",
    "finnenhoehe_new": "1500",
    "finnenbreite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_DF(testcase)

}) 