/* Tema Zamrud & Krim — palet Tailwind bersama.
   Muatkan SELEPAS https://cdn.tailwindcss.com.
   Skala "slate" ditukar kepada kelabu hangat bernada hijau supaya semua
   kelas slate-* sedia ada ikut tema tanpa mengubah markup. Hijau/teal/emerald
   disatukan kepada satu zamrud supaya halaman tidak bercampur warna. */
(function () {
  var zamrud = {
    50: '#EEF4EF', 100: '#D9E7DD', 200: '#B4CFBD', 300: '#86B196', 400: '#558F6F',
    500: '#327352', 600: '#225E43', 700: '#1A4C37', 800: '#153D2D', 900: '#0F3024', 950: '#081C15'
  };
  var batu = { // ganti slate
    50: '#FBF8F0', 100: '#F3EEE1', 200: '#E6DFCD', 300: '#D2C9B2', 400: '#A49F8B',
    500: '#7B7C6D', 600: '#5D6259', 700: '#444B44', 800: '#2B3530', 900: '#1A2420', 950: '#111915'
  };
  var emas = {
    50: '#FBF6E9', 100: '#F4E8C8', 200: '#E9D298', 300: '#D9B766', 400: '#C69F45',
    500: '#AC8634', 600: '#8E6C29', 700: '#705422', 800: '#57421D', 900: '#3F3016'
  };
  var biru = { // biru dakwat yang tenang untuk maklumat/tempahan
    50: '#EEF3F6', 100: '#D8E3EA', 200: '#B2C7D5', 300: '#86A6BC', 400: '#5D85A0',
    500: '#416A86', 600: '#33566E', 700: '#2A4659', 800: '#223847', 900: '#1A2B37'
  };
  window.TEMA = { zamrud: zamrud, batu: batu, emas: emas, biru: biru };
  window.tailwind = window.tailwind || {};
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          brand: zamrud, emerald: zamrud, green: zamrud, teal: zamrud,
          slate: batu, gray: batu,
          tech: biru, sky: biru, blue: biru,
          emas: emas, amber: emas
        },
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          heading: ['Marcellus', 'Georgia', 'serif']
        }
      }
    }
  };
})();
