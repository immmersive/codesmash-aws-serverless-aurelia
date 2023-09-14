module.exports = neutrino =>
{
    const { resolve } = require('path');

    neutrino.config
            .resolve
            .modules
            .add(resolve('./src'))
            .add(resolve('./node_modules'));
}