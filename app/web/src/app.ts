import { Container, PLATFORM, bindable } from 'aurelia-framework';
import "./ui/styles/main.css";  
import { autoinject } from 'aurelia-dependency-injection';  
import { RouterConfiguration, Router } from 'aurelia-router';  
import { I18N } from 'aurelia-i18n';  
  
@autoinject()
export class App  
{    
    router: Router;
    routeTypeMap: Map<string, string>;

    constructor(private i18n: I18N) 
    { 
        this.i18n = i18n; 
  
        Container.instance.registerInstance('i18n', i18n);  
    }     
 
    async configureRouter(config: RouterConfiguration, router: Router)
    {   
        var routes = 
        [ 
            
        ];

        this.router = this.setupRouterSimple(
            config, 
            router,
            routes,
            type => ({ app: { moduleId: this.routeTypeMap.get(type) } })); 
         
        config.map([ 
        {
            route: ['', 'home'],       
            name: 'home',        
            nav: true, 
            viewPorts: { app: { moduleId: PLATFORM.moduleName('./ui/pages/home/home') } }
        }]);

        config.options.pushState = true;
        config.options.root = '/';              
        config.fallbackRoute('home');
        config.mapUnknownRoutes({            
            route: 'home',
            moduleId: 'home',
            redirect: 'home'            
        }); 
    } 

    setupRouterSimple(        
        config: RouterConfiguration, 
        router: Router,
        routes: { route: string, name: string, type: string }[],
        getViewPort: (x: string) => any) : Router
    {
        var fullRoutes = routes.map(x => 
        {
            if(x.name === 'home')
            {
                return ({
                    route: ['', x.route],       
                    name: x.name,   
                    viewPorts: getViewPort(x.type)
                });
            }
            else
            {
                return ({
                    route: x.route,       
                    name: x.name,   
                    viewPorts: getViewPort(x.type)
                }); 
            }
        });
    
        config.map(fullRoutes);
    
        config.options.pushState = true;
        config.options.root = '/';        
        config.fallbackRoute('home');
        config.mapUnknownRoutes({            
            route: 'home',
            moduleId: 'home',
            redirect: 'home'          
        }); 

        return router;    
    }
}