const { override, addWebpackAlias,adjustStyleLoaders,fixBabelImports  } = require('customize-cra')
const path = require('path')
module.exports = override(
  addWebpackAlias({
    // 指定@符指向src目录
    '@': path.resolve(__dirname, 'src'),
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/assets/style/common.scss" //这里是你自己放公共scss变量的路径
        }
      },{
        loader: require.resolve("sass-loader"),
      });
    }
  })
  // fixBabelImports("import", {    
    // libraryName: "antd",    
    // libraryDirectory: "es",    
    // style: true, //自动打包相关的样式 默认为 style:'css'  
  // }),
)
