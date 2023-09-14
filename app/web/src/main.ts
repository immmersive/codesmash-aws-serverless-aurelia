import { Aurelia, PLATFORM } from 'aurelia-framework'; 
import { Backend, TCustomAttribute } from 'aurelia-i18n';

export async function configure(au:Aurelia)
{   
    au.use
      .standardConfiguration()
      .developmentLogging() 
      .plugin(PLATFORM.moduleName('@appex/aurelia-dompurify')) 
      .plugin(PLATFORM.moduleName('aurelia-validation'))   
      .plugin(PLATFORM.moduleName('aurelia-i18n'), async (instance) => 
      {
            let aliases = ['t', 'i18n'];

            TCustomAttribute.configureAliases(aliases);
  
            instance.i18next.use(Backend.with(au.loader));  
  
            return await instance.setup({             
                attributes: aliases,    
                interpolation: 
                {
                    format: (value: string, format, lng: string) => 
                    {    
                        return value;
                    }
                },                 
                lng : 'en',
                fallbackLng : 'en',
                debug : false,
                resources: { }             
            }); 
      });     
    
    await au.start();
    await au.setRoot(PLATFORM.moduleName('app'));
}
