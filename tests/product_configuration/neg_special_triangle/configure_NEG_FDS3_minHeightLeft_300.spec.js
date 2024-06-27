import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS3-min.hoehe_links",
    "product": "Syrakus 4215",
    "stoff_url": "syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "1000",
    "hoehe": "100",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

