const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    // Specify the paths to all of the template files
    content: [
      './src/pages/**/*.{js,jsx}',
      './src/components/**/*.{js,jsx}'
    ],
    // This is the function used to extract class names from the templates
    defaultExtractor: (content) => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches =
        content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
      return broadMatches.concat(innerMatches);
    }
  }
];
module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production' ? purgecss : undefined,
    'postcss-preset-env'
  ]
};
