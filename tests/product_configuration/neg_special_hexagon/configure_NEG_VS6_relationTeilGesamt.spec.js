import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS6-hoehe_teil_gesamt",
    "product": "Tolmezzo 1245",
    "stoff_url": "Tolmezzo-1245",
    "produkttyp": "Sonderformen",
    "form": "hexagon",
    "plisseetyp": "vs6",
    "breite_oben": "200",
    "breite_unten": "1000",
    "gesamthoehe": "2000",
    "teilhoehe": "2000",
    "teilhoehe_new": "1800",
    "message": "Die Gesamthöhe muss größer als die Teilhöhe sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 