import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS4S1-schraege",
    "product": "Duo 4009",
    "stoff_url": "Duo-4009",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs4s1",
    "breite": "1200",
    "hoehe_links": "2200",
    "hoehe_rechts": "100",
    "hoehe_rechts_new": "1500",
    "ausrichtung": "links",
    "schraege": true,
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
