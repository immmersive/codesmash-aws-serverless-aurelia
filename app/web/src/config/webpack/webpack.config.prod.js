// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require('neutrino');
   
module.exports = (env) =>
{ 
    var temp = neutrino().webpack();

    temp.plugins[0].defaultValues = { 
        stage: 'prod',
        home: '',
        appsync: '',
        appsyncKey: '',
        UserPoolId: '',
        ClientId: '',
        encryptionKey: ''
    };

    return temp;
}

console.log('***** APP PROD ****' + __dirname)