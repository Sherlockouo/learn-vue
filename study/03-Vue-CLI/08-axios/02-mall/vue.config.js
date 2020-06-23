module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
      'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'common':'components/common',
        'content':'components/content'
      }
    }
  }
}
