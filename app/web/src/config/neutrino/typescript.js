module.exports = neutrino =>
{
    neutrino.config
            .resolve
            .extensions
            .add('.tsx')
            .add('.ts');

    neutrino.config
            .module
            .rule('typescript')
            .test(/\.ts?$/)
            .exclude
            .add(/node_modules/)
            .end() 
            .use('babel')
            .loader('babel-loader')
            .end()
            .use('typescript')
            .loader('ts-loader');
}