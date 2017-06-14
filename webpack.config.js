var webpack = require('webpack');

module.exports = {

    output: {
        library: 'ReduxAsyncConnect',
        libraryTarget: 'modules'
    },

    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-router': {
                root: 'ReactRouter',
                commonjs2: 'react-router',
                commonjs: 'react-router',
                amd: 'react-router'
            },
            'prop-types': {
                root: 'PropTypes',
                commonjs2: 'prop-types',
                commonjs: 'prop-types',
                amd: 'prop-types'
            }
        }
    ],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    node: {
        Buffer: false
    }

};
