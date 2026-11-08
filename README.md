# ICT Hub SK Jalan Bintang

Hub aplikasi guru: jadual waktu, guru ganti, kehadiran kelas (QR), tempahan bilik khas, aktiviti sekolah, e-Kokurikulum, eRPH dan OPR.
Diasaskan daripada [skagamamiri/tools](https://github.com/skagamamiri/tools) dan diberi tema baharu Zamrud & Krim.

## Melancarkan di GitHub Pages

1. Settings > Pages > Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
2. Laman akan tersedia di `https://skjalanbintang.github.io/destarx/`.

Tanpa Firebase, hub sudah boleh dibuka dan senarai alatan dipaparkan. Log masuk guru, kalendar aktiviti dan penyimpanan rekod memerlukan langkah di bawah.

## Menyambungkan Firebase sekolah

1. Cipta projek baharu di [Firebase Console](https://console.firebase.google.com/).
2. Authentication > Sign-in method: hidupkan **Google**. Tambah `skjalanbintang.github.io` dalam Authorized domains.
3. Firestore Database: cipta pangkalan data, kemudian salin seluruh kandungan `firestore.rules` ke tab Rules dan tekan Publish.
4. Project settings > Your apps > Web: salin `firebaseConfig` ke dalam `site-config.js`.
5. Dalam Firestore, cipta koleksi `teachers` dengan dokumen ID = e-mel DELIMa anda dan medan `active: true`, `role: "admin"`.
   Selepas itu, guru lain didaftarkan melalui Panel Admin.

## Apps Script (pilihan)

- `apps-script/teach-in-drive.gs` menyimpan slip Teach-In ke Google Drive.
- `apps-script/ekokurikulum.gs` menyimpan rekod e-Kokurikulum ke Google Sheet.

Isi `PROJECT_ID` (dan `SHEET_ID`) di bahagian atas setiap fail, deploy sebagai Web app, kemudian masukkan URL `/exec` ke `appsScript` dalam `site-config.js`.

## Data yang perlu ditukar kepada data sekolah ini

- `jadual.html` — jadual waktu guru dan kelas (`VERSION_DATA`).
- `ganti.html` — senarai pentadbir dan guru fleksibel lalai.
- `kehadiran-data.js`, `tempahan.html`, `aktiviti.html` — senarai bilik khas.
- `erph.html` — minggu persekolahan dan cuti.
- `assets/opr-templat-*.jpg` — gambar contoh templat OPR.
- `assets/sekolah.jpg` — gambar sekolah untuk latar OPR (tambah sendiri).
