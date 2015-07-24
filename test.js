import { equal } from 'assert';
import { text, html } from 'commonmark-helpers';
import trimTag from 'trim-html-tag';

import { compose, trim, join, trim, filterIndexed, split } from 'ramda';

import extract from './index';
import iamstarkovRaw from './test-fixtures/iamstarkov';
import jsunderhoodRaw from './test-fixtures/jsunderhood';

// utils
const trimP   = input => trimTag('p',  input);
const trimH1  = input => trimTag('h1', input);

const getHtml = compose(trimP, html);


/**
 * ## iamstarkov
 */
const iamstarkov = extract(iamstarkovRaw.raw);

it('iamstarkov :: title.text', ()=> {
  equal(iamstarkov.title.text, text(iamstarkovRaw.title));
});

it('iamstarkov :: date', ()=> {
  equal(iamstarkov.date.text, iamstarkovRaw.date);
});

it('iamstarkov :: desc.text', ()=> {
  equal(iamstarkov.desc.text, text(iamstarkovRaw.desc));
});

it('iamstarkov :: image', ()=> {
  equal(iamstarkov.image.src, iamstarkovRaw.image);
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

it('jsunderhood :: date', ()=> {
  equal(jsunderhood.date.text, jsunderhoodRaw.date);
});

it('jsunderhood :: desc.text', ()=> {
  equal(jsunderhood.desc.text, text(jsunderhoodRaw.desc));
});

it('jsunderhood :: image', ()=> {
  equal(jsunderhood.image.src, jsunderhoodRaw.image);
});

it('jsunderhood :: contentText', ()=> {
  equal(jsunderhood.contentText, text(jsunderhoodRaw.content));
});

it('jsunderhood :: contentHtml', ()=> {
  equal(jsunderhood.contentHtml, html(jsunderhoodRaw.content));
});
