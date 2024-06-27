import { expect } from 'playwright/test'
import { test } from 'playwright/test'

// ******* BESCHREIBUNG *******
// es wird Bologna-2028 konfiguriert
// Die Rechungsinformationen werden eingegeben und anschließend in der Progressbar geprüft, 
// ob bei Rechnungsadresse und Lieferadresse die gleichen Informationen stehen.
// Anschließend wird Punkt (3) 'Lieferadresse' geklickt und eine unterschiedliche Versandadresse eingegeben. 
// In der Progressbar wird geprüft, ob bei Punkt Lieferadresse die neuen Daten übernommen wurden.
// Als Zahlungsmethode wird zunächst Kreditkarte gewählt
// in der Progessbar wird geprüft, ob 'Kreditkarte' angegeben ist
// mit 'Ändern' wird zu Punkt (5) 'Zahlungsinformation' navigiert und dort 'Vorkasse selektiert'
// in der Progessbar werden die Zahlungsart 'Vorkasse' + die Kontodaten von Deplhinus geprüft
// zuletzt wird geprüft, ob in der Progressbar bei 'Versandart' der korrekte Betrag enthalten ist (hier 0,00 €)


const customer = {
    //customer data
    "prefix": "Herr",
    "first_name": "Hannes",
    "last_name": "Lobrecht",
    "company": "Tester AG",
    "vatid": "ATU33803701",
    "email": "test@delphinus-test.de",
    "street": "Kobelgasse 7",
    "postal_code": "1110",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123456",
    "shipping": "new",
    "prefix_2": "Frau",
    "first_name_2": "Melanie",
    "last_name_2": "Schulze",
    "company_2": "Tester DE AG",
    "vatid_2": "DE136627286",
    "street_2": "Zentralweg 3",
    "postal_code_2": "20099",
    "city_2": "Hamburg",
    "state_2": "Deutschland",
    "phone_2": "225588",
    "payment": "Vorkasse"
}

test('check progressbar - long order', async ({ page }) => {  // page is a page instance  


    // visit product page
    await page.goto('/bologna-2028')

    // instead of wait for js-files
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-5,00");
    await expect(page.locator('.price_amount > .product_prices > .price .final_price')).not.toContainText("-2,50");



    // select TAB  (product typ)
    await page.getByText('Senkrechte Fenster', { exact: true }).click()

    // fill in hoehe and breite
    await page.locator('id=hoehe').fill('1400')
    await page.locator('id=breite').fill('1200')

    // set quantity and add to cart
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');
    await page.locator('.add_to_cart_button').click();

    await expect(page).toHaveURL(new RegExp('/checkout/cart$'));

    // --> CART
    // ******************************** PROCEED TO CHECKOUT *********************************
    await page.locator('div.cart-collaterals ul span > span').click();

    await expect(page).toHaveURL(new RegExp('/checkout/onepage$'));


    // --> CHECKOUT

    // --> PROGESS BAR CHECK
    // check if progressbar is visible
    await expect(page.locator('#op_checkout_progress')).toBeVisible();

    //check if heading of progess bar is visible
    await expect(page.locator('.op_checkout_progress_heading')).toBeVisible();
    // and if it is containg the title
    await expect(page.locator('.op_checkout_progress_heading')).toHaveText('Ihr Bestellfortschritt')

    // check if 4 steps are existing/visible in progressbar
    // Rechnungsadresse
    await expect(page.locator('#billing-progress-opcheckout')).toBeVisible();
    await expect(page.locator('#billing-progress-opcheckout')).toContainText('Rechnungsadresse')
    // Lieferadresse
    await expect(page.locator('#shipping-progress-opcheckout')).toBeVisible();
    await expect(page.locator('#shipping-progress-opcheckout')).toContainText('Lieferadresse')
    // Versandart
    await expect(page.locator('#shipping_method-progress-opcheckout')).toBeVisible();
    await expect(page.locator('#shipping_method-progress-opcheckout')).toContainText('Versandart')
    // Zahlungsart
    await expect(page.locator('#payment-progress-opcheckout')).toBeVisible();
    await expect(page.locator('#payment-progress-opcheckout')).toContainText('Zahlungsart')


    // als Gast zur Kasse gehen
    await page.getByText(new RegExp("^" + "Als Gast zur Kasse gehen" + "\\s*$")).first().click();
    await page.getByText(/Fortsetzen/).first().click();

    // set billing information
    await page.selectOption(('[id="billing:prefix"]'), customer.prefix)
    await page.locator('[id="billing:firstname"]').clear()
    await page.locator('[id="billing:firstname"]').fill(customer.first_name)
    await page.locator('[id="billing:lastname"]').clear()
    await page.locator('[id="billing:lastname"]').fill(customer.last_name)
    await page.locator('[id="billing:company"]').clear()
    await page.locator('[id="billing:company"]').fill(customer.company)
    await page.locator('[id="billing:email"]').fill(customer.email)
    await page.locator('[id="billing:vat_id"]').fill(customer.vatid)
    await page.locator('[id="billing:street1"]').fill(customer.street)
    await page.locator('[id="billing:postcode"]').fill(customer.postal_code)
    await page.locator('[id="billing:city"]').fill(customer.city)
    await page.selectOption("#billing\\:country_id", customer.state)
    await page.locator('[id="billing:telephone"]').fill(customer.phone)


    // Weiter Button
    await page.locator('button').getByText(/Weiter/).first().click();

    // check progress bar - billing address
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.prefix + ' ' + customer.first_name + ' ' + customer.last_name)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.company)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.street)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.postal_code + ' ' + customer.city)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.state)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.phone)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText('USt-ID: ' + customer.vatid)
    await expect(page.locator('#billing-progress-opcheckout > address')).toContainText(customer.email)

    // check progress bar - shipping address
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.prefix + ' ' + customer.first_name + ' ' + customer.last_name)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.company)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.street)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.postal_code + ' ' + customer.city)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.state)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.phone)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText('USt-ID: ' + customer.vatid)


    // CHANGE DATA --> click 'Lieferadresse Ändern' on progress bar
    await page.locator('a[href="#shipping"]:has-text("Ändern")').click();


    // change shipping information
    await page.selectOption(('[id="shipping:prefix"]'), customer.prefix_2)
    await page.locator('[id="shipping:firstname"]').clear()
    await page.locator('[id="shipping:firstname"]').fill(customer.first_name_2)
    await page.locator('[id="shipping:lastname"]').clear()
    await page.locator('[id="shipping:lastname"]').fill(customer.last_name_2)
    await page.locator('[id="shipping:company"]').clear()
    await page.locator('[id="shipping:company"]').fill(customer.company_2)
    await page.locator('[id="shipping:vat_id"]').fill(customer.vatid_2)
    await page.locator('[id="shipping:street1"]').fill(customer.street_2)
    await page.locator('[id="shipping:postcode"]').fill(customer.postal_code_2)
    await page.locator('[id="shipping:city"]').fill(customer.city_2)
    await page.selectOption("#shipping\\:country_id", customer.state_2)
    await page.locator('[id="shipping:telephone"]').fill(customer.phone_2)

    // Fortsetzen Button
    await page.getByRole('button', { name: 'Weiter' }).click()


    // check progress bar - new shipping address
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.prefix_2 + ' ' + customer.first_name_2 + ' ' + customer.last_name_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.company_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.street_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.postal_code_2 + ' ' + customer.city_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.state_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText(customer.phone_2)
    await expect(page.locator('#shipping-progress-opcheckout > address')).toContainText('USt-ID: ' + customer.vatid_2)

    // Fortsetzen Button
    // await page.locator('button:has-text("Fortsetzen")').click();
    await page.getByRole('button', { name: 'Fortsetzen' }).click();

    // set credit card as payment method
    // await page.locator('.payment_method.ppp.card input').click();
    await page.locator("label[for='p_method_card']").click()
    await expect(page.locator('.payment_method.ppp.card.ppp-selected')).toBeVisible(); //only an additional check of the right selection

    // Fortsetzen Button
    await page.getByRole('button', { name: 'Fortsetzen' }).click();

    // // check progress bar - payment method
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Kreditkarte')

    // CHANGE DATA --> click 'Zahlungsart Ändern' on progress bar
    await page.locator('a[href="#payment"]:has-text("Ändern")').click();

    // // set Vorkasse as payment method
    await page.locator("label[for='p_method_bankpayment']").click()
    await expect(page.locator('.payment_method.ppp.bankpayment.ppp-selected')).toBeVisible(); //only an additional check of the right selection

    // Fortsetzen Button
    await page.getByRole('button', { name: 'Fortsetzen' }).click();

    // check progress bar - new shipping address
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Vorkasse')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Kontodaten')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Kontoinhaber')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Delphinus GmbH')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Kontonummer')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('44779101')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('BLZ')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('10010010')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Bankname')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('Postbank')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('IBAN')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('DE78 1001 0010 0044 7791 01')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('BIC')
    await expect(page.locator('#payment-progress-opcheckout > .content')).toContainText('PBNKDEFF')

    // check progress bar - Versandkosten
    await expect(page.locator('#shipping_method-progress-opcheckout > .content > .price')).toContainText('0,00 €')
})
