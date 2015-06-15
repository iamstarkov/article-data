import { node, html, text, match, matchRemove, isHeader, isParagraph, isImage } from 'commonmark-helpers';
import { compose, trim, partial, partialRight, split, filterIndexed, join } from 'ramda';
import moment from 'moment';

// utils
const range = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;

const trimP   = input => compose(trim, join(''), filterIndexed(range(2, 3)), split(''), trim)(input || '');
const trimH1  = input => compose(trim, join(''), filterIndexed(range(3, 4)), split(''), trim)(input || '');


const isTitle = event => isHeader(node(event));
const isEmpty = event => !node(event).literal;
const isValidDate = input => moment(new Date(input)).isValid();
const isDate = event => node(event).literal && isValidDate(node(event).literal);
const isDesc = (event, date) => !text(node(event)).match(date) && isParagraph(node(event));
const matchRemoveR = matcher => partialRight(matchRemove, matcher);

const extract = (input) => {
  const titleText = compose(trim,  text, partialRight(match, isTitle))(input);
  const titleHtml = compose(trimH1, html, partialRight(match, isTitle))(input);

  const date = match(input, isDate).literal;
  const sortableDate = new Date(date).getTime();

  const descText = compose(text, partialRight(match, partialRight(isDesc, date)))(input);
  const descHtml = compose(trimP, html, partialRight(match, partialRight(isDesc, date)))(input);

  const image = (match(input, (event)=> isImage(event.node)) || {}).destination || '';

  const afterRemoval = matchRemove(matchRemove(matchRemove(input, isTitle), isDate), isEmpty);
  const contentText = text(afterRemoval);
  const contentHtml = html(afterRemoval);

  return {
    titleText, titleHtml,
    date, sortableDate,
    descText, descHtml,
    image,
    contentText, contentHtml
  };
}

export default extract;
