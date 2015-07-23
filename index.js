import { html, text, match, matchRemoveList, isHeader, isLevel, isParagraph, isImage } from 'commonmark-helpers';
import { compose, trim, split, filterIndexed, join } from 'ramda';
import getTitle from 'get-md-title';
import moment from 'moment';

// helpers
const range = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;
const trimP  = input => compose(trim, join(''), filterIndexed(range(2, 3)), split(''), trim)(input || '');
const trimH1 = input => compose(trim, join(''), filterIndexed(range(3, 4)), split(''), trim)(input || '');

// matchers
const isTitle = node => isHeader(node) && isLevel(node, 1);
const isDate = node => node.literal && moment(new Date(node.literal)).isValid();
const isDesc = (node, date) => !text(node).match(date) && isParagraph(node);
const isEmpty = node => !node.literal;

const extract = (input) => {
  const date = (match(input, isDate) || {}).literal;
  return {
    date,
    desc: match(input, node => isDesc(node, date)),
    image: (match(input, isImage) || {}).destination,
    content: matchRemoveList(input, isEmpty, isTitle, isDate)
  };
};

export default (input) => {
  const article = extract(input);
  return {
    title: getTitle(input),
    date: article.date,
    sortableDate: new Date(article.date || '').getTime(),
    descText: text(article.desc),
    descHtml: trimP(html(article.desc)),
    image: (article.image || ''),
    contentText: text(article.content),
    contentHtml: html(article.content),
  };
};
