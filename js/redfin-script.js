"use strict";

let urlRedfinHomePattern = /^https:\/\/www\.redfin\.com\/?$/;
let urlRedfinPattern = /https:\/\/www\.redfin\.com\/.+/;

if (window.location.href.match(urlRedfinHomePattern)) {
  let redfinInput = document.getElementById("search-box-input");
  window.addEventListener("load", () => {
    redfinInput.addEventListener("focus", () => {
      return setTimeout(() => navigator.clipboard.readText().then(clipText =>  {
        redfinInput.focus()
        
        setTimeout(() => {
        document.execCommand("insertText", false, clipText);
        var event = new KeyboardEvent('keypress', {'keyCode': 13, 'which': 13});
      }, 200);
        
        setTimeout(() => {
          var searchButton = document.querySelector('.SearchButton');
          searchButton.click()
        }, 400);
        
       


      }), 300);
    });
    setTimeout(() => {
      //return 
      redfinInput.focus();
    }, 300);
  });
  
} else if (window.location.href.match(urlRedfinPattern)) {
  let element = document.querySelectorAll('.statsValue');


  function copyAlert(zestimateElement) {
    let oldText = zestimateElement.innerText;
    zestimateElement.innerText = "Copied!";
    zestimateElement.classList.add("animate");
    zestimateElement.addEventListener('animationend', () => {
      zestimateElement.classList.remove("animate");
      zestimateElement.innerText = oldText;
    });
  }

  function copyZestimate() {
    let zestimate = element[0].innerText;
    let zestimate_final = zestimate.slice(1, zestimate.length);
    navigator.clipboard.writeText(zestimate_final).then(() => copyAlert(element[0]));
  }

  element[0].addEventListener('click', copyZestimate);
}
/* Simulate Enter key after user pressing Space" */


let redfinInput = document.getElementById("search-box-input");
let redfinSearchButton = document.querySelectorAll(".searchInputNode > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > button:nth-child(2)");
redfinInput.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    console.log("Enter pressed");
    setTimeout(function () {
      console.log(redfinSearchButton);
      redfinSearchButton[0].click();
    }, 500);
  }
});
/* Create and append images */

var realtorButton = document.createElement('div');
realtorButton.id = 'imgcontainer';
/*Realtor Image and Link */

var realtorButtonImg = document.createElement("img");
realtorButtonImg.src = chrome.runtime.getURL("img/try-realtor.png");
realtorButtonImg.className = "realtor-search-img";
realtorButtonImg.id = "search-img-realtor";
realtorButton.appendChild(realtorButtonImg);

realtorButtonImg.onclick = function () {
  window.open('https://www.realtor.com/', '_blank');
};


//check redfin price content
console.log(document.querySelector("[data-rf-test-id='abp-homeinfo-homemainstats'] .statsValue span").innerHTML);


//auto-click the searcg button when the url contains the word filter/sort

var filterAndSortElement = document.querySelectorAll('.searchInputNode > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > button:nth-child(2)');

var filterAndSortInput = document.createElement('input');
filterAndSortInput.value = filterAndSortElement[0].value;


//remove Google Login

// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.type === "childList") {
//       if (document.getElementById("container")) {
//         document.getElementById("container").remove();
//       }
//     }
//   });
// });
// observer.observe(document.body, { childList: true });
