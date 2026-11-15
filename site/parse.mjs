// Turns README.md into the data the site is rendered from. README stays the
// single source of truth; this only understands the shapes awesome-lint allows.

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const slug = (s) =>
  s.toLowerCase().replace(/\\/g, '').replace(/[^\p{L}\p{N} -]/gu, '').replace(/ /g, '-');

// Inline markdown used in descriptions: links, code spans, backslash escapes.
export function inline(md) {
  let out = '';
  let i = 0;
  while (i < md.length) {
    const c = md[i];
    if (c === '\\' && i + 1 < md.length) { out += esc(md[i + 1]); i += 2; continue; }
    if (c === '`') {
      const end = md.indexOf('`', i + 1);
      if (end > i) { out += `<code>${esc(md.slice(i + 1, end))}</code>`; i = end + 1; continue; }
    }
    if (c === '[') {
      const m = /^\[([^\]]+)\]\(([^)\s]+)\)/.exec(md.slice(i));
      if (m) {
        const href = m[2].startsWith('#') ? m[2] : m[2];
        const ext = /^https?:/.test(href) ? ' rel="noopener"' : '';
        out += `<a href="${esc(href)}"${ext}>${inline(m[1])}</a>`;
        i += m[0].length;
        continue;
      }
    }
    out += esc(c);
    i++;
  }
  return out;
}

const plain = (md) => md.replace(/\\(.)/g, '$1').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

// Where a link points, short enough to read at a glance. For hosts that hold
// many unrelated projects, keep the owner (and repo) so the line says something.
function where(url) {
  const u = new URL(url);
  const host = u.hostname.replace(/^www\./, '');
  const seg = u.pathname.split('/').filter(Boolean);
  if (host === 'github.com' && seg.length) return `github.com/${seg.slice(0, 2).join('/')}`;
  if (host === 'medium.com' && seg.length) return `medium.com/${seg[0]}`;
  return host;
}

export function parse(readme) {
  const lines = readme.split('\n');
  const doc = { tagline: '', sections: [] };
  let sec = null;
  let group = null;
  const skip = new Set(['Contents', 'Contributing']);
  let skipping = false;

  for (const line of lines) {
    let m;
    if (!doc.tagline && (m = /^> (.+)/.exec(line))) { doc.tagline = plain(m[1]); continue; }
    if ((m = /^## (.+)/.exec(line))) {
      const title = m[1].trim();
      skipping = skip.has(title);
      if (skipping) { sec = null; continue; }
      sec = { title: plain(title), id: slug(title), intro: '', groups: [] };
      group = { title: null, id: sec.id, intro: '', items: [] };
      sec.groups.push(group);
      doc.sections.push(sec);
      continue;
    }
    if (skipping || !sec) continue;
    if ((m = /^### (.+)/.exec(line))) {
      const title = m[1].trim();
      group = { title: plain(title), id: slug(title), intro: '', items: [] };
      sec.groups.push(group);
      continue;
    }
    if ((m = /^- (?:\[([^\]]+)\]\(([^)\s]+)\)|([^[].*?)) - (.+)$/.exec(line))) {
      const [, linked, url, bare, desc] = m;
      const name = plain(linked ?? bare.trim());
      let host = '';
      if (url && /^https?:/.test(url)) host = where(url);
      group.items.push({ name, url: url ?? null, host, desc: inline(desc), text: plain(desc) });
      continue;
    }
    if (line.trim() && !line.startsWith('-') && !line.startsWith('<') && !line.startsWith('#')) {
      const target = group.items.length || group.title ? group : sec;
      target.intro = (target.intro ? target.intro + ' ' : '') + inline(line.trim());
    }
  }
  // Drop the empty leading group a section gets when it opens with a subheading.
  for (const s of doc.sections) s.groups = s.groups.filter((g) => g.items.length || g.intro);
  return doc;
}
