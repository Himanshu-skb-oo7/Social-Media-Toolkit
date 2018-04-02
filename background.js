chrome.contextMenus.create({
    title:"Twitter Social Toolkit ",
    contexts: ["selection"],
    onclick: myfunction
});

function myfunction(selectedText) {
    chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+selectedText.selectionText})
}