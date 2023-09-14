module.exports = neutrino =>
{
    const HtmlWebpackPlugin = require('html-webpack-plugin');
 
    var stage = process.env.npm_lifecycle_event;

    if(stage === 'start') stage = 'dev';

    neutrino.config
            .plugin('html-index')
            .use(HtmlWebpackPlugin,
            [
                {
                    template: './src/resources/templates/index_' + stage + '.ejs'
                }
            ]);

    const CopyPlugin = require('copy-webpack-plugin');
 
    if(['dev', 'uat', 'prod'].includes(process.env.npm_lifecycle_event))
    {
        neutrino.config
                .plugin('copy-webpack-plugin')
                .use(new CopyPlugin(
                [
                    {
                        from: 'src/resources/text/robots_' + process.env.npm_lifecycle_event + '.txt', 
                        to: '../build/robots.txt'
                    }
                ]));
    }

    if(['prod'].includes(process.env.npm_lifecycle_event))
    {
        neutrino.config
                .plugin('copy-webpack-plugin')
                .use(new CopyPlugin(
                [
                    {
                        from: 'src/resources/xml/sitemap.xml', 
                        to: '../build/sitemap.xml'
                    }
                ]));
    }
}