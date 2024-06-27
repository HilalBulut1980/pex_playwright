import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS4S1-max.hoehe_klein_links",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1200",
    "hoehe_links": "2250",
    "hoehe_links_new": "2000",
    // "hoehe_rechts": "2500",
    // "hoehe_rechts_new": "2200", wir wollen nur die linke Höhe prüfen
    "ausrichtung": "rechts",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 100 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
