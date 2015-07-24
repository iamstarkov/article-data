import { html, text, match, matchRemoveList, isHeader, isLevel, isParagraph, isImage } from 'commonmark-helpers';
import { compose, trim, split, filterIndexed, join } from 'ramda';
import getTitle from 'get-md-title';
import getDate  from 'get-md-date';
import getDesc  from 'get-md-desc';
import getImage from 'get-md-image';
import moment from 'moment';

// helpers
const range = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;
const trimP  = input => compose(trim, join(''), filterIndexed(range(2, 3)), split(''), trim)(input || '');
const trimH1 = input => compose(trim, join(''), filterIndexed(range(3, 4)), split(''), trim)(input || '');

// matchers
const isTitle = node => isHeader(node) && isLevel(node, 1);
const isEmpty = node => !node.literal;

const extract = (input) => {
  return {
    content: matchRemoveList(input, isEmpty, isTitle)
  };
};

export default (input) => {
  const article = extract(input);
  return {
    title: getTitle(input),
    date: getDate('DD MMM YYYY', 'en', input),
    desc: getDesc(getDate('DD MMM YYYY', 'en', input).text, input),
    image: getImage(input).src ? getImage(input) : { src: '', alt: '' },
    contentText: text(article.content),
    contentHtml: html(article.content),
  };
};
