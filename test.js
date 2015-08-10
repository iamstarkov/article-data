import { equal } from 'assert';
import extract from './index';

const input = `
# title

_24 july 2015_

desc

![alt](http://yo.io/)

content1

content2`;

const article = extract(input, 'DD MMMM YYYY', 'en');

it('title', () =>
  equal(article.title.text, 'title'));

it('date', ()=>
  equal(article.date.text,  '24 july 2015'));

it('desc', ()=>
  equal(article.desc.text,  'desc'));

it('image', () =>
  equal(article.image.src,  'http://yo.io/'));

it('content', () =>
  equal(article.content.html,  `<p>desc</p>
<p><img src="http://yo.io/" alt="alt" /></p>
<p>content1</p>
<p>content2</p>
`));


// TODO: tests for invalid input
