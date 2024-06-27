import { test } from 'playwright/test'
import { NEG_RoofForms } from '../../support/configurator_neg_roof'

const testcase = {
    "name": "Neg.PEX-DF30C_fluegel_H_max",
    "product": "Brigid 4428",
    "stoff_url": "brigid-4428",
    "produkttyp": "Dachfenster",
    "plisseetyp": "df30c",
    "df_switcher": "df_nonstandard",
    "df_glasbreite": "1250",
    "df_glashoehe": "1600",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1250",
    "df_fluegelhoehe": "1700",
    "df_glashoehe_new": "1500",
    "df_fluegelhoehe_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 1900 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Roof = new NEG_RoofForms(page)
    await neg_Roof.configureProduct(testcase)

}) 