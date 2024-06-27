import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS10-hoehe_links_wabe",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs10",
    "breite": "1000",
    "hoehe": "2100",
    "hoehe_new": "2000",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
