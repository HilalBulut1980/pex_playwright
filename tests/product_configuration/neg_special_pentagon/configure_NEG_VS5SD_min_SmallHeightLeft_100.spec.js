import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5SD-hoehe_klein_links",
    "product": "Tarent 1277",
    "stoff_url": "Tarent-1277",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "80",
    "hoehe_links_new": "100",
    "hoehe_rechts": "1500",
    "breite_oben": "200",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 