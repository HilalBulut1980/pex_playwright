import { test } from 'playwright/test'
import { NEG_VerticalForms } from '../../support/configurator_neg_vertical'

const testcase = {
    "name": "Neg.PEX-vs2_maxHeight_1500_II",
    "product": "Wabe-Light-4733",
    "stoff_url": "wabe-light-4733",
    "produkttyp": "Senkrechte Fenster",
    "plisseetyp": "vs2",
    "hoehe": "1600",
    "breite": "1200",
    "hoehe_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1500 mm ein." //Wabe-Light and Wabe-Twine only till 1500 mm --> PEX-4084

}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vertical = new NEG_VerticalForms(page)
    await neg_Vertical.configureProduct(testcase)

}) 