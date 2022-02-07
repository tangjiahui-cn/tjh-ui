import rollupPluginAlias from "../plugins/rollup-plugin-alias";

const alias = {
  "~": "src/styles"
};

const codes = [
  "import '~/button.scss'",
  "import \"~/button.scss\""
];

const expectCodes = [
  "import 'src/styles/button.scss'",
  "import \"src/styles/button.scss\""
];

test("~ replace to src/styles", () => {
  const o = rollupPluginAlias(alias);
  codes.forEach((code, index) => {
    expect(o.transform(code)).toBe(expectCodes[index]);
  });
});
