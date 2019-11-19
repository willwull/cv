# CV

## Install dependencies

Requires node.js installed and a Pro key to FontAwesome 5.

```
$ npm install
```

## Edit CV

The CV itself is stored as a JavaScript object in `src/resume.js`.

Check `src/index.css` to customize styling.

## Generate CV

```
$ npm start
```

This command will allow you to see the CV on `http://localhost:3000`. To save a PDF, use the Print function in the browser and save as PDF.

For best results, use Google Chrome, and set the scale to 90% (not sure why, but it prints too large otherwise).

### Weird issues

- By default prints too big, so you need to set the scale to 90% when printing.
- Text seems to render darker than the color you specify via CSS, unsure why. So set the CSS color to a color that's slightly lighter than what you want.
