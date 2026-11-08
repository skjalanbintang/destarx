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
  var KHATAM = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%23D9B766' stroke-width='.7' stroke-linejoin='round'%3E%3Crect x='17' y='17' width='30' height='30'/%3E%3Cpath d='M32 10.8 53.2 32 32 53.2 10.8 32Z'/%3E%3Cpath d='M32 22.5 38.6 25.4 41.5 32 38.6 38.6 32 41.5 25.4 38.6 22.5 32 25.4 25.4Z' stroke-opacity='.8'/%3E%3Cpath d='M53.2 32H64M0 32H10.8M32 0V10.8M32 53.2V64' /%3E%3Cpath d='M47 47 64 64M17 47 0 64M47 17 64 0M17 17 0 0' stroke-opacity='.7'/%3E%3Ccircle cx='32' cy='32' r='1.7' stroke-opacity='.9'/%3E%3Cpath d='M64 61.6 66.4 64 64 66.4 61.6 64ZM0 61.6 2.4 64 0 66.4-2.4 64ZM64-2.4 66.4 0 64 2.4 61.6 0ZM0-2.4 2.4 0 0 2.4-2.4 0Z' stroke-opacity='.9'/%3E%3C/g%3E%3C/svg%3E\")";
  var ROSETTE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Ccircle cx='200' cy='200' r='196' fill='%23134032' fill-opacity='.5'/%3E%3Cg fill='none' stroke='%23D9B766' stroke-width='1' stroke-linejoin='round'%3E%3Ccircle cx='200' cy='200' r='194' stroke-width='1.4'/%3E%3Ccircle cx='200' cy='200' r='186' stroke-opacity='.6'/%3E%3Cpath d='M200.0 32.0 226.1 68.6 264.3 44.8 274.4 88.6 318.8 81.2 311.4 125.6 355.2 135.7 331.4 173.9 368.0 200.0 331.4 226.1 355.2 264.3 311.4 274.4 318.8 318.8 274.4 311.4 264.3 355.2 226.1 331.4 200.0 368.0 173.9 331.4 135.7 355.2 125.6 311.4 81.2 318.8 88.6 274.4 44.8 264.3 68.6 226.1 32.0 200.0 68.6 173.9 44.8 135.7 88.6 125.6 81.2 81.2 125.6 88.6 135.7 44.8 173.9 68.6Z'/%3E%3Cpath d='M225.0 74.5 237.5 109.5 271.1 93.6 269.3 130.7 306.4 128.9 290.5 162.5 325.5 175.0 298.0 200.0 325.5 225.0 290.5 237.5 306.4 271.1 269.3 269.3 271.1 306.4 237.5 290.5 225.0 325.5 200.0 298.0 175.0 325.5 162.5 290.5 128.9 306.4 130.7 269.3 93.6 271.1 109.5 237.5 74.5 225.0 102.0 200.0 74.5 175.0 109.5 162.5 93.6 128.9 130.7 130.7 128.9 93.6 162.5 109.5 175.0 74.5 200.0 102.0Z' stroke-opacity='.85'/%3E%3Cpath d='M200.0 112.0 288.0 200.0 200.0 288.0 112.0 200.0Z'/%3E%3Cpath d='M262.2 137.8 262.2 262.2 137.8 262.2 137.8 137.8Z'/%3E%3Ccircle cx='200' cy='200' r='56' stroke-opacity='.8'/%3E%3Cpath d='M200.0 148.0 211.5 172.3 236.8 163.2 227.7 188.5 252.0 200.0 227.7 211.5 236.8 236.8 211.5 227.7 200.0 252.0 188.5 227.7 163.2 236.8 172.3 211.5 148.0 200.0 172.3 188.5 163.2 163.2 188.5 172.3Z'/%3E%3Ccircle cx='200' cy='200' r='9' stroke-opacity='.9'/%3E%3C/g%3E%3Ccircle cx='376.0' cy='200.0' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='362.6' cy='267.4' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='324.5' cy='324.5' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='267.4' cy='362.6' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='200.0' cy='376.0' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='132.6' cy='362.6' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='75.5' cy='324.5' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='37.4' cy='267.4' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='24.0' cy='200.0' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='37.4' cy='132.6' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='75.5' cy='75.5' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='132.6' cy='37.4' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='200.0' cy='24.0' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='267.4' cy='37.4' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='324.5' cy='75.5' r='1.6' fill='%23D9B766' stroke='none'/%3E%3Ccircle cx='362.6' cy='132.6' r='1.6' fill='%23D9B766' stroke='none'/%3E%3C/svg%3E\")";

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
      ".ict-hdr::before{content:'';position:absolute;inset:0;z-index:-1;background:" + ROSETTE + " no-repeat right max(-20px,calc((100vw - 1180px)/2 - 30px)) center/230px auto," + KHATAM + " right center/64px 64px repeat;",
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
