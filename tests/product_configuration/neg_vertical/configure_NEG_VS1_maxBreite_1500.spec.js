import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs1_maxWidth_1500",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "1500",
    "breite": "1700",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 120 mm und 1500 mm ein. Wenn Sie ein breiteres Fenster haben, empfehlen wir Ihnen den Plisseetyp \"Freihängend F1\" - den passenden Konfigurator finden Sie hier."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 