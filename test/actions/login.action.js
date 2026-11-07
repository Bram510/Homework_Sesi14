import loginPage from '../pageobjects/login.page.js';

export class LoginAction {
    async isOnLoginPage() {
        const usernameField = await $(loginPage.usernameInput);
        await usernameField.waitForExist({ timeout: 10000 });
        return await usernameField.isDisplayed();
    }

    async login(username, password) {
        const usernameField = await $(loginPage.usernameInput);
        const passwordField = await $(loginPage.passwordInput);
        const loginButton = await $(loginPage.loginButton);

        await usernameField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();
    }

    async waitForProducts() {
        const productsTitle = await $(loginPage.productsTitle);
        await productsTitle.waitForExist({ timeout: 10000 });
        return await productsTitle.isDisplayed();
    }

    async getErrorMessage() {
    const errorElement = await $(loginPage.errorMessage);
    await errorElement.waitForExist({ timeout: 5000 });
    return await errorElement.isDisplayed();
}

}

export default new LoginAction();