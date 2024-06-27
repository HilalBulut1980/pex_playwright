import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20_fluegel_B_min",
    "product": "Effecto 4316",
    "stoff_url": "effecto-4316",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "100",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "100",
    "df_fluegelhoehe": "1100",
    "df_glasbreite_new": "230",
    "df_fluegelbreite_new": "230",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 230 mm und 1500 mm ein."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 