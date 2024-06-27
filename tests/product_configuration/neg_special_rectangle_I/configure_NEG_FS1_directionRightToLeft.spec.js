import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS1-ausrichtung_links",
    "product": "Luna 4176",
    "stoff_url": "Luna-4176",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs1",
    "breite": "800",
    "hoehe_links": "2100",
    "hoehe_rechts": "2000",
    "ausrichtung": "rechts",
    "ausrichtung_new": "links",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 