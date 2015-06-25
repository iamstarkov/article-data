import { html, text, match, matchRemove, isHeader, isLevel, isParagraph, isImage } from 'commonmark-helpers';
import { compose, trim, partial, partialRight, split, filterIndexed, join, apply } from 'ramda';
import moment from 'moment';

// utils
const range = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;

const trimP  = input => compose(trim, join(''), filterIndexed(range(2, 3)), split(''), trim)(input || '');
const trimH1 = input => compose(trim, join(''), filterIndexed(range(3, 4)), split(''), trim)(input || '');

// matchers
const isTitle = node => {
  console.log(node.type, node.level, node.literal)
  return isHeader(node) && isLevel(node, 1)
};
const isEmpty = node => !node.literal;
const isValidDate = input => moment(new Date(input)).isValid();
const isDate = node => node.literal && isValidDate(node.literal);
const isDesc = (node, date) => !text(node).match(date) && isParagraph(node);
const remove = (...matchers) => input => apply(compose, matchers.map(item => partialRight(matchRemove, item)))(input);

const extract = (input) => {
  const titleText = compose(trim,  text, partialRight(match, isTitle))(input);
  const titleHtml = compose(trimH1, html, partialRight(match, isTitle))(input);
  const date = match(input, isDate).literal;
  const sortableDate = new Date(date).getTime();

  /*
  const descText = compose(text, partialRight(match, partialRight(isDesc, date)))(input);
  const descHtml = compose(trimP, html, partialRight(match, partialRight(isDesc, date)))(input);

  */
  const image = (match(input, isImage) || {}).destination || '';

  const contentText = compose(text, remove(isEmpty, isTitle, isDate))(input);
  const contentHtml = compose(html, remove(isEmpty, isTitle, isDate))(input);

  return {
    titleText, titleHtml,
    date, sortableDate,
    /*
    descText, descHtml,
    */
    image,
    contentText, contentHtml
  };
}

export default extract;
