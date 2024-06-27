import { expect } from 'playwright/test'
import { test } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from '../../support/cart'
import { Checkout } from '../../support/checkout'

const testcase = {
    "name": "PEXConfig. - F1 mit RMG",
    "produkt": "Varese 4449",  //PG 2
    "stoff_url": "varese-4449",
    "abPreis": "96,00",
    "abPreis_red": "59,15",  //R 5,6 -5,00 -35% 
    "produkttyp": "Sonderformen",
    "form": "rectangle",
    "plisseetyp": "f1",
    "befestigung": "direkt_vor_der_scheibe",
    "hoehe": "2200",
    "breite": "1950",
    "bedienseite": "links",
    "pendelsicherung": "nein",
    "schienenfarbe": "bronze",

    //Richtig Messen Garantie
    "rmg": "ja",

    "anzahl": 1,
    "grundpreis": 641,
    "befestigung_preis": 0,
    "bediengriff_preis": 0,
    "bediengriff_aufpreis": 0,
    "bedienstab_preis": 0,
    "discount_1": 0.65,
    "discount_2": 5,
    "discount_3": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    //customer data
    "login": "guest",
    "prefix": "Frau",
    "first_name": "Marlene",
    "last_name": "Hansen",
    "email": "marly@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "same",
    "prefix_2": "",
    "first_name_2": "",
    "last_name_2": "",
    "email_2": "",
    "street_2": "",
    "postal_code_2": "",
    "city_2": "",
    "state_2": "",
    "phone_2": "",
    "payment": "Vorkasse"
}


test('Richtig Messen Garantie Test mit F1', async ({ page }) => {  // page is a page instance  


    //Konfigurator
    let streichPreis = testcase.grundpreis.toFixed(2);
    let redPreis = (jsonLogic.apply({ '-': [streichPreis, testcase.discount_2] })).toFixed(2);  //Abzug 2. Rabatt
    redPreis = (jsonLogic.apply({ '*': [redPreis, testcase.discount_1] })).toFixed(2); //Abzug 1. Rabatt

    //warenkorb --> bedienstab wird getrennt
    let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
    let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
    let warenkorbTotal = redPreisTotal;
    let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)
    console.log(sieSparen)

    let versandkosten = testcase.versandkosten.toFixed(2);
    let streichPreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [streichPreis, 119] }), testcase.vat] })).toFixed(2);
    let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)

    let redPreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreis, 119] }), testcase.vat] })).toFixed(2);
    let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
    let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
    let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)

    let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] })).toFixed(4)
    steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
    let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_mwst, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

    streichPreis = streichPreis.replace('.', ',')
    redPreis = redPreis.replace('.', ',')
    streichPreisTotal = streichPreisTotal.replace('.', ',')
    redPreisTotal = redPreisTotal.replace('.', ',')
    warenkorbTotal = warenkorbTotal.replace('.', ',')
    sieSparen = sieSparen.replace('.', ',')
    console.log(sieSparen)
    versandkosten = versandkosten.replace('.', ',')
    streichPreis_mwst = streichPreis_mwst.replace('.', ',')
    streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',')
    redPreis_mwst = redPreis_mwst.replace('.', ',')
    redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',')
    sieSparen_mwst = sieSparen_mwst.replace('.', ',')
    total_mwst = total_mwst.replace('.', ',')
    steuer_betrag = steuer_betrag.replace('.', ',')
    steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')


    //-------------------------------------------------------------------------------------------------------------------------------\\
    //********************************************************************************************************************************/


    // visit product page
    await page.goto(testcase.stoff_url)

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");


    // ---------------------------------------- START PRODUCT CONFIGURATION ----------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------------------------------\\
    //********************************************************************************************************************************/

    // select TAB
    await page.getByText(testcase.produkttyp, { exact: true }).click()

    // select window shape
    await page.locator("label[for=" + testcase.form + "]").click()

    //set Plissee typ
    await page.locator("label[for=" + testcase.plisseetyp + "]").click()

    // check  from prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText(testcase.abPreis);
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText(testcase.abPreis_red);
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText(testcase.abPreis);
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText(testcase.abPreis_red);

    // select Befestigung 
    await page.locator("label[for=" + testcase.befestigung + "]").click()

    // set Höhe 
    await page.locator('id=hoehe').fill(testcase.hoehe)

    // set Breite
    await page.locator('id=breite').fill(testcase.breite)

    // select Schienenfarbe 
    await page.getByText(testcase.schienenfarbe, { exact: true }).click()

    // select Bedienseite
    await page.locator("label[for=" + testcase.bedienseite + "]").click()


    // check prices
    await expect(page.locator('.product_prices_top > .price .original_price')).toContainText(streichPreis);
    await expect(page.locator('.product_prices_top > .price .final_price')).toContainText(redPreis);
    await expect(page.locator('.price_amount > .product_prices > .price .original_price')).toContainText(streichPreis);
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).toContainText(redPreis);

    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill(((testcase.anzahl).toString()), { force: true });
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));




    //-------------------CHECKING PRICES IN CART--------------------\\

    // Erstelle eine Instanz der Klasse Cart
    const newCart = new Cart(page)
    // Erstelle eine Instanz der Klasse Checkout
    const newCheckout = new Checkout(page)

    //-------------------CART------------------------------------\\
    await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, testcase.kosten_stab, sieSparen, warenkorbTotal, testcase.rabatt_code, testcase.rabatt_betrag, testcase.sieSparen_new, testcase.warenkorbTotal_new)

    //add RMG
    await page.goto('richtig-messen-garantie')
    await page.getByText(/In den Warenkorb/).first().click();

    //-------------------CART------------------------------------\\
    //check cart with RMG
    await newCart.checkCartRMG(streichPreis, redPreis, streichPreisTotal, redPreisTotal, sieSparen, warenkorbTotal)

    //-------------------CHECKOUT------------------------------------\\
    await newCheckout.checkOut(testcase.produkttyp, testcase.missing_name, testcase.login, testcase.prefix, testcase.first_name, testcase.last_name, testcase.company_name, testcase.vatID, testcase.email, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.password, testcase.prefix_2, testcase.first_name_2, testcase.last_name_2, testcase.company_name_2, testcase.vatID_2, testcase.street_2, testcase.postal_code_2, testcase.city_2, testcase.state_2, testcase.phone_2, versandkosten, testcase.payment)
    await newCheckout.checkFinalPrices(testcase.produkttyp, testcase.payment, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, testcase.bedienstab_mwst, testcase.rabatt_code, testcase.rabatt_betrag_mwst, versandkosten, sieSparen_mwst, total_mwst)
    await newCheckout.checkRMG()
    await newCheckout.placeOrder(testcase.produkttyp, testcase.rmg, testcase.payment, testcase.canceled_payment, testcase.failed_payment, redPreis_mwst, redPreisTotal_mwst, testcase.befestigung_mwst, testcase.befestigung_mwst_total, testcase.bedienstab_mwst, testcase.bedienstab_mwst_total, versandkosten, total_mwst, testcase.mwst_1, steuer_betrag, testcase.mwst_2, testcase.steuer_betrag_2, testcase.mwst_3, testcase.steuer_betrag_3, steuer_betrag_gesamt, testcase.rabatt_betrag_mwst, testcase.rabatt_betrag_mwst_1, testcase.rabatt_betrag_mwst_2, testcase.rabatt_code)
})