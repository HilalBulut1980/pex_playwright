import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-vs2sc_max.Height_1800",
    "product": "Novara 1234",
    "stoff_url": "novara-1234",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "1900",
    "breite": "1600",
    "hoehe_new": "1800",
    // "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1800 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1500 mm beträgt."

}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 