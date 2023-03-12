import { css, environment } from "../../js/environment";

const ID_BUTTON_SWITCH = 'switch_pageMode';
// const K_DATA = 'data';


document.addEventListener(environment.dom.keys.onLoaded, function(event) 
{
    console.log("NEW WORLD");
    refresh_pallette(); //Cargamos la paleta actual
    document.getElementById(ID_BUTTON_SWITCH).onclick = () =>  
    {
        console.log("SWITCH");
        set_pagemode(get_pagemode()+1); // Avanzamos la paleta si presiona el botón
    }
});

const get_pagemode = () => Number(environment.localStorage.get(environment.localStorage.keys.pagemode,"0"));
const set_pagemode = (val) => environment.localStorage.set(environment.localStorage.keys.pagemode, String(val)) ;
const refresh_pallette = () =>  environment.pallette.change(document, get_pagemode());