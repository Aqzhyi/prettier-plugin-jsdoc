const prettier = require("prettier");

function subject(code, options = {}) {
  return prettier.format(code, {
    plugins: ["."],
    jsdocSpaces: 1,
    parser: "babel-flow",
    ...options,
  });
}

test("template for callback", () => {
  const result = subject(`
/**
 * @template T
 * @callback CallbackName
 * @param {GetStyles<T>} getStyles
 * @returns {UseStyle<T>}
 */
`);

  expect(result).toMatchSnapshot();
});

test("extends", () => {
  const result = subject(`
 /**
  * The bread crumbs indicate the navigate path and trigger the active page.
  * @class
  * @typedef {object} props
  * @prop        {any} navigation
  * @extends {PureComponent<props>} 
  */
 export class BreadCrumbs extends PureComponent {}
`);

  expect(result).toMatchSnapshot();
});
