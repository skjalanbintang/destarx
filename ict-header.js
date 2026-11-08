/* ============================================================
   ICT HUB — Header Bersama Untuk Semua Tool
   ------------------------------------------------------------
   Cara guna dalam mana-mana tool (letak dalam <head>):

     <script src="ict-header.js"></script>

   Kemudian letak elemen ini di bahagian paling atas <body>:

     <ict-header
       icon="fa-solid fa-calendar-days"
       title="Nama Tool"
       subtitle="Penerangan ringkas tool.">
     </ict-header>

   - icon     : kelas ikon Font Awesome 6 (font dimuatkan automatik)
   - title    : tajuk tool
   - subtitle : penerangan ringkas (pilihan)
   - back     : URL butang kembali (pilihan, lalai "./" iaitu ICT HUB)

   Nama guru dipaparkan automatik daripada sesi log masuk ICT HUB.
   Tool boleh menetapkan nama/peranan sendiri dengan:
     ICTHeader.setUser("Nama Guru", "ADMIN");
   atau dengan menukar teks elemen #userName dan #userRole.

   Header ini sengaja TIDAK mempunyai butang log keluar.
   ============================================================ */
(function () {
  "use strict";

  var FA_HREF = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  var SITE = self.SITE || {};
  var EYEBROW = (SITE.nama || "Sekolah") + ", ICT Hub";
  var FONT_HREF = "https://fonts.googleapis.com/css2?family=Marcellus&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
  var KHATAM = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Cg fill='none' stroke='%23D9B766' stroke-width='.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M0 24H30L42 36H66L78 24H96'/%3E%3Cpath d='M0 72H18L30 60H54L66 72H96'/%3E%3Cpath d='M48 0V36M48 96V60'/%3E%3Ccircle cx='30' cy='24' r='2.2'/%3E%3Ccircle cx='78' cy='24' r='2.2'/%3E%3Ccircle cx='42' cy='36' r='2.2'/%3E%3Ccircle cx='66' cy='36' r='2.2'/%3E%3Ccircle cx='48' cy='36' r='1.6'/%3E%3Ccircle cx='18' cy='72' r='2.2'/%3E%3Ccircle cx='66' cy='72' r='2.2'/%3E%3Ccircle cx='30' cy='60' r='2.2'/%3E%3Ccircle cx='54' cy='60' r='2.2'/%3E%3Ccircle cx='48' cy='60' r='1.6'/%3E%3Crect x='13' y='43' width='10' height='10' rx='1'/%3E%3Crect x='16' y='46' width='4' height='4' stroke-opacity='.7'/%3E%3Cpath d='M15 43v-3M18 43v-3M21 43v-3M15 53v3M18 53v3M21 53v3M13 45h-3M13 51h-3M23 45h3M23 51h3' stroke-opacity='.8'/%3E%3Cpath d='M88.0 50.0 84.0 56.9 76.0 56.9 72.0 50.0 76.0 43.1 84.0 43.1Z' stroke-opacity='.85'/%3E%3Ccircle cx='80' cy='50' r='1.4' fill='%23D9B766' stroke='none'/%3E%3Cpath d='M72 50h-6M88 50h8' stroke-opacity='.6'/%3E%3C/g%3E%3Cg fill='%23D9B766' fill-opacity='.7'%3E%3Ccircle cx='6' cy='6' r='.9'/%3E%3Ccircle cx='90' cy='90' r='.9'/%3E%3Ccircle cx='90' cy='6' r='.9'/%3E%3Ccircle cx='6' cy='90' r='.9'/%3E%3C/g%3E%3C/svg%3E\")";
  var ROSETTE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='196' fill='%23134032' fill-opacity='.5'/%3E%3Cg fill='none' stroke='%23D9B766' stroke-width='1' stroke-linejoin='round' stroke-linecap='round'%3E%3Ccircle cx='200' cy='200' r='194' stroke-width='1.4'/%3E%3Cg stroke-opacity='.7'%3E%3Cpath d='M390.0 200.0L378.0 200.0'/%3E%3Cpath d='M389.3 216.6L383.3 216.0'/%3E%3Cpath d='M387.1 233.0L381.2 232.0'/%3E%3Cpath d='M383.5 249.2L377.7 247.6'/%3E%3Cpath d='M378.5 265.0L372.9 262.9'/%3E%3Cpath d='M372.2 280.3L366.8 277.8'/%3E%3Cpath d='M364.5 295.0L354.2 289.0'/%3E%3Cpath d='M355.6 309.0L350.7 305.5'/%3E%3Cpath d='M345.5 322.1L341.0 318.3'/%3E%3Cpath d='M334.4 334.4L330.1 330.1'/%3E%3Cpath d='M322.1 345.5L318.3 341.0'/%3E%3Cpath d='M309.0 355.6L305.5 350.7'/%3E%3Cpath d='M295.0 364.5L289.0 354.2'/%3E%3Cpath d='M280.3 372.2L277.8 366.8'/%3E%3Cpath d='M265.0 378.5L262.9 372.9'/%3E%3Cpath d='M249.2 383.5L247.6 377.7'/%3E%3Cpath d='M233.0 387.1L232.0 381.2'/%3E%3Cpath d='M216.6 389.3L216.0 383.3'/%3E%3Cpath d='M200.0 390.0L200.0 378.0'/%3E%3Cpath d='M183.4 389.3L184.0 383.3'/%3E%3Cpath d='M167.0 387.1L168.0 381.2'/%3E%3Cpath d='M150.8 383.5L152.4 377.7'/%3E%3Cpath d='M135.0 378.5L137.1 372.9'/%3E%3Cpath d='M119.7 372.2L122.2 366.8'/%3E%3Cpath d='M105.0 364.5L111.0 354.2'/%3E%3Cpath d='M91.0 355.6L94.5 350.7'/%3E%3Cpath d='M77.9 345.5L81.7 341.0'/%3E%3Cpath d='M65.6 334.4L69.9 330.1'/%3E%3Cpath d='M54.5 322.1L59.0 318.3'/%3E%3Cpath d='M44.4 309.0L49.3 305.5'/%3E%3Cpath d='M35.5 295.0L45.8 289.0'/%3E%3Cpath d='M27.8 280.3L33.2 277.8'/%3E%3Cpath d='M21.5 265.0L27.1 262.9'/%3E%3Cpath d='M16.5 249.2L22.3 247.6'/%3E%3Cpath d='M12.9 233.0L18.8 232.0'/%3E%3Cpath d='M10.7 216.6L16.7 216.0'/%3E%3Cpath d='M10.0 200.0L22.0 200.0'/%3E%3Cpath d='M10.7 183.4L16.7 184.0'/%3E%3Cpath d='M12.9 167.0L18.8 168.0'/%3E%3Cpath d='M16.5 150.8L22.3 152.4'/%3E%3Cpath d='M21.5 135.0L27.1 137.1'/%3E%3Cpath d='M27.8 119.7L33.2 122.2'/%3E%3Cpath d='M35.5 105.0L45.8 111.0'/%3E%3Cpath d='M44.4 91.0L49.3 94.5'/%3E%3Cpath d='M54.5 77.9L59.0 81.7'/%3E%3Cpath d='M65.6 65.6L69.9 69.9'/%3E%3Cpath d='M77.9 54.5L81.7 59.0'/%3E%3Cpath d='M91.0 44.4L94.5 49.3'/%3E%3Cpath d='M105.0 35.5L111.0 45.8'/%3E%3Cpath d='M119.7 27.8L122.2 33.2'/%3E%3Cpath d='M135.0 21.5L137.1 27.1'/%3E%3Cpath d='M150.8 16.5L152.4 22.3'/%3E%3Cpath d='M167.0 12.9L168.0 18.8'/%3E%3Cpath d='M183.4 10.7L184.0 16.7'/%3E%3Cpath d='M200.0 10.0L200.0 22.0'/%3E%3Cpath d='M216.6 10.7L216.0 16.7'/%3E%3Cpath d='M233.0 12.9L232.0 18.8'/%3E%3Cpath d='M249.2 16.5L247.6 22.3'/%3E%3Cpath d='M265.0 21.5L262.9 27.1'/%3E%3Cpath d='M280.3 27.8L277.8 33.2'/%3E%3Cpath d='M295.0 35.5L289.0 45.8'/%3E%3Cpath d='M309.0 44.4L305.5 49.3'/%3E%3Cpath d='M322.1 54.5L318.3 59.0'/%3E%3Cpath d='M334.4 65.6L330.1 69.9'/%3E%3Cpath d='M345.5 77.9L341.0 81.7'/%3E%3Cpath d='M355.6 91.0L350.7 94.5'/%3E%3Cpath d='M364.5 105.0L354.2 111.0'/%3E%3Cpath d='M372.2 119.7L366.8 122.2'/%3E%3Cpath d='M378.5 135.0L372.9 137.1'/%3E%3Cpath d='M383.5 150.8L377.7 152.4'/%3E%3Cpath d='M387.1 167.0L381.2 168.0'/%3E%3Cpath d='M389.3 183.4L383.3 184.0'/%3E%3C/g%3E%3Ccircle cx='200' cy='200' r='172' stroke-opacity='.5' stroke-dasharray='2 5'/%3E%3Cellipse cx='200' cy='200' rx='168' ry='62' transform='rotate%280 200 200%29'/%3E%3Cellipse cx='200' cy='200' rx='168' ry='62' transform='rotate%2860 200 200%29'/%3E%3Cellipse cx='200' cy='200' rx='168' ry='62' transform='rotate%28120 200 200%29'/%3E%3Cpath d='M296.0 200.0 248.0 283.1 152.0 283.1 104.0 200.0 152.0 116.9 248.0 116.9Z' stroke-opacity='.85'/%3E%3Cpath d='M283.1 248.0L319.5 269.0L313.0 301.7' stroke-opacity='.8'/%3E%3Ccircle cx='313.0' cy='301.7' r='3.2' fill='%23134032'/%3E%3Cpath d='M200.0 296.0L200.0 338.0L168.4 348.7' stroke-opacity='.8'/%3E%3Ccircle cx='168.4' cy='348.7' r='3.2' fill='%23134032'/%3E%3Cpath d='M116.9 248.0L80.5 269.0L55.4 247.0' stroke-opacity='.8'/%3E%3Ccircle cx='55.4' cy='247.0' r='3.2' fill='%23134032'/%3E%3Cpath d='M116.9 152.0L80.5 131.0L87.0 98.3' stroke-opacity='.8'/%3E%3Ccircle cx='87.0' cy='98.3' r='3.2' fill='%23134032'/%3E%3Cpath d='M200.0 104.0L200.0 62.0L231.6 51.3' stroke-opacity='.8'/%3E%3Ccircle cx='231.6' cy='51.3' r='3.2' fill='%23134032'/%3E%3Cpath d='M283.1 152.0L319.5 131.0L344.6 153.0' stroke-opacity='.8'/%3E%3Ccircle cx='344.6' cy='153.0' r='3.2' fill='%23134032'/%3E%3Ccircle cx='200' cy='200' r='30' stroke-opacity='.8'/%3E%3Ccircle cx='200' cy='200' r='14'/%3E%3C/g%3E%3Cg fill='%23D9B766'%3E%3Ccircle cx='200' cy='200' r='6'/%3E%3C/g%3E%3Ccircle cx='328.7' cy='239.9' r='4.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='139.4' cy='52.7' r='4.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='204.5' cy='299.6' r='4.6' fill='%23D9B766' stroke='none'/%3E%3C/svg%3E\")";

  function ensureLink(test, href) {
    var has = Array.prototype.some.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return test.test(l.href || "");
    });
    if (has) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    (document.head || document.documentElement).appendChild(link);
  }
  function ensureFontAwesome() { ensureLink(/font-?awesome/i, FA_HREF); }
  function ensureFonts() { ensureLink(/family=Marcellus/i, FONT_HREF); }

  function ensureStyles() {
    if (document.getElementById("ict-header-style")) return;
    var css = [
      "ict-header{display:block;position:relative;z-index:30}",
      ".ict-hdr{position:relative;isolation:isolate;overflow:hidden;background:#0F3024;color:#F4EEDD;",
      "padding:22px max(20px,calc((100vw - 1180px)/2)) 24px;border-bottom:3px solid #C9A55A;",
      "font-family:'Plus Jakarta Sans',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;",
      "box-sizing:border-box;width:100%}",
      ".ict-hdr{background:radial-gradient(ellipse 55% 160% at 90% 50%,#1B5240 0%,#134032 40%,#0C281E 100%);box-shadow:inset 0 -9px 0 #0C281E,inset 0 -9.6px 0 rgba(217,183,102,.35)}",
      ".ict-hdr::before{content:'';position:absolute;inset:0;z-index:-1;background:" + ROSETTE + " no-repeat right max(-20px,calc((100vw - 1180px)/2 - 30px)) center/230px auto," + KHATAM + " right center/96px 96px repeat;",
      "opacity:.5;-webkit-mask-image:linear-gradient(90deg,transparent 40%,#000 90%);mask-image:linear-gradient(90deg,transparent 40%,#000 90%)}",
      ".ict-hdr *{box-sizing:border-box}",
      ".ict-hdr-inner{display:flex;align-items:center;justify-content:space-between;gap:16px}",
      ".ict-hdr-brand{display:flex;align-items:center;gap:14px;min-width:0}",
      ".ict-hdr-back{width:40px;height:40px;border-radius:50%;border:1px solid rgba(244,238,221,.28);background:transparent;",
      "color:#F4EEDD;font-size:15px;display:grid;place-items:center;flex:0 0 auto;cursor:pointer;text-decoration:none;",
      "transition:border-color .15s ease,background .15s ease}",
      ".ict-hdr-back:hover{border-color:#D9B766;background:rgba(244,238,221,.06)}",
      ".ict-hdr-back:focus-visible{outline:2px solid #D9B766;outline-offset:2px}",
      ".ict-hdr-icon{width:50px;height:50px;border-radius:50%;background:#F4EEDD;color:#1A4C37;display:grid;",
      "place-items:center;font-size:20px;flex:0 0 auto;box-shadow:0 0 0 1px #D9B766,0 0 0 5px rgba(217,183,102,.12)}",
      ".ict-hdr-text{min-width:0}",
      ".ict-hdr-eyebrow{font-size:12px;font-weight:600;letter-spacing:.02em;color:#D9B766;margin:0;line-height:1.4}",
      ".ict-hdr-title{margin:3px 0 4px;font-family:Marcellus,Georgia,'Times New Roman',serif;font-weight:400;",
      "font-size:clamp(23px,3.6vw,32px);line-height:1.15;color:#F7F2E3;letter-spacing:0;text-transform:none}",
      ".ict-hdr-sub{margin:0;color:rgba(244,238,221,.75);font-size:13.5px;line-height:1.5;max-width:62ch}",
      ".ict-hdr-user{text-align:right;flex:0 0 auto;max-width:40%;padding-left:16px;border-left:1px solid rgba(217,183,102,.3)}",
      ".ict-hdr-user strong{display:block;font-size:14px;font-weight:700;color:#F7F2E3;white-space:nowrap;",
      "overflow:hidden;text-overflow:ellipsis}",
      ".ict-hdr-user small{display:block;font-size:11px;font-weight:600;color:#D9B766;letter-spacing:.02em;margin-top:2px}",
      ".ict-hdr-user.is-empty{display:none}",
      "@media(max-width:850px){.ict-hdr{padding:18px 16px 20px}.ict-hdr-inner{align-items:flex-start}.ict-hdr-user{display:none}}",
      "@media(max-width:520px){.ict-hdr-icon{display:none}.ict-hdr-sub{font-size:12px}}",
      "@media print{ict-header{display:none!important}}"
    ].join("");
    var style = document.createElement("style");
    style.id = "ict-header-style";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c];
    });
  }

  function goBack(fallback) {
    var sameOriginReferrer = false;
    try {
      sameOriginReferrer = !!document.referrer && new URL(document.referrer).origin === location.origin;
    } catch (e) {}
    if (sameOriginReferrer && history.length > 1) history.back();
    else location.href = fallback || "./";
  }

  function refreshUserBox() {
    var name = document.getElementById("userName");
    var box = document.querySelector(".ict-hdr-user");
    if (!name || !box) return;
    var t = (name.textContent || "").trim();
    box.classList.toggle("is-empty", !t || t === "-");
  }

  // Baca nama pengguna daripada sesi Firebase (berfungsi untuk semua versi SDK).
  function readFirebaseUser(cb) {
    try {
      var req = indexedDB.open("firebaseLocalStorageDb");
      req.onerror = function () { cb(null); };
      req.onsuccess = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains("firebaseLocalStorage")) { db.close(); return cb(null); }
        var all = db.transaction("firebaseLocalStorage", "readonly").objectStore("firebaseLocalStorage").getAll();
        all.onsuccess = function () {
          var hit = (all.result || []).find(function (r) {
            return r && /^firebase:authUser:.*:\[DEFAULT\]$/.test(r.fbase_key || "");
          });
          db.close();
          cb(hit && hit.value ? hit.value : null);
        };
        all.onerror = function () { db.close(); cb(null); };
      };
    } catch (e) { cb(null); }
  }

  class IctHeader extends HTMLElement {
    connectedCallback() {
      if (this._rendered) return;
      this._rendered = true;
      ensureStyles();
      ensureFontAwesome();
      ensureFonts();

      var icon = this.getAttribute("icon") || "fa-solid fa-toolbox";
      var title = this.getAttribute("title") || document.title || "Tool ICT";
      var sub = this.getAttribute("subtitle") || "";
      var back = this.getAttribute("back") || "./";
      // Elak tooltip "title" pada keseluruhan header.
      this.removeAttribute("title");

      this.innerHTML =
        '<header class="ict-hdr">' +
          '<div class="ict-hdr-inner">' +
            '<div class="ict-hdr-brand">' +
              '<a class="ict-hdr-back" href="' + esc(back) + '" title="Kembali ke ICT Hub" aria-label="Kembali ke ICT Hub">' +
                '<i class="fa-solid fa-arrow-left"></i></a>' +
              '<div class="ict-hdr-icon"><i class="' + esc(icon) + '"></i></div>' +
              '<div class="ict-hdr-text">' +
                '<p class="ict-hdr-eyebrow">' + esc(EYEBROW) + '</p>' +
                '<h1 class="ict-hdr-title">' + esc(title) + '</h1>' +
                (sub ? '<p class="ict-hdr-sub">' + esc(sub) + '</p>' : '') +
              '</div>' +
            '</div>' +
            '<div class="ict-hdr-user is-empty">' +
              '<strong id="userName"></strong>' +
              '<small id="userRole"></small>' +
            '</div>' +
          '</div>' +
        '</header>';

      var backEl = this.querySelector(".ict-hdr-back");
      backEl.addEventListener("click", function (e) { e.preventDefault(); goBack(back); });

      // Pantau perubahan nama yang dibuat oleh tool sendiri.
      var nameEl = this.querySelector("#userName");
      new MutationObserver(refreshUserBox).observe(nameEl, { childList: true, characterData: true, subtree: true });

      // Isi nama daripada sesi ICT HUB jika tool belum menetapkannya.
      readFirebaseUser(function (u) {
        if (!u || (nameEl.textContent || "").trim()) return;
        nameEl.textContent = u.displayName || u.email || "";
        var role = document.getElementById("userRole");
        if (role && !role.textContent.trim()) role.textContent = "Guru";
      });
    }
  }

  if (!customElements.get("ict-header")) customElements.define("ict-header", IctHeader);

  window.ICTHeader = {
    setUser: function (name, role) {
      var n = document.getElementById("userName");
      var r = document.getElementById("userRole");
      if (n) n.textContent = name || "";
      if (r) r.textContent = role || "";
      refreshUserBox();
    },
    clearUser: function () { this.setUser("", ""); }
  };
})();
