const { chromium } = require('@playwright/test');


/*use the globalSetup option in the configuration file to set something up once before running all tests. 
The global setup file must export a single function that takes a config object. This function will be run once before all the tests */

async function globalSetup(config) {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error('BASE_URL is not defined');
  }

  console.log(`Entering global setup`);
  console.log(`Applying Magento catalog price rules on ${baseUrl}`);

  if (process.env.APPLY_RULES === 'true') {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      httpCredentials: {
        username: '',
        password: '',
      },
    });
    const page = await context.newPage();
    
    try {
      const response = await page.goto(`${baseUrl}/scripts/catalogrules/apply_rules.php`);
      const responseBody = await response.text();
      console.log(`${responseBody}`);
    } catch (error) {
      console.error(`Error navigating to ${baseUrl}/scripts/catalogrules/apply_rules.php: ${error}`);
    }
    await context.close();
    await browser.close();
  }
}

module.exports = globalSetup;
