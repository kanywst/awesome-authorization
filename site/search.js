(() => {
  const q = document.getElementById('q');
  const status = document.getElementById('status');
  const empty = document.getElementById('empty');
  const entries = [...document.querySelectorAll('.e')];
  const groups = [...document.querySelectorAll('[data-grp]')];
  const sections = [...document.querySelectorAll('[data-sec]')];
  const tocItems = [...document.querySelectorAll('.toc li[data-for]')];
  const total = entries.length;
  const originals = new Map(entries.map((e) => [e, e.innerHTML]));

  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function highlight(el, re) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const text = node.nodeValue;
      re.lastIndex = 0;
      if (!re.test(text)) continue;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0;
      for (const m of text.matchAll(re)) {
        frag.append(text.slice(last, m.index));
        const mark = document.createElement('mark');
        mark.textContent = m[0];
        frag.append(mark);
        last = m.index + m[0].length;
      }
      frag.append(text.slice(last));
      node.replaceWith(frag);
    }
  }

  function apply(raw) {
    const terms = raw.toLowerCase().split(/\s+/).filter(Boolean);
    const re = terms.length ? new RegExp(terms.map(escRe).join('|'), 'gi') : null;
    let shown = 0;
    for (const e of entries) {
      const hit = terms.every((t) => e.dataset.k.includes(t));
      e.hidden = !hit;
      e.innerHTML = originals.get(e);
      if (hit) {
        shown++;
        if (re) highlight(e, re);
      }
    }
    const counts = new Map();
    for (const g of groups) {
      const n = g.querySelectorAll('.e:not([hidden])').length;
      g.hidden = terms.length > 0 && n === 0;
      if (g.id) counts.set(g.id, n);
    }
    for (const s of sections) {
      const n = s.querySelectorAll('.e:not([hidden])').length;
      s.hidden = terms.length > 0 && n === 0;
      counts.set(s.id, n);
    }
    for (const li of tocItems) {
      const n = counts.get(li.dataset.for) ?? 0;
      li.querySelector(':scope > a .c').textContent = n;
      li.classList.toggle('zero', n === 0);
    }
    empty.hidden = shown > 0;
    status.textContent = terms.length ? `${shown} of ${total} entries match` : `${total} entries`;

    const url = new URL(location.href);
    if (raw.trim()) url.searchParams.set('q', raw.trim());
    else url.searchParams.delete('q');
    history.replaceState(null, '', url);
  }

  let t;
  q.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => apply(q.value), 60);
  });
  q.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') { q.value = ''; apply(''); }
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key !== '/' || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    ev.preventDefault();
    q.focus();
    q.select();
  });

  const initial = new URLSearchParams(location.search).get('q');
  if (initial) { q.value = initial; apply(initial); }

  // Collapse the contents on narrow screens, where it sits above the list.
  const d = document.getElementById('toc-d');
  const narrow = matchMedia('(max-width: 1080px)');
  const sync = () => { d.open = !narrow.matches; };
  sync();
  narrow.addEventListener('change', sync);

  // Mark the section being read in the contents rail.
  const byId = new Map(tocItems.map((li) => [li.dataset.for, li]));
  const io = new IntersectionObserver((list) => {
    for (const en of list) {
      const li = byId.get(en.target.id);
      if (li) li.classList.toggle('here', en.isIntersecting);
    }
  }, { rootMargin: '-10% 0px -70% 0px' });
  sections.forEach((s) => io.observe(s));
})();
