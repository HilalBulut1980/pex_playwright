
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS1-min.hoehe_klein_links",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "500",
    "hoehe_links": "80",
    "hoehe_links_new": "100",
    "hoehe_rechts": "450",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

