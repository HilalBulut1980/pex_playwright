import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5SD-ausrichtung_links",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "2000",
    "hoehe_rechts": "300",
    "breite_oben": "100",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "ausrichtung_new": "links",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 