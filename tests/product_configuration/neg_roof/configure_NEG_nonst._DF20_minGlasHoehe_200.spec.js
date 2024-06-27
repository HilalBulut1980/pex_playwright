import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20_glas_H_min",
    "product": "Sinfonia 4446",
    "stoff_url": "sinfonia-4446",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1000",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1100",
    "df_glashoehe_new": "200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 