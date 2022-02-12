const webpack = require("webpack");
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ]
    },
    devServer: {
        proxy: 'https://lightten.tk:8082'
    }
}