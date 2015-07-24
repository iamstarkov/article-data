import { equal } from 'assert';
import { text, html } from 'commonmark-helpers';

import { compose, trim, join, trim, filterIndexed, split } from 'ramda';

import extract from './index';
import iamstarkovRaw from './test-fixtures/iamstarkov';
import jsunderhoodRaw from './test-fixtures/jsunderhood';

// utils
const range = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;

const trimP   = input => compose(trim, join(''), filterIndexed(range(2, 3)), split(''), trim)(input || '');
const trimH1  = input => compose(trim, join(''), filterIndexed(range(3, 4)), split(''), trim)(input || '');

const getHtml = compose(trimP, html);

/**
 * ## utils
 */
it('utils::trimP', ()=> { equal('trimP', trimP('<p> trimP </p>\n')) });
it('utils::trimH1', ()=> { equal('trimH1', trimH1('<h1> trimH1 </h1>\n')) });

/**
 * ## iamstarkov
 */
const iamstarkov = extract(iamstarkovRaw.raw);

it('iamstarkov :: title.text', ()=> {
  equal(iamstarkov.title.text, text(iamstarkovRaw.title));
});

it('iamstarkov :: title.html', ()=> {
  equal(iamstarkov.title.html, getHtml(iamstarkovRaw.title));
});

it('iamstarkov :: date', ()=> {
  equal(iamstarkov.date.text, iamstarkovRaw.date);
});

it('iamstarkov :: date.sortable', ()=> {
  equal(iamstarkov.date.sortable, new Date(iamstarkovRaw.date).getTime());
});

it('iamstarkov :: desc.text', ()=> {
  equal(iamstarkov.desc.text, text(iamstarkovRaw.desc));
});

it('iamstarkov :: desc.html', ()=> {
  equal(iamstarkov.desc.html, getHtml(iamstarkovRaw.desc));
});

it('iamstarkov :: image', ()=> {
  equal(iamstarkov.image, iamstarkovRaw.image);
});

it('iamstarkov :: contentText', ()=> {
  equal(iamstarkov.contentText, text(iamstarkovRaw.content));
});

it('iamstarkov :: contentHtml', ()=> {
  equal(iamstarkov.contentHtml, html(iamstarkovRaw.content));
});

/**
 * ## jsunderhood
 */
const jsunderhood = extract(jsunderhoodRaw.raw);

it('jsunderhood :: title.text', ()=> {
  equal(jsunderhood.title.text, text(jsunderhoodRaw.title));
});

it('jsunderhood :: title.html', ()=> {
  equal(jsunderhood.title.html, getHtml(jsunderhoodRaw.title));
});

it('jsunderhood :: date', ()=> {
  equal(jsunderhood.date.text, jsunderhoodRaw.date);
});

it('jsunderhood :: date.sortable', ()=> {
  equal(jsunderhood.date.sortable, new Date(jsunderhoodRaw.date).getTime());
});

it('jsunderhood :: desc.text', ()=> {
  equal(jsunderhood.desc.text, text(jsunderhoodRaw.desc));
});

it('jsunderhood :: desc.html', ()=> {
  equal(jsunderhood.desc.html, getHtml(jsunderhoodRaw.desc));
});

it('jsunderhood :: image', ()=> {
  equal(jsunderhood.image, jsunderhoodRaw.image);
});

it('jsunderhood :: contentText', ()=> {
  equal(jsunderhood.contentText, text(jsunderhoodRaw.content));
});

it('jsunderhood :: contentHtml', ()=> {
  equal(jsunderhood.contentHtml, html(jsunderhoodRaw.content));
});
