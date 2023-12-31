// babel.config.js
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['> 0.25%', 'not dead', 'ios >= 12'], // Target browsers to support, including iOS 12 and above
          },
          useBuiltIns: 'entry', // Use polyfills based on your target browsers
          corejs: 3, // Specify the version of core-js to use with polyfills
        },
      ],
    ],
  };
  