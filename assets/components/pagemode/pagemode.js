import { utils, environment } from "../../js/environment.mjs";

const ID_BUTTON_SWITCH = 'switch_pageMode';

const get_pagemode = () => utils.toInt(utils.localStorage_get(environment.localStorage.keys.pagemode, "0"), 0);
const set_pagemode = (val) => utils.localStorage_set(environment.localStorage.keys.pagemode, String(val));
const refresh_pallette = () => utils.pallette_change(document, get_pagemode());


document.addEventListener(environment.dom.keys.onLoaded, function(event) 
{
    console.log("NEW WORLD");
    refresh_pallette(); //Cargamos la paleta actual
    document.getElementById(ID_BUTTON_SWITCH).onclick = () =>  
    {
        console.log("SWITCH");
        set_pagemode(get_pagemode()+1); // Avanzamos la paleta si presiona el botón.
    }
});

