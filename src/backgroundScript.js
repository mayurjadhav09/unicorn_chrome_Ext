console.log("I am running in background Script file....", chrome)
chrome.tabs.onActivated.addListener((tabs)=>{
    // console.log(tabs)
    chrome.webRequest.onCompleted.addListener((details)=>{
        console.log(details)
      })
  })

// chrome.tabs.query((tabs)=>{
//     console.log(tabs)
// })
// listen for the "form-submitted" message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "form-submitted") {
    // store the form data in the extension's local storage
    chrome.storage.local.set({ formData: request.data }, function () {
      console.log("Form data stored in local storage.", request.data)
    })
    sendResponse("Form data stored in local storage.")
    // localStorage.setItem("msgs",JSON.stringify(request.data))
  }
})

chrome.storage.local.get('formData', function(result) {
    console.log('Value retrieved from local storage:', result.myKey);
  });

  