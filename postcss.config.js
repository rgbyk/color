module.exports = {
    plugins: [
     require('autoprefixer')(),
     require('css-declaration-sorter')(),
     // require('postcss-combine-duplicated-selectors')(),
     require('postcss-sorting')(),
     require('postcss-merge-rules')(),
     require('postcss-merge-idents')(),
     require('cssnano')()
    ],
};