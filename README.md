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

  _first heading_

* date -> valid date

  _first node, which text is valid date_

* date -> valid date

  _date, but you know, sortable one_

* descHtml, descText -> html, text

  _first paragraph which not contain date_

* image -> path

  _first image_

* contentHtml -> html

  _Whole article without title and date_

## Tests

Take posts from iamstarkov.com and jsunderhood.ru
