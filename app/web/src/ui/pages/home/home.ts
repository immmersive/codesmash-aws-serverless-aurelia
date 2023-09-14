export class Home {
    
    stage: string;
    text: string;    
    splash: string;

    constructor()
    {
        this.stage = process.env.stage;
        this.text = 'Welcome to Serverless Aurelia';
        this.splash = require('../../../resources/images/aurelia.png')
    }
    
}