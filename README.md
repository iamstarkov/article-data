# article-data

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Extract data from your markdown article

## Install

    npm install --save article-data

## Usage

```js
import extract from './index';

const input = `
# title

_24 july 2015_

desc

![alt](http://yo.io/)

content1

content2`;

const article = extract(input, 'D MMMM YYYY', 'en');
article.title.text;    // title
article.date.text;     // 24 july 2015
article.desc.text;     // desc
article.image.src;     // http://yo.io/
article.content.html;  // <p>desc</p>
                       // <p><img src="http://yo.io/" alt="" /></p>
                       // <p>content1</p>
                       // <p>content2</p>
```

## API

### extract(input, dateFormat, dateLocale)

Return object `{ title, date, desc, image, content }`.

I hope that all fields have self-explanatory names. Anyway, `desc` and `content` should be explained further: `desc` — first paragraph without date, `content` input without title and date.  All the fields are objects with such fields:

* title, desc, content: `text` and `html`
* date: `text`, `html`, `unix` and `moment`
* image: `alt`, `src` and `html`

Also everything in returned object has `node` field, which is an AST node, see [commonmark API][cmapi].

[cmapi]: https://github.com/jgm/commonmark.js#usage

#### input

*Required*  
Type: `String`

Markdown string.

#### dateFormat

*Required*  
Type: `String`

Momentjs [format][format] for date, e.g. `D MMMM YYYY`.

[format]: http://momentjs.com/docs/#/displaying/format/

#### dateLocale

*Required*  
Type: `String`

One of 83 available in momentjs [locales][i18n], e.g. `en` or `fr`.

[i18n]: http://momentjs.com/docs/#/i18n/

## Related

* [get-md-title][get-md-title] — get title from markdown article
* [get-md-date][get-md-date] — get date from markdown article
* [get-md-desc][get-md-desc] — get content from markdown article
* [get-md-image][get-md-image] — get image from markdown article
* [get-md-content][get-md-content] — get content from markdown article

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[npm-url]: https://npmjs.org/package/article-data
[npm-image]: https://img.shields.io/npm/v/article-data.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/article-data
[travis-image]: https://img.shields.io/travis/iamstarkov/article-data/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/article-data
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/article-data/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/article-data
[depstat-image]: https://david-dm.org/iamstarkov/article-data.svg?style=flat-square


[get-md-title]: https://github.com/iamstarkov/get-md-title
[get-md-date]: https://github.com/iamstarkov/get-md-date
[get-md-desc]: https://github.com/iamstarkov/get-md-desc
[get-md-image]: https://github.com/iamstarkov/get-md-image
[get-md-content]: https://github.com/iamstarkov/get-md-content
