const K_PAGE_MODE = 'pagemode';
const K_PAGE_MODE_TYPE_DARK = 'Dark';
const K_PAGE_MODE_TYPE_LIGHT = 'Light';
const K_PAGE_MODE_TYPE_DEFAULT = K_PAGE_MODE_TYPE_DARK;

// by default assign page mode as default if chache info was not found !
if (localStorage.getItem(K_PAGE_MODE) == null)  localStorage.setItem(K_PAGE_MODE, K_PAGE_MODE_TYPE_DEFAULT);

// on DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) 
{
    var switchButton = document.getElementById("switch_pageMode");
    switchButton.onclick = () => setPageMode(localStorage.getItem(K_PAGE_MODE) == K_PAGE_MODE_TYPE_DARK);
});

// func to switch "page mode"
function setPageMode(status) 
{
    localStorage.setItem(K_PAGE_MODE, (status ? K_PAGE_MODE_TYPE_LIGHT : K_PAGE_MODE_TYPE_DARK));
}