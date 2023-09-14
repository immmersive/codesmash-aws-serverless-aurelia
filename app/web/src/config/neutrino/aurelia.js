module.exports = neutrino =>
{
    const { AureliaPlugin } = require('aurelia-webpack-plugin');

    neutrino.config
            .plugin('aurelia-plugin')
            .use(AureliaPlugin);

    neutrino.config
            .entryPoints
            .clear();

    neutrino.config
            .entry('app')
            .add('aurelia-bootstrapper');
}
