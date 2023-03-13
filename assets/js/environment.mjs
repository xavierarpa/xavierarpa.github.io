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
            onPalletteChange: "onPalletteChange",
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
            {
                name: "Experimental",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.blue},
                    {k:environment.css.var.secondary, v: environment.css.var.color.yellow},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.red},
                ],
            },
            {
                name: "Hacker",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.color.green},
                    {k:environment.css.var.secondary, v: environment.css.var.color.black},
                    {k:environment.css.var.tertiary, v: environment.css.var.color.black},
                ],
            },
        ],
    },
}


// pink
// skyblue
// white

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
    },

    localStorage_delete: (_key)  =>
    {
        localStorage.removeItem(_key);
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

    localStorage_isNull: (_key)  =>
    {
        return localStorage.getItem(_key) == null;
    },

    localStorage_isEvent: (_key)  =>
    {
        if(utils.localStorage_isNull(_key))
        {
            return false;
        }
        else
        {
            return true;
        }
    },

    localStorage_event: (_key, _callback)  => 
    {
        if(utils.localStorage_isEvent(_key)) 
        {
            _callback();
        }
    },
    localStorage_eventDispatch: (_key, _callback)  => 
    {
        if(utils.localStorage_isEvent(_key)) 
        {
            console.log(`Event Message for "${_key}": "${utils.localStorage_get(_key)}"`);
            utils.localStorage_delete(_key);
            _callback();
        }
    },

    localStorage_eventInvoke: (_key) =>
    {
        utils.localStorage_set(_key, "event");
    },
    
    pallette_change: (changeCounts) => 
    {
        let _pallette = configs.pallette.list[changeCounts % configs.pallette.list.length];
        for (let i = 0; i < _pallette.values.length; i++)   utils.css_set(_pallette.values[i].k, _pallette.values[i].v);
    },
    


    // EVENTS
    event_onPalletteChange: () => utils.localStorage_eventInvoke(environment.localStorage.keys.onPalletteChange), // ~ Invoke onPalletteChange !
}


// FUNCTIONS
//
// Updates pallette
const func_update_pallette = ()=> utils.pallette_change(utils.toInt(utils.localStorage_get(environment.localStorage.keys.pagemode, "0"), 0));


// Awake()
const behaviour_awake = () =>
{

};
const behaviour_update = () =>
{
    behaviour_enter_events();
};
const behaviour_lateUpdate = () =>
{
    behaviour_exit_events();
};
const behaviour_enter_events = () =>
{
    utils.localStorage_event(environment.localStorage.keys.onPalletteChange, func_update_pallette); // ~ onPalletteChange
};
const behaviour_exit_events = () =>
{
    utils.localStorage_eventDispatch(environment.localStorage.keys.onPalletteChange, func_update_pallette); // ~ onPalletteChange
};



// BEHAVIOURS
//
utils.onload( e => behaviour_awake ); // AWAKE => When loaded is all loaded
setInterval(behaviour_update, 16); // UPDATE => 60 FPS => 16ms
setInterval(behaviour_lateUpdate, 20); // UPDATE => 50 FPS => 20ms