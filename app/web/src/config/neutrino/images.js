module.exports = neutrino =>
{
    neutrino.config
            .module
            .rule('image')
            .use('url')
            .loader('url-loader')
            .options(
            {
                limit: 1,
                name: "[name].[hash:8].[ext]"
            });
}