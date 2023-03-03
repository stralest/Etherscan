require('selenium-webdriver/chrome');
require('selenium-webdriver/edge');

const {Builder, By, Key, until} = require('selenium-webdriver');
const { expect } = require ('chai');
const BasePage = require('../pages/page.base');
const RegisterPage = require('../pages/page.register');

describe('Etherscan tests', () => {
    let driver;
    let pageBase;
    let pageRegister;

    const browsers = {
        chrome: 'chrome',
        microsoftEdge: 'MicrosoftEdge'
    };

    //Executing before starting of the tests in fullscreen, initializing driver and implementing POM
    before(async () => {
        driver = await new Builder().forBrowser(browsers.chrome).build();
        await driver.manage().window().maximize();
        pageBase = new BasePage(driver);
        pageRegister = new RegisterPage(driver);
    })

    //Executing after ending of the last test
    after(async() => {
        await driver.quit();
    })

    //First test verifies that register form is opened
    it('Verify that register form is opened', async () => {
        await pageRegister.goToUrl('https://etherscan.io/register');
        const registerTitle = await pageRegister.getCurrentTitle();
        expect(await registerTitle).to.contain('Etherscan Registration Page');
    })

    //TC 002.001
    it('Filling out register form, submiting and asserting', async () => {
        await pageRegister.getUsernameField();
        await pageRegister.getEmailAddressField();
        await pageRegister.getConfirmEmailAddressField();
        await pageRegister.getPasswordField();
        await pageRegister.getConfirmPasswordField();
        await pageRegister.getTermsAndConditionsCheckbox();
        await pageRegister.clickOnCreateAnAccountButton();

        const verifyEmail = await pageRegister.getVerifyEmailDiv().getText();
        expect(await verifyEmail).to.contain('Your account registration has been submitted and is pending email verification');
    })
})