module.exports = neutrino =>
{
    neutrino.config
            .output
            .chunkFilename('assets/[name].[contenthash:8].js')
            .publicPath('/');
}