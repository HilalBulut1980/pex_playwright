
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FS2-neigung",
    "product": "Eleganza 4300",
    "stoff_url": "eleganza-4300",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "fs2",
    "breite": "1500",
    "hoehe_links": "250",
    "hoehe_links_new": "350",
    "hoehe_rechts": "200",
    "ausrichtung": "links",
    "neigung": true,
    "message": "Der Neigungswinkel muss zwischen 5° und 50° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 

