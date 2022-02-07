import rollupPluginAlias from "../plugins/rollup-plugin-alias";

const alias = {
  "~": "src/styles",
  "props": "src/props"
};

const codes = [
  "import '~/button.scss'",
  "import \"~/button.scss\"",
  "import props from 'props/button.js'"
];

const expectCodes = [
  "import 'src/styles/button.scss'",
  "import \"src/styles/button.scss\"",
  "import props from 'src/props/button.js'"
];

test("~ replace to src/styles", () => {
  const o = rollupPluginAlias(alias);
  codes.forEach((code, index) => {
    expect(o.transform(code)).toBe(expectCodes[index]);
  });
});
