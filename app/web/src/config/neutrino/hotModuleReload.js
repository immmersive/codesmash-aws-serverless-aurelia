module.exports = neutrino =>
{
    neutrino.config
            .devServer
            .hot(true);
}