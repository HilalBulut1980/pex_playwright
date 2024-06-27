import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs2-stickFix",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "befestigung": "stick_fix",
    "hoehe": "2200",
    "breite": "910",
    "breite_new": "900",
    "message": "Leider ist die Klebetechnik \"Stick & Fix\" für eine Fläche von mehr als 2,0 m² nicht geeignet - bitte wählen Sie eine alternative Befestigungsmethode"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 