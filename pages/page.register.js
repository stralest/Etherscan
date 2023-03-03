const {By, key, until} = require ('selenium-webdriver');
const BasePage = require('./page.base');

module.exports = class RegisterPage extends BasePage {
    #driver;
    
    constructor(driver){
        super(driver);
        this.#driver = driver;
    }

    usernameField = By.id('ContentPlaceHolder1_txtUserName');
    emailField = By.xpath('//input[@placeholder="A confirmation code will be sent to this address"]');
    confirmEmailField = By.name('ctl00$ContentPlaceHolder1$txtConfirmEmail');
    passwordField = By.className('js-toggle-password form-control form-control-lg py-3');
    confirmPasswordField = By.id('ContentPlaceHolder1_txtPassword2');
    termsCheckbox = By.name('ctl00$ContentPlaceHolder1$MyCheckBox');
    createAnAccountButton = By.id('ContentPlaceHolder1_btnRegister');
    verifyEmailDiv = By.className('alert alert-info');


    //Generating random string
    getRandomString(length) {
        var chars = 'abcdefghijklABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
           result += chars[(Math.floor(Math.random() * chars.length))];
        }
        return result;
     }

    //Locating username field
    getUsernameField(){
        const usernameField = this.#driver.findElement(this.usernameField);
        return usernameField.sendKeys(this.getRandomString(8));
    }

    //Locating email address field
    getEmailAddressField(){
        const emailField = this.#driver.findElement(this.emailField);
        return emailField.sendKeys('user123@example.local');
    }

    //Locating confirm email address field
    getConfirmEmailAddressField(){
        const confirmEmailField = this.#driver.findElement(this.confirmEmailField);
        return confirmEmailField.sendKeys('user123@example.local');
    }

    //Locating password field
    getPasswordField(){
        const passwordField = this.#driver.findElement(this.passwordField);
        return passwordField.sendKeys('user12345');
    }

    //Locating confirm password field
    getConfirmPasswordField(){
        const confirmPasswordField = this.#driver.findElement(this.confirmPasswordField);
        return confirmPasswordField.sendKeys('user12345');
    }

    //Locating terms and conditions checkbox
    async getTermsAndConditionsCheckbox(){
        const termsCheckbox = await this.#driver.findElement(this.termsCheckbox);
        await termsCheckbox.click();
    }

    //Locating create and account button
    async clickOnCreateAnAccountButton(){
        const createAccountButton = await this.#driver.findElement(this.createAnAccountButton);
        await createAccountButton.submit();
    }

    //Locating verify email div
    getVerifyEmailDiv(){
        return this.#driver.findElement(this.verifyEmailDiv);
    }

}