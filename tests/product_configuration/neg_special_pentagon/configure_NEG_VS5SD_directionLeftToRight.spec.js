import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5SD-ausrichtung_rechts",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "300",
    "hoehe_rechts": "2000",
    "breite_oben": "100",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "ausrichtung_new": "rechts",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plissee (siehe rechts)."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 