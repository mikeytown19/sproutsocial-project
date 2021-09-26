module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {

      resolve: 'gatsby-transformer-sharp',
      options: {
        defaults: {
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [300, 750, 1080, 1300, 1600],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
        },
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
  ],
};
