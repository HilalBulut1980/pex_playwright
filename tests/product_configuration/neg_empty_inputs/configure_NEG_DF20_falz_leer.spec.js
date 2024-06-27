import { test } from 'playwright/test'
import { CheckEmptyInputs } from '../../support/check_empty_inputs'

const testcase = {
    "name": "Neg.PEX-df20_falz_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df20",
    "glashoehe": "1500",
    "glasbreite": "1000",
    "falz_new": "50",
    "finnenhoehe": "1500",
    "finnenbreite": "1000",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const EmptyInputs = new CheckEmptyInputs(page)
    await EmptyInputs.selectProduct(testcase)
    await EmptyInputs.emptyInputs_DF(testcase)

}) 