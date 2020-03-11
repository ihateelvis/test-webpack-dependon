module.exports = {
  entry: {
    ModuleC: `${process.cwd()}/ModuleC`,
    ModuleB: {
      import: `${process.cwd()}/ModuleB`,
      dependOn: 'ModuleC',
    },
    ModuleA: {
      import: `${process.cwd()}/ModuleA`,
      dependOn: ['ModuleB', 'ModuleC'],
    }
  },
  output: {
    path: `${process.cwd()}/dist`,
    filename: '[name].js',
    library: 'modules',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development'
};
