import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { access } from 'node:fs/promises';

let server;
let html;
before(async () => {
  server = await createServer({ server: { middlewareMode: true, watch: null }, appType: 'custom' });
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  html = renderToStaticMarkup(createElement(App));
});
after(async () => { await server?.close(); });

test('portfolio presents the correct owner and the two working project destinations', () => {
  assert.match(html, /Justin Raine Justiza/);
  assert.match(html, /Building useful/);
  assert.equal((html.match(/data-project=/g) || []).length, 2);
  assert.match(html, /href="https:\/\/sagipbayan\.com\/?"/);
  assert.match(html, /href="https:\/\/taskedgeproject\.vercel\.app\/?"/);
  assert.doesNotMatch(html, /Manage Products|Add Product|Your Name|to be supplied/);
});

test('contact links and résumé availability are correct', () => {
  assert.match(html, /href="mailto:justinrainemjustiza@gmail\.com"/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/justin-raine-justiza-3a099a440\/"/);
  assert.match(html, /href="https:\/\/github\.com\/JmRaine"/);
  assert.match(html, /href="\/Justin-Raine-Justiza-CV\.pdf" download/);
  assert.doesNotMatch(html, /href="#"|Résumé coming soon/);
});

test('all five navigation sections and project image files are present', async () => {
  for (const id of ['home', 'projects', 'about', 'skills', 'contact']) assert.ok(html.includes(`id="${id}"`), id);
  for (const file of ['sagipbayan.png', 'taskedge-mobile.png']) {
    assert.ok(html.includes(`/projects/${file}`));
    await access(new URL(`../public/projects/${file}`, import.meta.url));
  }
  await access(new URL('../public/projects/taskedge.png', import.meta.url));
  await access(new URL('../public/Justin-Raine-Justiza-CV.pdf', import.meta.url));
});

test('SagipBayan details identify the MDRRMO and explain the matching purpose', async () => {
  const { projects } = await server.ssrLoadModule('/src/portfolio/data.js');
  const { default: CaseStudy } = await server.ssrLoadModule('/src/portfolio/CaseStudy.jsx');
  const project = projects.find(project => project.id === 'sagipbayan');
  const details = renderToStaticMarkup(createElement(CaseStudy, { project, onClose() {} }));
  assert.equal(project.audience, 'MDRRMO of Jaen, Nueva Ecija.');
  assert.match(project.takeaway, /MDRRMO of Jaen, Nueva Ecija/);
  assert.match(details, /MDRRMO of Jaen, Nueva Ecija/);
  assert.doesNotMatch(details, /Residents and communities/);
  assert.match(details, /aria-label="Close project details"/);
  assert.match(details, /capture-sagipbayan/);
});
