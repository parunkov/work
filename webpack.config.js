const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const CopyWebpackPlugin= require('copy-webpack-plugin');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

// let chunk = [];
// let fs = require('fs');
// let folders = fs.readdirSync('./source/pages/');
// console.log(folders);
// for(let folder of folders) {
//     console.log(`${folder}`);
//     console.log(chunk.concat(folder));
// }
// console.log(new HtmlWebpackPlugin({
//             filename: 'colors_types.html',
//             chunks: ['colors_types'],
//             template: PATHS.source + '/pages/colors_types/colors_types.pug'
//         }),);
// console.log(folders.map(folder => new HtmlWebpackPlugin({
//             filename: `${folder}.html`,
//             chunks: new Array(folder),
//             template: PATHS.source + `/pages/${folder}/${folder}.pug`
//         })));

const common = merge([
    {
    entry: {
        // 'index': PATHS.source + '/pages/index/index.js',
        // 'blog': PATHS.source + '/pages/blog/blog.js',
        'colors_types': PATHS.source + '/pages/colors_types/colors_types.js',
        'form_elements': PATHS.source + '/pages/form_elements/form_elements.js',
        'cards': PATHS.source + '/pages/cards/cards.js',
        'headers_footers': PATHS.source + '/pages/headers_footers/headers_footers.js',
        'index': PATHS.source + '/pages/index/index.js',
        'search_room': PATHS.source + '/pages/search_room/search_room.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'colors_types.html',
            chunks: ['colors_types'],
            template: PATHS.source + '/pages/colors_types/colors_types.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'form_elements.html',
            chunks: ['form_elements'],
            template: PATHS.source + '/pages/form_elements/form_elements.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'cards.html',
            chunks: ['cards'],
            template: PATHS.source + '/pages/cards/cards.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'headers_footers.html',
            chunks: ['headers_footers'],
            template: PATHS.source + '/pages/headers_footers/headers_footers.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'search_room.html',
            chunks: ['search_room'],
            template: PATHS.source + '/pages/search_room/search_room.pug'
        }),
        // folders.map(folder => new HtmlWebpackPlugin({
        //     filename: `${folder}.html`,
        //     chunks: new Array(folder),
        //     template: PATHS.source + `/pages/${folder}/${folder}.pug`
        // })),
        new CopyWebpackPlugin([{
            from: './source/fonts',
            to: './fonts'
        }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
        ]
    },
    pug(),
    images(),
    fonts()
    ]);

module.exports = function(env) {
	// optimization: {
	//     splitChunks: {
	//       chunks: "all"
	//     }
 //  	}
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};