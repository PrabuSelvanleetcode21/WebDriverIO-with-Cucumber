const { Given, When, Then } = require('@cucumber/cucumber');
// import HomePage from '../pages/homepage'; // u cant use this
const HomePage = require('../pages/homepage');



Given ('I Launch the application', async ()=> {
    await HomePage.open();
})

Then('Verify the Url of HomePage', async ()=> {
    await expect(browser).toHaveUrl('https://practice.automationbro.com/')
})

When ('I Click on Get Started Button', async()=> {
    await HomePage.getStartedBtn.click();
})

Then('Verify the Url of Get Started Page', async ()=> {
    await expect(browser).toHaveUrl('https://practice.automationbro.com/#get-started')
})

