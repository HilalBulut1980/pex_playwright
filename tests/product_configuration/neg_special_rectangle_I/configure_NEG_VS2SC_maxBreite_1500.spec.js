import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-vs2sc_max.Width_1500",
    "product": "Duo 4001",
    "stoff_url": "duo-4001",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs2sc",
    "hoehe": "2000",
    "breite": "1600",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1800 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1500 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 