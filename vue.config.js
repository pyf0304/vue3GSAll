const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  lintOnSave: false
})

const path = require('path')
const fs = require('fs')
function getPages (pageName) {
  const map = {}
  if (!pageName) {
    const PAGE_PATH = path.resolve(__dirname, './src/pages')
    const entryFiles = fs.readdirSync(PAGE_PATH)
    entryFiles.forEach(filePath => {
      map[filePath] = {
        entry: 'src/pages/' + filePath + '/main.ts',
        template: 'public/index.html',
        filename: filePath + '/' + filePath + '.html',
        chunks: ['chunk-vendors', 'chunk-common', filePath]
      }
    })
    console.log(map);
    return map
  }
  // 指定单页面打包
  map[pageName] = {
    entry: 'src/pages/' + pageName + '/main.ts',
    template: 'public/index.html',
    filename: pageName + '/' + pageName + '.html',
    chunks: ['chunk-vendors', 'chunk-common', pageName]
  }
  console.log(map);
  return map
}
console.log(process.env.NODE_ENV)
const rawArgv = process.argv.slice(2)
const [, , moduleName] = rawArgv
const pages = getPages(moduleName)
module.exports = {
  pages: pages,
  outputDir: 'dist',
  assetsDir: 'common',
  productionSourceMap: false, // 打包不生成map
  chainWebpack: config => {
    config.output
      .filename(() => {
        return '[name]/js/[name].js'
      })
 
    config.plugin('extract-css').tap(options => {
      options[0].filename = '[name]/css/[name].[hash:8].css'
      return options
    })
 
    // 使用splitChunks抽离公用代码
    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: 'chunk-common', // 打包后的文件名
          chunks: 'initial', //
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })
  },
  configureWebpack: {
 
  },
  css: {
    extract: true,    
    sourceMap: false
  }
}
