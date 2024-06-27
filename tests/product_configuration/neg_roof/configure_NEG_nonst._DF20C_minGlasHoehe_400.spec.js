import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20C_glas_H_min",
    "product": "Tarent 1272",
    "stoff_url": "tarent-1272",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1000",
    "df_glashoehe": "300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1100",
    "df_glashoehe_new": "400",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 