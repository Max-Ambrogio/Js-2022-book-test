"use strict";

// const { init } = require("browser-sync");
(function () {
  //locate all span text, give them a class for each to apply a tooltip style.
  window.newTooltip = function () {
    //creates class on all spans
    function makeClass(span_array) {
      span_array.forEach(function (span, ndx) {
        span.classList.add('tooltip', "section-".concat(ndx));
      });
    } //creates a new Div and adds a class


    function createDiv(spans, toolTip, location) {
      var newDiv = document.createElement('div');
      newDiv.classList.add("text-information");
      newDiv.innerText = toolTip;
      return newDiv;
    }

    function createToolTip(selector) {
      console.log('init', selector);
      var element = document.querySelector(selector);
      var spans = document.querySelectorAll('span');
      var toolTip = element.getAttribute('data-tooltip');
      var location = element.getBoundingClientRect();
      makeClass(spans);
      var toolData = createDiv(spans);
      element.prepend(toolData); // element.addEventListener("click" , toolData)

      console.log(spans);
      console.log(toolTip);
    }

    return {
      init: createToolTip
    };
  }();
})();
//# sourceMappingURL=tooltip.js.map
