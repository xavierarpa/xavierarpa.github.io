import { utils, environment } from "../../js/environment.mjs";
1
const ID_BUTTON_SWITCH = 'switch_pageMode';

const get_pagemode = () => utils.toInt(utils.localStorage_get(environment.localStorage.keys.pagemode, "0"), 0);
const set_pagemode = (val) => utils.localStorage_set(environment.localStorage.keys.pagemode, val);
const refresh_pallette = () => utils.pallette_change(get_pagemode());

document.addEventListener(environment.dom.keys.onLoaded, function(event)
{
    refresh_pallette(); //Cargamos la paleta actual.
    //
    utils.id(ID_BUTTON_SWITCH).onclick = () =>
    {
        set_pagemode(get_pagemode()+1); // Avanzamos la paleta si presiona el botón.
        refresh_pallette(); //Cargamos la paleta actual.
    }
});

