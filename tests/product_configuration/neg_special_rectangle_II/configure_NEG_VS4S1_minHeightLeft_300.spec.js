
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS4S1-min.hoehe_links_300",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1000",
    "hoehe_links": "290",
    "hoehe_links_new": "300",
    "hoehe_rechts": "100",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
