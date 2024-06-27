import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF30C_fluegel_H_min",
    "product": "Chiara 1549",
    "stoff_url": "chiara-1549",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "800",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "100",
    "df_glashoehe_new": "400",
    "df_fluegelhoehe_new": "400",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 
