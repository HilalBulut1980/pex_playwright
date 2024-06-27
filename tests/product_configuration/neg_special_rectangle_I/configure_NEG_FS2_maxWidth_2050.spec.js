
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS2-max.breite_2050",
    "product": "Cremona 1090",
    "stoff_url": "Cremona-1090",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "2100",
    "breite_new": "2050",
    "hoehe_links": "1300",
    "hoehe_rechts": "800",
   "ausrichtung": "links",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2050 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

// --> max. Breitre ist auch abhähing von der Stoffbreite

