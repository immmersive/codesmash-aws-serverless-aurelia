/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig')()


/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/ 
         
let colors = {   
  'transparent': 'transparent',
  'crimson': 'crimson',
  'custom-orange': '#ff9900',
  'custom-red': '#be0714',  
  'link': '#1b94e0',   
  'link-2': '#3ea5ff',   
  'blueviolet': 'blueviolet',
 
  'black': '#000000',      
  'grey-super': '#0f0f0f', 
  'grey-main': '#19191b', 
  'grey-darkest': '#222223',   
  'grey-darkest-2': '#333333',   
  'grey-darker': '#444444',  
  'grey-dark': '#d9d9d9ce',
  'grey': '#d9d9d9',
  'grey-glow': '#323232',
  'grey-light': '#dedede', 
  'grey-lighter': '#fefefe', 
  'grey-lightest': '#f8fafc',  
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',
 
  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
    'xxl': '1600px',
    'uxl': '2000px'
  },

 
  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */

  fonts: {
    'sans': [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */

  textSizes: {
    'us': '.5rem',     // 12px
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px 
    'lg': '1.5rem',   // 18px
    'xl': '1.25rem',    // 20px        
    '2xl': '2rem',    // 24px  
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '4rem',      // 48px
    '7xl': '5rem',      // 48px
    '8xl': '6rem',      // 48px
    '9xl': '7rem',      // 48px
    'usmall': '.5rem',
    'vsmall': '.6rem',
    'xsmall': 'x-small',
    'small': 'small', 
    'medium': 'medium',  
    'larger': 'larger', 
    'large': 'large', 
    'xlarge': 'x-large',
    '75': '.75rem',
    '135': '1.35rem'
  },
 
   
  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */    
           
  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */

  leading: {
    'none': 1, 
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
    '1': '1rem',
    '115': '1.15rem',  
    '125': '1.25rem',  
    '14': '1.4rem',  
    '225': '2.25rem',  
    '15': '1.5rem',
    '175': '1.75rem',
    '2': '2rem',
    '25': '2.5rem',
    '3': '3rem',
    '4': '4rem',
    '5': '5rem'
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  | CSS property: color
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */
 
  backgroundColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '.2rem',    
    '4': '4px',
    '8': '8px',
    '1px': '1px'
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  | CSS property: border-color
  | 
  */
 
  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
 

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */ 
        
  borderRadius: {
    'none': '0', 
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',    
    'xlg': '1rem',
    'xxlg': '2rem',
    'half': '50%',    
    'full': '9999px', 
    '75': '.75rem',   
    '25': '.25rem',   
    '5': '.5rem',   
    '1': '1rem',   
    '1x5': '1.5rem',    
    '2x': '2rem',   
    '3x': '3rem',   
  },
 

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  | CSS property: width
  |
  */
       
  width: {
    'auto': 'auto',
    'px': '1px', 
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem', 
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem', 
    '10': '2.5rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '18': '4.5rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40x': '10rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '64': '16rem',
    '72': '18rem',
    '96': '24rem',
    '128': '32rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '20': '20%',
    '25': '25%',
    '30': '30%',
    '40': '40%',
    '50': '50%',
    '60': '60%',
    '75': '75%',
    '80': '80%',
    '90': '90%',
    '90p': '90%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'q': '25%',
    'half': '50%',
    '3q': '75%',
    'full': '100%',
    'screen': '100vw',    
    '5x': '5rem'
  },
      
 
  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  | CSS property: height
  |
  */ 

  height: {
    'auto': 'auto',
    'px': '1px',
    '0x5': '0.12rem',
    '1': '0.25rem',
    '1x3': '0.3rem',
    '1x4': '0.4rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '13': '3.5rem',
    '16': '4rem',
    '18': '4.5rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem', 
    '96': '24rem', 
    '128': '32rem',
    'q1': '25vh',
    'third': '33vh',
    'half': '50vh',
    '3q': '75vh',
    'full': '100%',
    '90p': '15rem',
    'screen': '100vh',
  }, 
 

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */

  minWidth: {
    '0': '0',
    '12': '3rem',
    '10': '2.5rem',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */
  
  minHeight: {
    '0': '0',
    '12': '3rem',
    '10': '2.5rem',
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */

  maxWidth: {
    'pico': '15rem',
    'nano': '20rem',
    'micro': '25rem',
    'mili': '30rem',
    'centi': '35rem',
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'quarter': '25%',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */

  maxHeight: {
    '1': '1rem',
    '2': '2rem',
    '4': '4rem',
    '8': '8rem',
    '16': '16rem',
    'pico': '15rem',
    'nano': '20rem',
    'micro': '25rem',
    'mili': '30rem',
    'centi': '35rem',
    'quarter': '25%',
    'half': '50vh',
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */ 
    
  padding: {
    'px': '1px',
    '0': '0',
    '05': '.05rem',    
    '10': '.1rem',    
    '15': '.15rem',    
    '20': '.2rem',
    '25': '.25rem',
    '3': '.3rem',
    '4': '.4rem',
    '5': '.5rem',
    '6': '.6rem',
    '7': '.7rem',
    '75': '.75rem',
    '1': '1rem',
    '1x25': '1.25rem',
    '1x5': '1.5rem',
    '2x': '2rem',
    '2x5': '2.5rem',
    '2x75': '2.75rem',
    '3x': '3rem',
    '3x5': '3.5rem',
    '4x': '4rem',
    '5x': '5rem',
    '6x': '6rem',
    '7x': '7rem',
    '8x': '8rem',
    '9x': '9rem',
    '10x': '10rem', 
    '11x': '11rem',
    '12x': '12rem',
    '14x': '14rem',
    '16x': '16rem'
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */
                  
  margin: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '15': '.15rem',
    '2': '.2rem',
    '25': '.25rem',
    '3': '.3rem',
    '5': '.5rem',
    '75': '.75rem',
    '1': '1rem',
    '1x5': '1.5rem',
    '2x15': '2.15rem',
    '2x': '2rem',
    '2x5': '2.5rem',
    '2x25': '2.25rem',
    '2x75': '2.75rem',
    '3x': '3rem',
    '3x5': '3.5rem',
    '4x': '4rem',
    '4x5': '4.5rem',
    '5x': '5rem',
    '6x': '6rem',
    '6x5': '6.5rem',
    '7x': '7rem',
    '8x': '8rem',
    '9x': '9rem',
    '10x': '10rem',
    '11x': '11rem',
    '12x': '12rem',
    '13x': '13rem',
    '14x': '14rem',
    '15x': '15rem',
    '16x': '16rem',
    '17x': '17rem',
    '18x': '18rem',
    '19x': '19rem',
    '20x': '20rem',
    '22x': '22rem',
    '24x': '24rem',
    '25x': '25rem',
    '26x': '26rem',
    '28x': '28rem',
    '29x': '29rem',
    '30x': '30rem',
    '32x': '32rem',
    '35x': '35rem',
    '36x': '36rem',
    '38x': '38rem',
    '40x': '40rem',
    '1825x': '18.25rem',
    '185x': '18.5rem',
    '5pct': '5%',
    '10': '10%',    
    '20': '20%',
    '25pct': '25%',
    '30': '30%',
    '32x5': '32.5%',
    '33': '33',
    '35': '35%',
    '36': '36%',
    '37': '37%',
    '38': '38%',
    '40': '40%',
    '45': '45%',
    '50': '50%',
    '75': '70%',
    'm1': '-1rem',
    'm2': '-2rem',
    'm3': '-3rem',
    'm4': '-4rem',
    'm5': '-5rem',
    'm6': '-6rem',
    'm7': '-7rem',
    'm8': '-8rem',
    'm9': '-9rem',
    'm10': '-10rem',
    'm11': '-11rem',
    'm12': '-12rem',
    'm14': '-14rem',
    'm15': '-15rem',
    'm16': '-16rem',
    'm18': '-18rem',
    'm19': '-19rem',
    'm20': '-20rem',
    'm21': '-21rem',
    'm22': '-22rem',
    'm23': '-23rem',
    'm24': '-24rem',
    'm25': '-25rem',
    'm28': '-28rem',
    'm29': '-29rem',
    'm30': '-30rem',
    'm31': '-31rem',
    'm32': '-32rem',
    'm34': '-34rem',
    'm35': '-35rem',
    'm36': '-36rem',
    'm37': '-37rem',
    'm38': '-38rem',
    'm39': '-39rem',
    'm40': '-40rem',
    'm41': '-41rem',
    'm42': '-42rem',
    'm43': '-43rem',
  },   

  
  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */

  negativeMargin: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */ 

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',
    'none': 'none',
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,    
    '98': 98,
    '99': 99,
    '100': 100,
    '199': 199,
    '200': 200,
    '201': 201,
    '299': 299,
    '300': 300
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */

  svgFill: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */
       
  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: false,
    opacity: ['responsive', 'hover'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus', 'group-hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
      // center: true,
      // padding: '1rem',
    }),
  ],


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
