window.onload = function () {
    if (window.location.href.includes("filter/sort") ) {
        console.log("ok");
        
        setTimeout (function() {

        let redfinSearchButtonFilterPage = document.querySelector("#headerUnifiedSearch > div > form > div > button");
        redfinSearchButtonFilterPage.click();
        }, 100);

    } else {
        console.log("not ok");
    }
  }