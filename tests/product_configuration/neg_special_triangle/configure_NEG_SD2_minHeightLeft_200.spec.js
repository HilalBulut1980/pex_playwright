
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-SD2-min.hoehe_links",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "sd2",
    "breite": "1000",
    "hoehe": "150",
    "hoehe_new": "200",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
