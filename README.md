# article-data

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Extract data from your markdown article

What is the goal?  
— I need this package for bullet proof rendering posts for my blog, jsunderhood and ispeakweb. And obviously to get rid off Jekyll.

Use-cases:

* rendering posts itself (HTML)
* rendering posts’ list (HTML)
* meta-tags per each post (Text)
* rss (HTML)
* sorting posts by date

## Install

    npm install --save article-data

## Usage

```js
var extract = require('article-data');
var raw = getYourMarkdownArticleHere();

var article = extract(raw);

console.log(article);
  // {
  //   titleText, titleHtml,
  //   date, sortableDate,
  //   descText, descHtml,
  //   image,
  //   contentText, contentHtml
  // }
```

Take a look into [tests][t].

[t]: https://github.com/iamstarkov/article-data/blob/master/test.js
## API

### default extract(input)

Return object with article’s data:

* `titleText`, `titleHtml` — article’s title _in text and HTML_
* `date` — content of first node, which contain [valid date][valid-date]. So it should be in English.
* `sortableDate` — the same as `date` but `getTime()`;
* `descText`, `descHtml` — first `Paragraph`, which not contain date _in text and HTML_.
* `image` — `src` for first image in the article.
* `contentText`, `contentHtml` — article itself without title and date _in text and HTML_.

[valid-date]: http://momentjs.com/docs/#/parsing/is-valid/

##### input

Type: 'String', your markdown article.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)


[npm-url]: https://npmjs.org/package/article-data
[npm-image]: https://img.shields.io/npm/v/article-data.svg

[travis-url]: https://travis-ci.org/iamstarkov/article-data
[travis-image]: https://img.shields.io/travis/iamstarkov/article-data.svg

[coveralls-url]: https://coveralls.io/r/iamstarkov/article-data
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/article-data.svg

[depstat-url]: https://david-dm.org/iamstarkov/article-data
[depstat-image]: https://david-dm.org/iamstarkov/article-data.svg

[depstat-dev-url]: https://david-dm.org/iamstarkov/article-data
[depstat-dev-image]: https://david-dm.org/iamstarkov/article-data/dev-status.svg
