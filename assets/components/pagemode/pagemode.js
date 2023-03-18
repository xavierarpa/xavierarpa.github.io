import { utils, configs, environment } from "../../js/environment.mjs";
//
const ID_BUTTON_SWITCH = 'switch_pageMode';
//
const get_pagemode = () => utils.toInt(utils.localStorage_get(environment.localStorage.keys.pagemode, "0"), 0);
const set_pagemode = (val) => utils.localStorage_set(environment.localStorage.keys.pagemode, val);


utils.onload( event =>
{
    utils.subscribe(m => 
    {
        if(m.key==environment.localStorage.keys.onPalletteChange)
        {
            //Refrescamos
            refreshTextButton();
        }
    }); 
    

    utils.id(ID_BUTTON_SWITCH).onclick = () =>
    {
        set_pagemode(get_pagemode()+1); // Avanzamos la paleta si presiona el botón.
        utils.event_onPalletteChange();
    }
});

const refreshTextButton  =  () =>
{
    let _pallette = configs.pallette.list[utils.pallette_index(changeCounts)];
    utils.id(ID_BUTTON_SWITCH).textContent = `Skin: ${_pallette.name}`;
}