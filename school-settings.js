/*
 * Tetapan sekolah yang diubah oleh admin di tetapan.html (Firestore: tetapan/sekolah, baca awam).
 * Dibaca melalui REST supaya boleh dipakai dalam skrip biasa dan modul. Jika Firebase belum disediakan
 * atau capaian gagal, nilai terakhir dalam pelayar atau nilai lalai di bawah digunakan.
 *   SchoolSettings.defaults  -> { bilik, lokasi, gantiExtra, gantiFlex, gantiAdmin }
 *   SchoolSettings.get()     -> Promise<tetapan>
 */
(function (g) {
  'use strict';
  var DEF = {
    bilik: ['Dewan Ibnu Khaldun', 'Makmal Komputer', 'Bengkel RBT', 'Bilik Muzik', 'Bilik Mesyuarat'],
    lokasi: ['Padang', 'Makmal Sains', 'Surau Istiqomah'],
    gantiExtra: [], gantiFlex: [], gantiAdmin: []
  };
  var KEY = 'sjb_tetapan_sekolah';
  var KEYS = Object.keys(DEF);
  function clean(o) {
    var out = {};
    KEYS.forEach(function (k) {
      var v = o && Array.isArray(o[k]) ? o[k] : null;
      out[k] = v ? v.map(function (x) { return String(x).trim(); }).filter(Boolean) : DEF[k].slice();
    });
    return out;
  }
  function fromDoc(d) {
    var o = {}, f = (d && d.fields) || {};
    KEYS.forEach(function (k) {
      if (f[k] && f[k].arrayValue) o[k] = (f[k].arrayValue.values || []).map(function (v) { return v.stringValue || ''; });
    });
    return o;
  }
  var p = null;
  function get(force) {
    if (p && !force) return p;
    var site = g.SITE || {}, fb = site.firebase || {};
    p = new Promise(function (resolve) {
      var cached = null;
      try { cached = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
      if (!site.firebaseReady || !fb.projectId) { resolve(clean(cached)); return; }
      var ctl = typeof AbortController === 'function' ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 4000);
      fetch('https://firestore.googleapis.com/v1/projects/' + fb.projectId + '/databases/(default)/documents/tetapan/sekolah',
        { cache: 'no-store', signal: ctl ? ctl.signal : undefined })
        .then(function (r) { if (r.status === 404) return null; if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(function (d) {
          var v = clean(d ? fromDoc(d) : null);
          try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
          resolve(v);
        })
        .catch(function () { resolve(clean(cached)); })
        .then(function () { clearTimeout(timer); });
    });
    return p;
  }
  g.SchoolSettings = { defaults: DEF, get: get, clean: clean };
})(typeof self !== 'undefined' ? self : this);
