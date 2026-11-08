/* ============================================================
   KONFIGURASI SEKOLAH — satu-satunya fail yang perlu diubah
   untuk menyambungkan ICT HUB ini kepada sekolah anda.
   ------------------------------------------------------------
   Dimuatkan oleh setiap halaman (dan oleh service worker),
   jadi gunakan `self.SITE`, bukan `window.SITE`.
   ============================================================ */
self.SITE = {
  // Identiti sekolah
  nama: "SK Jalan Bintang",
  namaPenuh: "Sekolah Kebangsaan Jalan Bintang",
  ringkas: "SKJB",
  lokasi: "Miri, Sarawak",
  unit: "Unit ICT",
  logo: "./logo-sekolah.png",

  // Firebase — salin dari Firebase Console > Project settings > Your apps (Web).
  // Selagi apiKey kosong, log masuk guru dan data dalam talian tidak berfungsi,
  // tetapi senarai alatan masih dipaparkan.
  firebase: {
    apiKey: "AIzaSyBe7MLww6IPs-TurtVmOJoHVtxgGLJUTbc",
    authDomain: "skjb-icthub.firebaseapp.com",
    projectId: "skjb-icthub",
    storageBucket: "skjb-icthub.firebasestorage.app",
    messagingSenderId: "418727174525",
    appId: "1:418727174525:web:3e3da0c6944058d72fec14",
    measurementId: "G-M5MWVR06R7"
  },

  // Kunci Web Push (Firebase Console > Cloud Messaging > Web Push certificates).
  // Diperlukan untuk notifikasi kelas dalam jadual.html.
  vapidKey: "",

  // URL web app Apps Script (Deploy > New deployment > Web app > /exec).
  appsScript: {
    teachIn: "",       // apps-script/teach-in-drive.gs — simpan slip Teach-In ke Drive
    ekokurikulum: ""   // apps-script/ekokurikulum.gs — rekod e-Kokurikulum
  }
};

self.SITE.firebaseReady = !!self.SITE.firebase.apiKey;
