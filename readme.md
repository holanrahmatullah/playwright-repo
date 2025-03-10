# Playwright Setup dan Penggunaan

Dokumen ini berisi panduan untuk menginstal dan menjalankan Playwright.

## 1. Prasyarat
Pastikan Anda memiliki:
- **Node.js** versi terbaru (disarankan >=16)
- **NPM** atau **Yarn**

## 2. Instalasi Playwright
Jalankan perintah berikut untuk menginstal Playwright:

```sh
npm init playwright@latest
```
Atau, jika ingin menginstal secara manual:
```sh
npm install -D @playwright/test
```

Setelah instalasi, jalankan perintah berikut untuk mengunduh browser yang diperlukan:
```sh
npx playwright install
```

## 3. Menjalankan Tes
Untuk menjalankan tes Playwright, gunakan perintah berikut:
```sh
npx playwright test
```

Jika ingin menjalankan dalam UI mode (lebih interaktif):
```sh
npx playwright test --ui
```

## 4. Membuat Tes Baru
Untuk membuat file uji coba baru, buat file di folder `tests/`, misalnya `example.spec.js`, lalu tambahkan kode berikut:
```js
const { test, expect } = require('@playwright/test');

test('Cek judul halaman', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

## 5. Menjalankan Tes di Browser Tertentu
```sh
npx playwright test --browser=chromium  # Untuk Chrome
npx playwright test --browser=firefox   # Untuk Firefox
npx playwright test --browser=webkit    # Untuk Safari
```

## 6. Menjalankan Tes dengan Headed Mode (Mode dengan UI)
```sh
npx playwright test --headed
```

## 7. Menggunakan Debugging
Gunakan opsi berikut untuk debugging:
```sh
npx playwright test --debug
```
Atau dengan `console.log()` untuk melihat output di terminal.

## 8. Menjalankan Tes Secara Paralel
```sh
npx playwright test --workers=4
```

## 9. Menghasilkan Laporan Tes
```sh
npx playwright test --reporter=html
```
Hasil akan tersimpan dalam `playwright-report/index.html`.

---
Sekarang Playwright siap digunakan untuk otomatisasi pengujian! 🚀

