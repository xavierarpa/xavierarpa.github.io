// Data
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
        get: (_key, _defaultValue)  =>
        {
            if(localStorage.getItem(_key) == null)  localStorage.setItem(_key, _defaultValue);
            return localStorage.getItem(_key);
        },
        set: (_key, _value) =>
        {
            localStorage.setItem(_value)
        },
        keys:
        {
            pagemode: "pagemode"
        }
    },
    pallette:
    {
        change: (_doc, changeCounts) => 
        {
            let _pallette = environment.pallette.list[changeCounts % environment.pallette.list.length];
            console.log("change to this!", {_pallette});
            for (let i = 0; i < _pallette.length; i++) css.var.set(_doc,_pallette[0],_pallette[1]);
        },
        list:
        [
            [
                [css.var.color.primary, css.var.color.light],
                [css.var.color.secondary, css.var.color.black],
                [css.var.color.gray, css.var.color.gray],
            ],
            [
                [css.var.color.primary, css.var.color.black],
                [css.var.color.secondary, css.var.color.light],
                [css.var.color.gray, css.var.color.gray],
            ],
        ],
    }
};

// const _data = new URLSearchParams(window.location.search).get(K_DATA);
// console.log(_data);

// CSS
export const css =
{
    var:
    {
        set: (_document, _variable, _value) => _document.documentElement.style.setProperty(_variable, `var(${_value})`),
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