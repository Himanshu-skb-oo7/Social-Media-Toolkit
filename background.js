var contextListTwitter = ["selection","link","image","page"];

for(i=0;i<contextListTwitter.length;i++) {
    var context = contextListTwitter[i];
    var titleX = "Share "+jsUcfirst(context)+" On Twitter";

    chrome.contextMenus.create({
        title: titleX,
        contexts: [context],
        onclick: clickHandler,
        id: context+"Twitter"
    });



    var titleX = "Share "+jsUcfirst(context)+" On Facebook";
    chrome.contextMenus.create({
        title: titleX,
        contexts: [context],
        onclick: clickHandler,
        id: context+"Facebook"
    });

}


function clickHandler(data,tab) {
    switch (data.menuItemId){
        case 'selectionTwitter':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"})
            break;

        case 'linkTwitter':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type:"panel"})
            break;

        case 'imageTwitter':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl),type:"panel"})
            break;

        case 'pageTwitter':
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl),type:"panel"})
            break;

        case 'selectionFacebook':
            chrome.windows.create({url: "https://www.facebook.com/sharer/sharer.php?&u="+data.pageUrl+"&quote="+data.selectionText,type:"panel"})
            break;

        case 'pageFacebook':
            chrome.windows.create({url: "https://www.facebook.com/sharer/sharer.php?&u="+data.pageUrl+"&quote=",type:"panel"})
            break;

        case 'linkFacebook':
            chrome.windows.create({url: "https://www.facebook.com/sharer/sharer.php?&u="+data.linkUrl+"&quote=",type:"panel"})
            break;


        case 'imageFacebook':
            chrome.windows.create({url: "https://www.facebook.com/sharer/sharer.php?&u="+data.pageUrl+"&quote=",type:"panel"})
            break;

    }

}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == "loading") {
        if(tab.url == "https://www.facebook.com/dialog/return/close#_=_") {
            chrome.tabs.remove(tabId);
        }

    }
});

function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}