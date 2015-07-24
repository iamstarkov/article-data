const title = 'Minimum `viable` blog';

const date = '20 apr 2015';

const desc = `
You should have \`ability\` to write it, readers — to read it.
Content is a king. Spend time on writing, not on developing.
`.trim();

const image = 'https://i.imgur.com/JrXX7wT.jpg';

const content = `
${desc}

## Nobody cares

Nobody cares about you, your design or technical skills.

![](${image})

## mvb

As a result we have, that minimum viable blog should have: articles
and articles list. Well done! People can read your blog.

_Stay awesome, Gotham,_
_your minimal [Vladimir Starkov](https://iamstarkov.com/)_
`.trim();


const raw = `
# ${title}

_${date}_

${content}
`.trim();

export default { title, date, desc, image, content, raw };
