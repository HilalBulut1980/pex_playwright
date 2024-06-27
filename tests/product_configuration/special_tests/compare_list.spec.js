import { expect } from 'playwright/test'
import { test } from 'playwright/test'


test('check Vergleichsliste with 3 products', async ({ page }) => {  // page is a page instance  

    //******************************************************* FIRST PRODUCT ************************************************************ */

    // visit product page
    await page.goto('/blackout-4017')

    await expect(page.locator('a[id="compare-link-add"]')).toBeVisible();
    await page.locator('a[id="compare-link-add"]').click();
    await expect(page.locator('a[id="compare-link-view"]')).toBeVisible();
    await page.locator('a[id="compare-link-view"]').click();
    await expect(page).toHaveURL(new RegExp('/catalog/product_compare/index$'));
    await expect(page.locator('.product-shop-row')).toContainText('Blackout-4017')


    // //******************************************************* SECOND PRODUCT ************************************************************ */

    // visit product page
    await page.goto('/crepp-color-5114')

    await expect(page.locator('a[id="compare-link-add"]')).toBeVisible();
    await page.locator('a[id="compare-link-add"]').click();
    await expect(page.locator('a[id="compare-link-view"]')).toBeVisible();
    await page.locator('a[id="compare-link-view"]').click();
    await expect(page).toHaveURL(new RegExp('/catalog/product_compare/index$'));
    await expect(page.locator('.product-shop-row')).toContainText('Blackout-4017')
    await expect(page.locator('.product-shop-row')).toContainText('Crepp-Color-5114')


    // //******************************************************* THIRD PRODUCT ************************************************************ */

    // visit product page
    await page.goto('/rapallo-1216')

    await expect(page.locator('a[id="compare-link-add"]')).toBeVisible();
    await page.locator('a[id="compare-link-add"]').click();
    await expect(page.locator('a[id="compare-link-view"]')).toBeVisible();
    await page.locator('a[id="compare-link-view"]').click();
    await expect(page).toHaveURL(new RegExp('/catalog/product_compare/index$'));
    await expect(page.locator('.product-shop-row')).toContainText('Blackout-4017')
    await expect(page.locator('.product-shop-row')).toContainText('Crepp-Color-5114')
    await expect(page.locator('.product-shop-row')).toContainText('Rapallo-1216')


    // //******************************************************* DELETE PRODUCTs FROM COMPARELIST ************************************************************ */

    await page.getByRole('link', { name: 'von Vergleichsliste entfernen' }).first().click()
    await page.getByRole('link', { name: 'von Vergleichsliste entfernen' }).first().click()
    await page.getByRole('link', { name: 'von Vergleichsliste entfernen' }).first().click()



    // //******************************************************* CHECK NEW LOADED PAGES ************************************************************ */

    await expect(page.locator('.main p')).toContainText('Ihre Vergleichsliste ist leer. Klicken sie hier, um zur Startseite zu gelangen.')
    await page.locator('.main a').click();
    await expect(page).toHaveURL(new RegExp('.plissee-experte.de/$'));


})
