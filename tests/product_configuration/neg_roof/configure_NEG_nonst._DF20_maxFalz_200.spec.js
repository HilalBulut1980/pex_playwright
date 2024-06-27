import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20_falz_max",
    "product": "Quadrate 4042",
    "stoff_url": "quadrate-4042",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1000",
    "df_glashoehe": "800",
    "df_falztiefe": "250",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "900",
    "df_falztiefe_new": "200",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 