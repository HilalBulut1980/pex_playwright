import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20_fluegel_H_max_1500",
    "product": "Wabe-Twine-4737",
    "stoff_url": "wabe-twine-4737",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "800",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1700",
    "df_fluegelhoehe_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1500 mm ein." //Wabe-Light and Wabe-Twine only till 1500 mm --> PEX-4084
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 