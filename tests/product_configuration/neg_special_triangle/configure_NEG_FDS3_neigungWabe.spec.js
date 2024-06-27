import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS3-neigung_wabe",
    "product": "Wabe Object 4124",
    "stoff_url": "wabe-object-4124",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds3",
    "breite": "500",
    "hoehe": "2500",
    "hoehe_new": "400",
    "ausrichtung": "links",
    "neigung": true,
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 