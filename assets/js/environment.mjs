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
            onLoaded: "DOMContentLoaded",
            message: "message"
        }
    },
    localStorage:
    {
        keys:
        {
            onPalletteChange: "onPalletteChange",
            onPathChange: "onPathChange",
            pagemode: "pageModeCount"
        }
    },
    css:
    {
        var:
        {
            colors:
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
                cyan: "--color-cyan",
                magenta: "--color-magenta",
                blue_dark: "--color-blue-dark",
                purple: "--color-purple",
            },
            fonts:
            {
                apple_system: "--font-apple-system",
            },
            font: "--font",
            primary: "--primary",
            secondary: "--secondary",
            tertiary: "--tertiary",
            quartery: "--quartery",
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
                    {k:environment.css.var.primary, v: environment.css.var.colors.light},
                    {k:environment.css.var.secondary, v: environment.css.var.colors.black},
                    {k:environment.css.var.tertiary, v: environment.css.var.colors.yellow},
                    {k:environment.css.var.quartery, v: environment.css.var.colors.purple},
                ],
            },
            {
                name: "Boogysoft",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.colors.light},
                    {k:environment.css.var.secondary, v: environment.css.var.colors.red},
                    {k:environment.css.var.tertiary, v: environment.css.var.colors.yellow},
                    {k:environment.css.var.quartery, v: environment.css.var.colors.black},
                ],
            },
            {
                name: "Beegames",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.colors.yellow},
                    {k:environment.css.var.secondary, v: environment.css.var.colors.black},
                    {k:environment.css.var.tertiary, v: environment.css.var.colors.light},
                    {k:environment.css.var.quartery, v: environment.css.var.colors.blue},
                ],
            },
            {
                name: "Old PC",
                values:
                [
                    {k:environment.css.var.primary, v: environment.css.var.colors.light},
                    {k:environment.css.var.secondary, v: environment.css.var.colors.blue_dark},
                    {k:environment.css.var.tertiary, v: environment.css.var.colors.yellow},
                    {k:environment.css.var.quartery, v: environment.css.var.colors.black},
                ],
            },
        ],
    },
}


// const _data = new URLSearchParams(window.location.search).get(K_DATA);

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

    subscribe:(_callback) => 
    {
        return window.parent.addEventListener(environment.dom.keys.message, __msg => _callback(__msg.data));
    },
    
    invoke:(_key, _data = null) => 
    {
        let _message = {key:_key, data:_data};
        return window.parent.postMessage(_message, "*");
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

    localStorage_get_Int: (_key)  => utils.toInt(utils.localStorage_get(_key, "0"), 0),

    localStorage_set: (_key, _value) =>
    {
        localStorage.setItem(_key, utils.toString(_value, ""));
    },

    localStorage_isNull: (_key)  =>
    {
        return localStorage.getItem(_key) == null;
    },

    
    pallette_index: (changeCounts) => 
    {
        return changeCounts % configs.pallette.list.length;
    },

    pallette_current: () => 
    {
        return configs.pallette.list[utils.localStorage_get_Int(environment.localStorage.keys.pagemode)];
    },


    pallette_change: () => 
    {
        let _pallette = utils.pallette_current();
        for (let i = 0; i < _pallette.values.length; i++)   utils.css_set(_pallette.values[i].k, _pallette.values[i].v);
    },

    // EVENTS
    event_onPalletteChange: () =>  utils.invoke(environment.localStorage.keys.onPalletteChange),
    event_onPathChange: (path="/") =>  utils.invoke(environment.localStorage.keys.onPathChange, path),
}


//--------------------------------------------------------------------------------------------
//------------ FUNCTIONS ---------------------------------------------------------------------
const func_update_pallette = ()=> utils.pallette_change();
const func_change_location = (path)=> location=path;
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//------------ EVENTS ------------------------------------------------------------------------
const events = 
{
    [environment.localStorage.keys.onPalletteChange]: (data=null) => func_update_pallette(),
    [environment.localStorage.keys.onPathChange]: (data="/") => func_change_location(data),
};
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//------------ BEHAVIOUR FUNCTIONS -----------------------------------------------------------
const behaviour_awake = () => // AWAKE
{
    func_update_pallette();
};
const behaviour_update = () => // UPDATE
{
};
const behaviour_message = (message) => 
{
    events[message.key](message.data);
} ;
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//------------ BEHAVIOURS --------------------------------------------------------------------
utils.subscribe(behaviour_message); // Each Message event invoked
utils.onload( e => 
{
    behaviour_awake(); // AWAKE => When loaded is all loaded
    setInterval(behaviour_update, 16); // UPDATE => 60 FPS => 16ms
}); 
