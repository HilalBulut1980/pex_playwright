import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS8-hoehe_links_300",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "299",
    "hoehe_new": "300",
    "breite_oben": "100",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 