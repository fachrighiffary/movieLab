module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          routers : './src/Routers',
          screens : './src/Screens',
          components : './src/Components',
          assets : './src/Assets',
          redux : './src/Redux',
          home: './src/Screens/Home',
          splash: './src/Screens/Splash',

        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
