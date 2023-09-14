const neutrino = require('neutrino');
  
module.exports = (env) =>
{ 
    var temp = neutrino().webpack();
 
    temp.plugins[0].defaultValues = {         
        stage: 'dev',
        home: '',
        appsync: '',
        appsyncKey: '',
        UserPoolId: '',
        ClientId: '',
        encryptionKey: ''
    }; 

    return temp;
}

console.log('***** APP DEV ****' + __dirname)