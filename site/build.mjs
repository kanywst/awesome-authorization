// Builds the GitHub Pages site from README.md into _site/.
// Usage: node site/build.mjs [outDir]

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { parse } from './parse.mjs';

const SITE = 'https://kanywst.github.io/awesome-authorization/';
const REPO = 'https://github.com/kanywst/awesome-authorization';
const out = process.argv[2] ?? '_site';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const doc = parse(readme);
const css = readFileSync(new URL('./style.css', import.meta.url), 'utf8');
const js = readFileSync(new URL('./search.js', import.meta.url), 'utf8');

let updated = '';
try {
  updated = execFileSync('git', ['log', '-1', '--format=%cs', '--', 'README.md'], { encoding: 'utf8' }).trim();
} catch {}
updated ||= new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const count = (s) => s.groups.reduce((n, g) => n + g.items.length, 0);
const total = doc.sections.reduce((n, s) => n + count(s), 0);

function entry(it) {
  const name = it.url
    ? `<a class="e-name" href="${esc(it.url)}" rel="noopener">${esc(it.name)}</a>`
    : `<span class="e-name">${esc(it.name)}</span>`;
  const host = it.host ? `<span class="e-host">${esc(it.host)}</span>` : '';
  const hay = `${it.name} ${it.text} ${it.host}`.toLowerCase();
  return `<li class="e" data-k="${esc(hay)}"><div class="e-head">${name}${host}</div><p class="e-desc">${it.desc}</p></li>`;
}

function section(s, i) {
  const n = i + 1;
  const parts = [];
  parts.push(
    `<section class="sec" id="${s.id}" data-sec>` +
      `<h2><span class="num">${n}</span><a class="h-link" href="#${s.id}">${esc(s.title)}</a></h2>` +
      (s.intro ? `<p class="intro">${s.intro}</p>` : ''),
  );
  let sub = 0;
  for (const g of s.groups) {
    if (g.title) {
      sub++;
      parts.push(
        `<div class="grp" id="${g.id}" data-grp>` +
          `<h3><span class="num">${n}.${sub}</span><a class="h-link" href="#${g.id}">${esc(g.title)}</a></h3>` +
          (g.intro ? `<p class="intro">${g.intro}</p>` : ''),
      );
    } else {
      parts.push(`<div class="grp" data-grp>`);
    }
    parts.push(`<ul class="entries">${g.items.map(entry).join('')}</ul></div>`);
  }
  parts.push('</section>');
  return parts.join('\n');
}

function toc() {
  return doc.sections
    .map((s, i) => {
      const n = i + 1;
      let sub = 0;
      const subs = s.groups
        .filter((g) => g.title)
        .map((g) => {
          sub++;
          return `<li data-for="${g.id}"><a href="#${g.id}"><span class="num">${n}.${sub}</span><span class="t">${esc(g.title)}</span><span class="c">${g.items.length}</span></a></li>`;
        })
        .join('');
      return (
        `<li data-for="${s.id}"><a href="#${s.id}"><span class="num">${n}</span><span class="t">${esc(s.title)}</span><span class="c">${count(s)}</span></a>` +
        (subs ? `<ol>${subs}</ol>` : '') +
        '</li>'
      );
    })
    .join('');
}

const title = 'Awesome Authorization: policy engines, standards, and access control';
const description = `A maintained list of ${total} authorization resources: policy engines (OPA, Cedar, OpenFGA, SpiceDB), Zanzibar and ReBAC, OpenID AuthZEN, OAuth, access control models, and how companies build authorization.`;

const ld = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Awesome Authorization',
  description,
  url: SITE,
  dateModified: updated,
  license: 'https://creativecommons.org/publicdomain/zero/1.0/',
  isBasedOn: REPO,
};

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE}">
<meta property="og:type" content="website">
<meta property="og:title" content="Awesome Authorization">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${SITE}">
<meta name="twitter:card" content="summary">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" rx="2" fill="#0b46c2"/><path d="M4 8.5l2.5 2.5L12 5.5" stroke="#fff" stroke-width="2" fill="none"/></svg>')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans+Condensed:wght@600&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>${css}</style>
</head>
<body>
<a class="skip" href="#list">Skip to the list</a>
<div class="wrap">
<header class="front">
  <dl class="meta">
    <dt>Entries</dt><dd>${total}</dd>
    <dt>Updated</dt><dd><time datetime="${updated}">${updated}</time></dd>
    <dt>Source</dt><dd><a href="${REPO}">kanywst/awesome-authorization</a></dd>
    <dt>License</dt><dd><a href="${REPO}/blob/main/LICENSE">CC0 1.0</a></dd>
  </dl>
  <h1>Awesome Authorization</h1>
  <p class="tagline">${esc(doc.tagline)} Policy engines, standards, managed services, access control models, and write-ups from teams that built it.</p>
  <form class="find" role="search" action="" onsubmit="return false">
    <label for="q">Filter the list</label>
    <div class="find-row">
      <input id="q" name="q" type="search" autocomplete="off" spellcheck="false" placeholder="cedar, zanzibar, oauth, rfc…">
      <kbd aria-hidden="true">/</kbd>
    </div>
    <p class="status" id="status" aria-live="polite">${total} entries</p>
  </form>
</header>
<nav class="toc" aria-label="Contents">
  <details open id="toc-d"><summary>Contents</summary>
  <ol>${toc()}</ol>
  </details>
</nav>
<main id="list">
${doc.sections.map(section).join('\n')}
<p class="empty" id="empty" hidden>Nothing matches. Try a product name, a spec, or a model such as ReBAC.</p>
</main>
<footer class="foot">
  <p>This page is built from <a href="${REPO}/blob/main/README.md">README.md</a>. To suggest a link, read the <a href="${REPO}/blob/main/CONTRIBUTING.md">contribution guidelines</a> and open a pull request.</p>
</footer>
</div>
<script>${js}</script>
</body>
</html>
`;

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/index.html`, html);
writeFileSync(`${out}/.nojekyll`, '');
writeFileSync(`${out}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${SITE}</loc><lastmod>${updated}</lastmod></url></urlset>\n`,
);
console.log(`built ${out}/index.html: ${total} entries in ${doc.sections.length} sections, updated ${updated}`);
