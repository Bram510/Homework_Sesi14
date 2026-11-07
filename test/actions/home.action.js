// Pastikan baris import ini ada di paling atas file home.action.js!
import homePage from '../pageobjects/home.page.js';

export class HomeAction {
    async verifyHomePage() {
        const filterButton = await $(homePage.filterButton);
        const burgerMenuButton = await $(homePage.burgerMenuButton);
        const addToCartButton = await $(homePage.addToCartButton);

        await filterButton.waitForExist({ timeout: 5000 });
        await burgerMenuButton.waitForExist({ timeout: 5000 });
        await addToCartButton.waitForExist({ timeout: 5000 });

        const isFilterDisplayed = await filterButton.isDisplayed();
        const isBurgerDisplayed = await burgerMenuButton.isDisplayed();
        const isCartDisplayed = await addToCartButton.isDisplayed();

        return isFilterDisplayed && isBurgerDisplayed && isCartDisplayed;
    }

    async tapModalSelectorButton() {
        const filterButton = await $(homePage.filterButton);
        await filterButton.click();
    }

    async tapCloseFilterButton() {
        const cancelFilterButton = await $(homePage.cancelFilterButton);
        await cancelFilterButton.click();
    }

    async tapBurgerMenu() {
        const burgerMenuButton = await $(homePage.burgerMenuButton);
        await burgerMenuButton.click();
    }

    async tapLogoutButton() {
        const logoutButton = await $(homePage.logoutButton);
        await logoutButton.click();
    }

    async tapLogoButton() {
        const logoButton = await $(homePage.logoButton);
        await logoButton.click();
    }

    async sortProduct() {
    const sortBtn = await $(homePage.sortButton);
    await sortBtn.click();
    const option = await $(homePage.sortPriceLowToHigh);
    await option.click();
    }


    async tapAddToCartButton() {
        const addToCartButton = await $(homePage.addToCartButton);
        await addToCartButton.click();
    }

    async swipe(direction = 'down') {
        const { height, width } = await driver.getWindowSize();
        const startY = direction === 'down' ? height * 0.8 : height * 0.2;
        const endY = direction === 'down' ? height * 0.2 : height * 0.8;

        await driver.performActions([
            {
                type: 'pointer',
                id: 'pointer1',
                actions: [
                    { type: 'pointerMove', x: width / 2, y: startY, duration: 100 },
                    { type: 'pointerDown', duration: 100 },
                    { type: 'pointerMove', x: width / 2, y: endY, duration: 500 },
                    { type: 'pointerUp', duration: 100 }
                ]
            }
        ]);
    }
}