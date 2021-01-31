module.exports = {
  productionSourceMap: process.env.NODE_ENV == "production" ? false : true,
  lintOnSave: true,
  configureWebpack: {
    performance: {
      maxAssetSize: 1048576, // int (in bytes),
      maxEntrypointSize: 1048576, // int (in bytes)
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    // configureWebpack: {
    //   devtool: 'source-map'
    // }
  },
  pwa: {
    name: "FreeFlight V1.0",
    msTileColor: "#04327E",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",
    manifestOptions: {
      name: "Free Flight v1.0",
      short_name: "FreeFlight",
      start_url: ".",
      display: "fullscreen",
      theme_color: "#04327E",
      background_color: "#ffffff",
    },
  },
};
