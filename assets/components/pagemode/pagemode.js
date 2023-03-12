const K_DATA = 'data';
const ID_BUTTON_SWITCH = 'switch_pageMode';
const K_PAGE_MODE = 'pagemode';
const K_PAGE_MODE_TYPE_DARK = 'Dark';
const K_PAGE_MODE_TYPE_LIGHT = 'Light';
const K_PAGE_MODE_TYPE_DEFAULT = K_PAGE_MODE_TYPE_DARK;

// by default assign page mode as default if chache info was not found !
if (localStorage.getItem(K_PAGE_MODE) == null)  localStorage.setItem(K_PAGE_MODE, K_PAGE_MODE_TYPE_DEFAULT);

// on DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) 
{
    document.getElementById(ID_BUTTON_SWITCH).onclick = () => setPageMode(localStorage.getItem(K_PAGE_MODE) == K_PAGE_MODE_TYPE_DARK);

    const _data = new URLSearchParams(window.location.search).get(K_DATA);
    console.log(_data);

});

// func to switch "page mode"
function setPageMode(status) 
{
    localStorage.setItem(K_PAGE_MODE, (status ? K_PAGE_MODE_TYPE_LIGHT : K_PAGE_MODE_TYPE_DARK));
}