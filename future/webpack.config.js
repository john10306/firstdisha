module.exports = {
  entry:  './index.js',
  
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module:{
    rules:[
      {test:/\.css$/, use:['style-loader','css-loader']},
      {test:/\.html$/, use:['raw-loader']}
    ]
  },
  
  devtool: "source-map", //might show meaningful errors

  devServer: {
    port:8080,
    stats: "errors-only", //hides the useless lines
    open: true, //opens new window
   openPage: '' //idk undefined error otherwise
  }

}
