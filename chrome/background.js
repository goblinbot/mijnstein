chrome.runtime.onInstalled.addListener(function(){

    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('the color is green.');
    });

    chrome.webNavigation.onCompleted.addListener(function (){
        alert("Daar zijn we!");
    },
    {
        url: [{ hostSuffix: ''}]
    }
    );

});
