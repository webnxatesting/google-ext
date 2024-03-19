"use strict";

let realtorButton = document.querySelectorAll(".button.rui__sc-18tz23v-0.jbDtbI.cancel.autocomplete-cancel");


let urlRealtorHomePattern = /^https:\/\/www\.realtor\.com\/?$/;
let urlRealtorPattern = /https:\/\/www\.realtor\.com\/.+/; // if (window.location.href.match(urlRealtorHomePattern)) 
let realtorPrice = document.querySelectorAll('.rui__sc-19ei9fn-0.bhKNAr.rui__wbiuo8-0.iQocTl.sc-pZnSc.jEfqsK');

if (window.location.href.match(urlRealtorPattern)) {
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

  function copyRealtorPrice() {
    let zestimate = element[0].innerText;
    let zestimate_final = zestimate.slice(1, zestimate.length);
    navigator.clipboard.writeText(zestimate_final).then(() => copyAlert(element[0]));
  }

  element[0].addEventListener('click', copyRealtorPrice);
}
/* Simulate Enter key after user pressing Space" */


if (window.location.href.match(urlRealtorHomePattern)) {
  let realtorInput = document.getElementById("search-bar");
  window.addEventListener("load", () => {
  let clearButton = document.querySelector("#__next > div > div.main-container > div:nth-child(3) > div.sc-4fda623f-0.iRYmxd > div.Herostyles__StyledHero-rui__u7lvcm-0.ghtlKz.sc-4fda623f-3.FxFae > div.hero-content > div > div > div > header > div > div > button.styles__StyledButton-rui__sc-18tz23v-0.ieLPfM.ClearButton__StyledClearButton-rui__sc-12r8a5-0.bznJJq");
  clearButton.click()

    realtorInput.addEventListener("focus", () => {
      return setTimeout(() => navigator.clipboard.readText().then(clipText =>  {
        realtorInput.focus()
        document.execCommand("insertText", false, clipText);
        var event = new KeyboardEvent('keypress', {'keyCode': 13, 'which': 13});
        
        
        setTimeout(() => {
          var searchButton = document.querySelector("#__next > div > div.main-container > div:nth-child(3) > div.sc-4fda623f-0.iRYmxd > div.Herostyles__StyledHero-rui__u7lvcm-0.ghtlKz.sc-4fda623f-3.FxFae > div.hero-content > div > div > div > header > div > div > button.base__StyledButton-rui__ermeke-1.iEcRMl.SearchButton__StyledSearchButton-rui__sc-10nzyg4-0.eqqZGT");
          searchButton.click()
        }, 500);
        
       


      }), 100);
    });
    setTimeout(() => {
      //return 
      realtorInput.focus();
    }, 600);
  });
  
} 