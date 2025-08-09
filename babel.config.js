module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.png',
          '.mp4',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
        ],
        alias: {
          '@src': './src',
        },
      },
    ],
    [require.resolve('react-native-worklets/plugin')],
  ],
};
