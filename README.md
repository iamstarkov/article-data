# article-data

> Right now in DDD — readme driven development

What is the goal?
— I need this package for bullet proof rendering posts for my blog, jsunderhood and ispeakweb.

Use-cases are:

* rendering posts itself (HTML)
* rendering posts’ list (HTML)
* meta-tags per each post (Text)
* rss (HTML)
* sorting posts Date

Exported methods

* titleHtml, titleText -> html, text

  _first h1_

* image -> path

  _first Image_

* descHtml, descText -> html, text

  _first or Nth root paragraph which is not date_

* date -> Date

  _first root node, which text is valid date_

* contentHtml -> html

  _Whole article without title and date_

## Tests

Take posts from iamstarkov.com and jsunderhood.ru
