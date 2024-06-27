import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20_glas_H_max",
    "product": "Sinfonia 4447",
    "stoff_url": "sinfonia-4447",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1000",
    "df_glashoehe": "1700",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1700",
    "df_fluegelhoehe_new": "1600",
    "df_glashoehe_new": "1600",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 