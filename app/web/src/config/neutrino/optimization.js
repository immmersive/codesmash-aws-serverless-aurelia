module.exports = neutrino =>
{
    neutrino.config
            .optimization
            .runtimeChunk({ name: 'manifest' })
            .splitChunks({ chunks: 'all', maxInitialRequests: 5 });
}