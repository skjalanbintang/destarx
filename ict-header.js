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
  var KHATAM = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' stroke='%23D9B766' stroke-width='.9'%3E%3Crect x='13.86' y='13.86' width='28.28' height='28.28'/%3E%3Cpath d='M28 8 48 28 28 48 8 28Z'/%3E%3Cpath d='M28 0v8M28 48v8M0 28h8M48 28h8'/%3E%3C/g%3E%3C/svg%3E\")";

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
      ".ict-hdr::before{content:'';position:absolute;inset:0;z-index:-1;background:" + KHATAM + " right center/56px 56px repeat;",
      "opacity:.28;-webkit-mask-image:linear-gradient(90deg,transparent 40%,#000 90%);mask-image:linear-gradient(90deg,transparent 40%,#000 90%)}",
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
