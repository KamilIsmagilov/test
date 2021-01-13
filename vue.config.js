module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { 
            outputPath: (url, resourcePath, context) => {
              console.log('%ccontext: ', 'background: red', context)
              if (/img/.test(context)) {
                return `image_output_path/${url}`;
              }

              return `output_path/${url}`;
              }
           }))
  }
}