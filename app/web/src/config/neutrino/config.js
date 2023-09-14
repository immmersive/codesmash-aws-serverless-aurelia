module.exports = neutrino =>
{
    neutrino.config
            .recordsPath(
                require('path').join(__dirname, "../../../records.json"));
}