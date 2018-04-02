var contextList = ["selection","link","image","page"];

for(i=0;i<contextList.length;i++)
{
    var context= contextList[i];
    var titleX= "Twitter Social ToolKit for "+context+" on your twitter profile";

    chrome.contextMenus.create({
        title:titleX,
        contexts: [context],
        onclick: myfunction,
        id: context
    });

}



function myfunction(data) {
    switch (data.menuItemId){
        case 'selection':
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+data.selectionText})
            break;

        case 'link':
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.linkUrl})
            break;

        case 'image':
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.srcUrl})
            break;

        case 'page':
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text=Mypage"})


    }

}