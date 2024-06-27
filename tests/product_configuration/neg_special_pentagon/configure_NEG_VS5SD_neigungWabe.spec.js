import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS5SD-neigung_wabe",
    "product": "Wabe Stylo 4787",
    "stoff_url": "wabe-stylo-4787",
    "produkttyp": "Sonderformen",
    "form": "pentagon",
    "plisseetyp": "vs5sd",
    "hoehe_links": "2000",
    "hoehe_rechts": "1900",
    "hoehe_rechts_new": "1850",
    "breite_oben": "200",
    "breite_unten": "500",
    "ausrichtung": "links",
    "neigung": true,
    "message": "Der Neigungswinkel muss zwischen 25° und 80° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
