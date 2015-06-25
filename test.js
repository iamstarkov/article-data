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

it('iamstarkov :: titleText', ()=> {
  equal(iamstarkov.titleText, text(iamstarkovRaw.title));
});

it('iamstarkov :: titleHtml', ()=> {
  equal(iamstarkov.titleHtml, getHtml(iamstarkovRaw.title));
});

it('iamstarkov :: date', ()=> {
  equal(iamstarkov.date, iamstarkovRaw.date);
});

it('iamstarkov :: sortableDate', ()=> {
  equal(iamstarkov.sortableDate, new Date(iamstarkovRaw.date).getTime());
});

it('iamstarkov :: descText', ()=> {
  equal(iamstarkov.descText, text(iamstarkovRaw.desc));
});

it('iamstarkov :: descHtml', ()=> {
  equal(iamstarkov.descHtml, getHtml(iamstarkovRaw.desc));
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

it('jsunderhood :: titleText', ()=> {
  equal(jsunderhood.titleText, text(jsunderhoodRaw.title));
});

it('jsunderhood :: titleHtml', ()=> {
  equal(jsunderhood.titleHtml, getHtml(jsunderhoodRaw.title));
});

it('jsunderhood :: date', ()=> {
  equal(jsunderhood.date, jsunderhoodRaw.date);
});

it('jsunderhood :: sortableDate', ()=> {
  equal(jsunderhood.sortableDate, new Date(jsunderhoodRaw.date).getTime());
});

it('jsunderhood :: descText', ()=> {
  equal(jsunderhood.descText, text(jsunderhoodRaw.desc));
});

it('jsunderhood :: descHtml', ()=> {
  equal(jsunderhood.descHtml, getHtml(jsunderhoodRaw.desc));
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
