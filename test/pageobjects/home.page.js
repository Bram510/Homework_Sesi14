export class HomePage {
    get filterButton() {
        return 'android=new UiSelector().className("android.widget.ImageView").instance(5)';
    }

    get cancelFilterButton() {
        // Menggunakan teks tombol langsung alih-alih indeks angka agar tidak mudah meleset
        return 'android=new UiSelector().text("Cancel")'; 
    }
    
    get addToCartButton() {
        return 'android=new UiSelector().description("test-ADD TO CART").instance(1)';
    }

    get burgerMenuButton() {
        return 'android=new UiSelector().className("android.widget.ImageView").instance(1)';
    }

    get sortButton() {
    return 'android=new UiSelector().className("android.widget.ImageView").instance(5)'; // sesuaikan index sorting button
    }

    get sortPriceLowToHigh() {
    return 'android=new UiSelector().text("Price (low to high)")';
    }

    get logoutButton() {
        return 'android=new UiSelector().description("test-LOGOUT")';
    }
}

export default new HomePage();