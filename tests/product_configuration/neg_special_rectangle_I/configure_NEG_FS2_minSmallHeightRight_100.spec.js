
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS2-min.hoehe_klein_rechts",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "500",
    "hoehe_links": "450",
    "hoehe_rechts": "80",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
