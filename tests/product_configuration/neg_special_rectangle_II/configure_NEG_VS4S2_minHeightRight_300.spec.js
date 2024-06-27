import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS4S2-min.hoehe_rechts",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s2",
    "breite": "1000",
    "hoehe_links": "200",
    "hoehe_rechts": "290",
    "hoehe_rechts_new": "500",
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 