module.exports = neutrino =>
{
    neutrino.config
            .devServer
            .hot(false)
            .historyApiFallback(true)
            .contentBase('../../../dist');
}