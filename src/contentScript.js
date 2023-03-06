console.log("I am running in contentScript file.....", chrome)
// console.log(chrome.webRequest)
// let myFunction=()=>{
//     setInterval(()=>{
//         let newArray= document.getElementsByClassName("Zc1Emd QIJiHb")
//         console.log(newArray)
//         console.log('contentent--')

//     },5000)
// }
// // myFunction();
// {/* <input at-attr="input" autocomplete="on" name="email" required="required" id="input-19" type="email"></input> */}

const observer = new MutationObserver(function (mutationsList, observer) {
  // console.log(mutationsList)
  for (let mutation of mutationsList) {
    if (
      mutation.type === "childList" ||
      (mutation.type === "attributes" && mutation.addedNodes.length > 0)
    ) {
      // your code to handle the change on the web page
      let data = []
      let pageContent = document.querySelector("form")
      for (var contentent of pageContent) {
        if (contentent.value) {
          let MsgObj = {
            msg: contentent.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
          }
          data = [...data, MsgObj]
        }

        // send a message to the background script with the form data

        // break;
      }
      chrome.runtime.sendMessage(
        { type: "form-submitted", data: data },
        (resp) => {
          console.log(resp)
        }
      )
      // console.log('================data===========',data)

      break
    }
  }
})
observer.observe(document.body, { childList: true, subtree: true })

// declare a listener for the webRequest event
// input.addEventListener("submit", function (event) {
//   event.preventDefault()

//   // get the form data
//   const formData = new FormData(event.target)
//   const data = {}
//   for (let [key, value] of formData.entries()) {
//     data[key] = value
//   }

//   // send a message to the background script with the form data
//   chrome.runtime.sendMessage({ type: "form-submitted", data: data })
// })

// }
// console.log('objjjjjjjjjjjjjjjjjjjjj',obj)
//  console.log(' helllooooooooooooo entered......................',pageContent.innerText)

// .addEventListener("submit", function (event) {
//   event.preventDefault()

//   const formData = new FormData(event.target)
//   console.log('formData=============',formData)
//   const data = {}
//   for (let [key, value] of formData.entries()) {
//     data[key] = value
//   }
//   console.log('data==========',data)
//   return data
//   // send a message to the background script with the form data
// })
//   chrome.runtime.sendMessage({ type: "form-submitted", data: pageContent })

//   let obj={}
//   for (let input of pageContent) {
//     console.log(
//         "------------xcfxdytfuygiuoipo---",
//         input?.value
//       )

//       break;
//     }
// chrome.runtime.sendMessage({ type: "form-submitted", data: input})
