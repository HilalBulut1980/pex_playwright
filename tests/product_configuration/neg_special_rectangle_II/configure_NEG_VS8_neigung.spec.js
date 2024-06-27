import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS8-neigung",
    "product": "Luna 4177",
    "stoff_url": "Luna-4177",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs8",
    "hoehe": "1000",
    "breite_oben": "200",
    "breite_unten": "350",
    "breite_unten_new": "400",
    "ausrichtung": "links",
    "neigung": true,
    "message": "Der Neigungswinkel muss zwischen 15° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
