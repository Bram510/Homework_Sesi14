class AppHelper {
    async closeApp() {
        try {
            await driver.terminateApp('com.swaglabsmobileapp');
        } catch (e) {
            // Abaikan jika sudah tertutup
        }
    }

    async launchApp() {
        // Tutup dulu aplikasinya secara paksa agar bersih dari sesi sebelumnya
        try {
            await driver.terminateApp('com.swaglabsmobileapp');
        } catch (e) {
            // Lanjutkan jika belum terbuka
        }
        // Buka kembali aplikasi dari awal (ke halaman login)
        await driver.activateApp('com.swaglabsmobileapp');
    }

    async resetApp() {
        await driver.reloadSession();
    }
}

export default new AppHelper();