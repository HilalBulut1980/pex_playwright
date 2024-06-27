import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS3-max.hoehe_links",
    "product": "Syrakus 4215",
    "stoff_url": "syrakus-4215",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "1500",
    "hoehe": "1700",
    "hoehe_new": "1600",
    "ausrichtung": "links",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 1600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 