const K_PAGE_MODE = 'pagemode';
////////////////////////////////
////////////////////////////////
const K_PAGE_MODE_TYPE_DARK = 'Dark';
const K_PAGE_MODE_TYPE_LIGHT = 'Light';
const K_PAGE_MODE_TYPE_DEFAULT = K_PAGE_MODE_TYPE_DARK;
////////////////////////////////
////////////////////////////////
if (localStorage.getItem(K_PAGE_MODE) == null)  localStorage.getItem(K_PAGE_MODE, K_PAGE_MODE_TYPE_DEFAULT);
////////////////////////////////
////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) 
{
    console.log("pagemode.js");
    var switchButton = document.getElementById("switch_pageMode");
////////////////////////////////
////////////////////////////////
    switchButton.onclick = function() 
    {
        setPageMode(localStorage.getItem(K_PAGE_MODE) == K_PAGE_MODE_TYPE_DARK);        
    };
});
////////////////////////////////
////////////////////////////////
function setPageMode(status)
{
    if(status)
    {
        localStorage.setItem(K_PAGE_MODE, 'Light');
    }
    else
    {
        localStorage.setItem(K_PAGE_MODE, 'Dark');
    }
}