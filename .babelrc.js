const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [["env", { modules: isTest ? "commonjs" : false }], "react"],
  plugins: [
    "syntax-dynamic-import"
  ]
};
