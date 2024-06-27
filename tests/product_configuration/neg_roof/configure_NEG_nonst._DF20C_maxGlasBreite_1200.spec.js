import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF20C_glas_B_max_1200",
    "product": "Tarent 1272",
    "stoff_url": "tarent-1272",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df20c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1300",
    "df_glashoehe": "1600",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1300",
    "df_fluegelhoehe": "1600",
    "df_glasbreite_new": "1200",
    "df_fluegelbreite_new": "1200",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 1900 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 