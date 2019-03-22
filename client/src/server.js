/* eslint-disable import/no-commonjs */

require('@babel/register')({
    presets: [ '@babel/preset-env' ],
    plugins: ["@babel/plugin-transform-runtime"]
});

module.exports = require('./app.js');