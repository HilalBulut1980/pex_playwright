import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF30C_fluegel_B_max",
    "product": "Cremona 1093",
    "stoff_url": "cremona-1093",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "800",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1600",
    "df_fluegelhoehe": "1100",
    "df_fluegelbreite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 250 mm und 1500 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 