const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Корневой елемент сборки
    entry: './src/index.js',

    // Где будут лежать результаты сборки
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Правила, которые описывают как загружать те или иные расширения.
    module: {
        rules: [

            // Правило для загрузи js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // Транспайлим - преобразовываем JS в более старый
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            },


            // Правило для загрузки css
            {
                test: /\.scss$/i,
                use: [
                    // Из модуля в файл style.css
                    MiniCssExtractPlugin.loader,

                    // Из css в CommonJS модуль
                    'css-loader',

                    // Из scss(sass) превращаем в css
                    'sass-loader'
                ],
            },
        ]
    },

    plugins: [
        // Нужен, чтобы преобразовать файл из css модуля
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};