import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS9-neigung_wabe",
    "product": "Wabe Object 4124",
    "stoff_url": "wabe-object-4124",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "300",
    "hoehe_new": "500",
    "breite": "2500",
    "breite_new": "500",
    "neigung": true,
    "message": "Der Neigungswinkel muss zwischen 25° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 