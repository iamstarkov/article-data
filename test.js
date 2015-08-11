import { equal } from 'assert';
import extract from './index';

const input = `
# title

_24 july 2015_

desc

![alt](http://yo.io/)

content1

content2`;

const article = extract(input, 'D MMMM YYYY', 'en');

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

it('invalid empty input', () =>
  equal(extract(), undefined));

const woDate = extract(`
# title

desc

content`);

it('invalid empty woDate title', () =>
  equal(woDate.title.text, 'title'));

it('invalid empty woDate date', () =>
  equal(woDate.date, undefined));

it('invalid empty woDate desc', () =>
  equal(woDate.desc.text, 'desc'));

it('invalid empty woDate content', () =>
  equal(woDate.content.text, 'desc\n\ncontent'));

const woTitle = extract(`
20 december 2015

desc

content`);

it('invalid empty woTitle title', () =>
  equal(woTitle.title, undefined));

it('invalid empty woTitle date', () =>
  equal(woTitle.date.text, '20 december 2015'));

it('invalid empty woTitle desc', () =>
  equal(woTitle.desc.text, 'desc'));

it('invalid empty woTitle content', () =>
  equal(woTitle.content.text, 'desc\n\ncontent'));

const woTitleAndDate = extract(`
desc

content`);

it('invalid empty woTitleAndDate title', () =>
  equal(woTitleAndDate.title, undefined));

it('invalid empty woTitleAndDate date', () =>
  equal(woTitleAndDate.date, undefined));

it('invalid empty woTitleAndDate desc', () =>
  equal(woTitleAndDate.desc.text, 'desc'));

it('invalid empty woTitleAndDate content', () =>
  equal(woTitleAndDate.content.text, 'desc\n\ncontent'));
