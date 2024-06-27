
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS2-ausrichtung_rechts",
    "product": "Syrakus 4220",
    "stoff_url": "Syrakus-4220",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "800",
    "hoehe_links": "2000",
    "hoehe_rechts": "2100",
    "ausrichtung": "links",
    "ausrichtung_new": "rechts",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 