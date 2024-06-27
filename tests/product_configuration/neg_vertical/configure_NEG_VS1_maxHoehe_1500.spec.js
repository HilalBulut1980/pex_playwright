import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs1_maxHeight_1500",
    "product": "Novara 1234",
    "stoff_url": "novara-1234",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs1",
    "hoehe": "1600",
    "breite": "1600",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt. Wenn Sie ein größeres Fenster haben, empfehlen wir sogenannte freihängende Plissees - den passenden Konfigurator finden Sie hier."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 