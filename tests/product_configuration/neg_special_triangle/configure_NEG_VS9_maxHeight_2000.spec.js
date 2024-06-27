import { test } from 'playwright/test'
import { NEG_SpecialForms } from '../../support/configurator_neg_specialForms'

const testcase = {
    "name": "Neg.PEX-VS9-hoehe",
    "product": "Floral 4105",
    "stoff_url": "floral-4105",
    "produkttyp": "Sonderformen",
    "form": "triangle",
    "plisseetyp": "vs9",
    "hoehe": "2001",
    "hoehe_new": "1300",
    "breite": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Special = new NEG_SpecialForms(page)
    await neg_Special.configureProduct(testcase)

}) 