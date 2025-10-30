// render.js
(function () {
  const p = window.PROFILE || {};
  const setText = (sel, text) => { const el = document.querySelector(sel); if (el) el.textContent = text || ""; };
  const setSrc  = (sel, src, alt) => { const el = document.querySelector(sel); if (el) { if (src) el.src = src; if (alt) el.alt = alt; } };

  setSrc('[data-key="avatar"]', p.avatar, `${p.name || "Profile"} photo`);
  setText('[data-key="name"]', p.name);
  setText('[data-key="role"]', p.role);
  setText('[data-key="bio"]',  p.bio);

  const tagsEl = document.querySelector('[data-key="tags"]');
  if (tagsEl && Array.isArray(p.tags)) {
    tagsEl.innerHTML = "";
    p.tags.forEach(t => { const li = document.createElement("li"); li.textContent = t; tagsEl.appendChild(li); });
  }

  const factsEl = document.querySelector('[data-key="facts"]');
  if (factsEl && Array.isArray(p.facts)) {
    factsEl.innerHTML = "";
    p.facts.forEach(({label, value}) => {
      const wrap = document.createElement("div");
      wrap.className = "fact"; wrap.setAttribute("role", "listitem");
      const l = document.createElement("span"); l.className = "label"; l.textContent = label || "";
      const v = document.createElement("span"); v.className = "value"; v.textContent = value || "";
      wrap.append(l, v); factsEl.appendChild(wrap);
    });
  }
})();
