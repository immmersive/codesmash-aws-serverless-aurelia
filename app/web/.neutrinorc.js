const hot = require('./src/config/neutrino/hotModuleReload');
const typescript = require('./src/config/neutrino/typescript');
const sass = require('./src/config/neutrino/sass');
const postcss = require('./src/config/neutrino/postcss');
const optimization = require('./src/config/neutrino/optimization');
const config = require('./src/config/neutrino/config');
const output = require('./src/config/neutrino/output');
const images = require('./src/config/neutrino/images');
const dist = require('./src/config/neutrino/dist');
const node = require('./src/config/neutrino/node');
const htmlWebpackPlugin = require('./src/config/neutrino/htmlWebpackPlugin');
const aurelia = require('./src/config/neutrino/aurelia');
const performance = require('./src/config/neutrino/performance');
  
module.exports = neutrino =>
{ 
    neutrino.use('@neutrinojs/web', 
    { 
        env : 
        { 
            stage: 'dev',
            home: '',
            appsync: '',
            appsyncKey: '',
            UserPoolId: '',
            ClientId: '',
            encryptionKey: ''
        }
    });    
 
    hot(neutrino); 
    typescript(neutrino);
    sass(neutrino);
    postcss(neutrino);
    optimization(neutrino);
    output(neutrino);
    config(neutrino);
    images(neutrino);   
    dist(neutrino);
    node(neutrino);
    htmlWebpackPlugin(neutrino);
    aurelia(neutrino);
    performance(neutrino); 
};
