import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20C_glas_H_max",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1000",
    "df_glashoehe": "2000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "2000",
    "df_glashoehe_new": "1900",
    "df_fluegelhoehe_new": "1900",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 