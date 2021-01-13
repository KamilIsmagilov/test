module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
  // chainWebpack: config => {
  //   config.module
  //     // .rule('js')
  //     //   .use('file-loader')
  //     //     .loader('file-loader')
  //     //     .tap(options => Object.assign(options, {
  //     //       publicPath: '.'
  //     //     }))
  //     .rule('images')
  //       .use('url-loader')
  //         .loader('url-loader')
  //         .tap(options => Object.assign(options, {
  //           publicPath: '/test/dist',
  //           // outputPath: (url, resourcePath, context) => {
  //           //   console.log('%ccontext: ', 'background: red', context)
  //           //   if (/img/.test(context)) {
  //           //     return `image_output_path/${url}`;
  //           //   }

  //           //   return `output_path/${url}`;
  //           //   }
  //          }))
  // }
}