import { html, text, match, matchRemoveList, isHeader, isLevel } from 'commonmark-helpers';
import getTitle from 'get-md-title';
import getDate  from 'get-md-date';
import getDesc  from 'get-md-desc';
import getImage from 'get-md-image';
import moment from 'moment';

// matchers
const isTitle = node => isHeader(node) && isLevel(node, 1);
const isEmpty = node => !node.literal;

const extract = (input) => {
  return {
    content: matchRemoveList(input, isEmpty, isTitle)
  };
};

// что такое контент?
// это статья без нод заголовка, дескрпшена и ноды содержащей дату

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
