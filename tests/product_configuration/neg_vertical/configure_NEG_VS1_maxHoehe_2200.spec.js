import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs1_maxHeight_2200",
    "product": "Syrakus 2079",
    "stoff_url": "syrakus-2079",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "2300",
    "breite": "1000",
    "hoehe_new": "2200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 2200 mm ein. Wenn Sie ein größeres Fenster haben, empfehlen wir Ihnen sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 