module.exports = neutrino =>
{
    neutrino.config
            .module
            .rule('style')
            .use('post-css')
            .loader('postcss-loader');
}