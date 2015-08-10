import getTitle   from 'get-md-title';
import getDate    from 'get-md-date';
import getDesc    from 'get-md-desc';
import getImage   from 'get-md-image';
import getContent from 'get-md-content';

export default (input, dateFormat, dateLocale) => {
  if (!input) return;
  const title     = getTitle(input);
  const titleText = title && title.text;
  const date      = getDate(dateFormat, dateLocale, input);
  const dateText  = date && date.text;
  const desc      = getDesc(input, dateText);
  const image     = getImage(input);
  const content   = getContent(input, [titleText, dateText]);
  return { title, date, desc, image, content};
};
