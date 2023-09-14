module.exports = neutrino =>
{
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    neutrino.config
            .plugin('extract')
            .use('mini-css-extract-plugin',
            [
                {
                    filename: "assets/[name].[contenthash:8].css",
                    chunkFilename: "assets/[name].[contenthash:8].css"
                }
            ]);
     
    neutrino.config
            .module
            .rule('sass')
            .test(/\.scss$/)    
            .use('extract')
            .loader(MiniCssExtractPlugin.loader)          
            .end()
            .use('css')
            .loader('css-loader')
            .end()
            .use('sass')
            .loader('sass-loader'); 
}