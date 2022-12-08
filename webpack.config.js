const glob = require('glob')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const list = {}
// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js'
//   index: './components/lib/index.js'
// }
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log('files；', files)
  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component: ', component)
    list[component] = `./${file}`
  }
  console.log(list)
}

makeList('components/lib', list)

module.exports = {
  mode: "development",
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}