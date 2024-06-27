
import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS3-max.hoehe_1500",
    "product": "Malia 4418",
    "stoff_url": "Malia-4418",
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "vs3",
    "hoehe": "1600",
    "breite": "1500",
    "hoehe_new": "1500",
    "breite_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 
