import { equal } from 'assert';
import extract from './index';

const simple = extract(`
# title

_24 july 2015_

desc

![](http://yo.io/)

content1

content2
`.trim());

it('simple title', ()=> equal(simple.title.text, 'title'));
it('simple date',  ()=> equal(simple.date.text,  '24 july 2015'));
it('simple desc',  ()=> equal(simple.desc.text,  'desc'));
it('simple image', ()=> equal(simple.image.src,  'http://yo.io/'));
