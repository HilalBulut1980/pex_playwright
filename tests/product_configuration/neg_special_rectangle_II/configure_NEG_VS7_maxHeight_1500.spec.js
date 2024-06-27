import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS7-hoehe_1500",
    "product": "Clasico 4410",
    "stoff_url": "Clasico-4410",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs7",
    "hoehe": "1600",
    "hoehe_new": "1500",
    "breite_oben": "100",
    "breite_unten": "1300",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2000 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
