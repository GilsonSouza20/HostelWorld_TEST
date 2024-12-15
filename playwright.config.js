const { defineConfig, devices } = require('@playwright/test');


const environments = {
  qa: 'https://practicesoftwaretesting.com', //QA env
  stage: 'https://practicesoftwaretesting.com', //Stage env
  prod: 'https://practicesoftwaretesting.com', //Prod env
};

const currentEnvironment = process.env.ENV || 'qa';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10000
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {

    baseURL: environments[currentEnvironment],
    env: { ENV: currentEnvironment },
    browserName: 'chromium',
    channel: 'chrome',
    trace: 'retain-on-failure',
    headless: false,
    screenshot: "off",
  },

  projects: [

    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },


    //----------------------------------------------------------------
    // Uncomment the following code block to run with multiple browsers
    //----------------------------------------------------------------

    /*
    
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },

     //Test against branded browsers.
     {
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
     },

    */

  ],
});

