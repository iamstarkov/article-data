import getTitle   from 'get-md-title';
import getDate    from 'get-md-date';
import getDesc    from 'get-md-desc';
import getImage   from 'get-md-image';
import getContent from 'get-md-content';

export default (input, dateFormat, dateLocale) => {
  const title   = getTitle(input);
  const date    = getDate(dateFormat, dateLocale, input);
  const desc    = getDesc(input, date.text);
  const image   = getImage(input);
  const content = getContent(input, [title.text, date.text]);
  return { title, date, desc, content, image };
};
