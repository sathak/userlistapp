const path = require('path');

module.exports = {
    entry:  ["@babel/polyfill", "./src/index.js"],
    output: {
         path: __dirname,
         publicPath: '/',
         filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/, //Check for all js files
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-3']
        }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    
  resolve: {
    extensions: [ '.js', '.jsx', '.css'],
    modules: [
      "node_modules"
    ] 
  },
   externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
    }
};
