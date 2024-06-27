import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-FDS4-schräge",
    "product": "Cremona 1094",
    "stoff_url": "Cremona-1094",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "fds4",
    "breite": "1000",
    "hoehe": "1000",
    "hoehe_new": "1000",
    "ausrichtung": "links",
    "schraege": true,
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    // const neg_Special = new NEG_SpecialForms(page)
    // await neg_Special.configureProduct(testcase)

    // kein test für Schräge bei FDS4
    // max. HxB = 1000
    // max. Schräge ihv 2300 kann nicht erreicht werden

}) 