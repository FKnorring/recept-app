module.exports = function (api) {
  api.cache(false);
  return {
    plugins: ["macros"],
    // add react babel preset
    presets: ["@babel/preset-react"],
  };
};
