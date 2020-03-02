const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <label> Test:
      <textarea>hello world</textarea>
    </label>
  </body>
</html>`);

const textareaElement = dom.window.document.querySelector('textarea');

textareaElement.addEventListener('click', () =>
  console.log('textarea element has been clicked'),
);

textareaElement.click();
