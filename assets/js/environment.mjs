// Datos estaticos
export const environment = 
{
    contact: 
    {
        email: "mailto:arpaxavier@gmail.com",
        twitter: "https://twitter.com/_kingdox_",
        github: "https://github.com/kingdox",
        itchio: "https://kingdox.itch.io/",
        develteam: "https://www.develteam.com/Developer/Kingdox",
    },
    dom:
    {
        keys:
        {
            onLoaded: "DOMContentLoaded"
        }
    },
    localStorage:
    {
        keys:
        {
            pagemode: "pageModeCount"
        }
    },
    css:
    {
        var:
        {
            color:
            {
                light: "--color-light",
                gray_light: "--color-gray-light",
                gray_medium_light: "--color-gray-medium-light",
                gray_medium: "--color-gray-medium",
                gray: "--color-gray",
                gray_dark: "--color-gray-dark",
                gray_very_dark: "--color-gray-very-dark",
                black: "--color-black",
                red: "--color-red",
                green: "--color-green",
                blue: "--color-blue",
                yellow: "--color-yellow",
            },
            primary: "--primary",
            secondary: "--secondary",
            tertiary: "--tertiary",
        },
    }
};


// Estructuras que son armadas de literales...
export const configs =
{
    pallette:
    {
        list:
        [
            {
                name: "Dark",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.light},
                    {k:environment.css.var.secondary, v: environment.css.var.color.black},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.gray},
                ],
            },
            {
                name: "Light",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.black},
                    {k:environment.css.var.secondary, v: environment.css.var.color.light},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.gray},
                ],
            },
            {
                name: "Boogysoft",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.light},
                    {k:environment.css.var.secondary, v: environment.css.var.color.red},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.yellow},
                ],
            },
            {
                name: "Beegames",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.yellow},
                    {k:environment.css.var.secondary, v: environment.css.var.color.black},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.gray},
                ],
            },
        ],
    },
}



// const _data = new URLSearchParams(window.location.search).get(K_DATA);
// console.log(_data);


// Funciones
export const utils =
{
    id:(_id) => 
    {
        return document.getElementById(_id);
    },

    onload:(callback) => 
    {
        return document.addEventListener(environment.dom.keys.onLoaded, callback);
    },

    toInt: (_value, _def_val) => 
    {
        let int = Number(_value);
        if (int == null || isNaN(int)) return _def_val;
        else return int;
    },

    toString: (_value, _def_val) => 
    {
        let string = String(_value);
        if (string == null) return _def_val;
        else return string;
    },

    css_set: (_variable, _value) => 
    {
        document.documentElement.style.setProperty(_variable, `var(${_value})`);
        // document.documentElement.style.setProperty(_variable, `blue`);
    },

    localStorage_get: (_key, _defaultValue)  =>
    {
        if(localStorage.getItem(_key) == null)  utils.localStorage_set(_key, _defaultValue);
        return localStorage.getItem(_key);
    },

    localStorage_set: (_key, _value) =>
    {
        localStorage.setItem(_key, utils.toString(_value, ""));
    },
    
    pallette_change: (changeCounts) => 
    {
        let _pallette = configs.pallette.list[changeCounts % configs.pallette.list.length];
        for (let i = 0; i < _pallette.values.length; i++)   utils.css_set(_pallette.values[i].k, _pallette.values[i].v);
    },
}


// FUNCTIONS
//
// Updates pallette
const update_pallette = ()=> utils.pallette_change(utils.toInt(utils.localStorage_get(environment.localStorage.keys.pagemode, "0"), 0));




// BEHAVIOURS
//
// Awake()
utils.onload( e => 
{
    update_pallette();
});
//
// Tick Refresh Pallette
setTimeout(update_pallette, 1000);
