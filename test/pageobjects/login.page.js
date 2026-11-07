export class LoginPage {
    get usernameInput() {
        return 'android=new UiSelector().className("android.widget.EditText").instance(0)';
    }

    get passwordInput() {
        return 'android=new UiSelector().className("android.widget.EditText").instance(1)';
    }

    get loginButton() {
        return 'android=new UiSelector().text("LOGIN")';
    }

    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")';
    }

    get errorMessage() {
        return 'android=new UiSelector().text("Sorry, this user has been locked out.")';
    }
}

export default new LoginPage();