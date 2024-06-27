import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs1_maxWidth_1200",
    "product": "Duo 4001",
    "stoff_url": "duo-4001",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "2000",
    "breite": "1300",
    "breite_new": "1200",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt. Wenn Sie ein größeres Fenster haben, empfehlen wir sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 