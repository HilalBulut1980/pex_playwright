import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5-breite_oben_unten",
    "product": "Eleganza 4299",
    "stoff_url": "Eleganza-4299",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "1000",
    "breite_oben_new": "100",
    "breite_unten": "300",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
