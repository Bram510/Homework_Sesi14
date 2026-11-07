import { HomeAction } from '../actions/home.action.js';
import loginAction from '../actions/login.action.js';

describe('Home Page', () => {
    const homeAction = new HomeAction();

    it('verify homepage, scroll down/up, filter and logout', async () => {
        // Login
        await loginAction.login('standard_user', 'secret_sauce');

        // Verify homepage
        await homeAction.verifyHomePage();

        // Scroll
        await homeAction.swipe('down');
        await homeAction.swipe('up');

        // Buka filter, sort item berdasar harga dari rendah ke tinggi
        await homeAction.sortProduct();
        await homeAction.swipe('down');
        await homeAction.swipe('up');

        // Buka Burger Menu lalu Logout
        await homeAction.tapBurgerMenu();
        await homeAction.tapLogoutButton();
    });
});