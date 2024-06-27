import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS7-min.hoehe_300",
    "product": "Alegria 4570",
    "stoff_url": "Alegria-4570",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "250",
    "hoehe_new": "300",
    "breite_oben": "100",
    "breite_unten": "500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

