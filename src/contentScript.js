
const observer = new MutationObserver((mutations) => {
  // handle the mutations here
  // console.log('DOM mutated!', mutations.);
  for(let node of mutations){
    console.log('mutation text content=',node.addedNodes)
  }

});

const observerOptions = {
  childList: true, // observe changes to the list of children of the observed node
  subtree: true, // observe changes to the entire subtree of the observed node
  attributes: true, // observe changes to the attributes of the observed node
  characterData: true, // observe changes to the text content of the observed node
};


function onPageLoad() {
  // Your content script code here
  // inputParent.closest('')
  const targetNode = document.querySelector("#new_post_text_input");
  const inputParent= document.querySelector('.v-text-field__slot')
  const targetUserName = document.querySelector(".g-user-name.m-verified");
  const sendBtn = document.querySelector(".g-btn.m-rounded.b-chat__btn-submit");
  if (!targetNode || !targetUserName || !sendBtn) {
    //The node we need does not exist yet.
    //Wait 500ms and try again
    window.setTimeout(onPageLoad, 500);
    return;
  } else {
    console.log('content script is readyyyyyyyy.......')

      // inputParent.addEventListener('input',handleEventInputevent,true)
      observer.observe(inputParent, observerOptions);
  }
}

onPageLoad()




