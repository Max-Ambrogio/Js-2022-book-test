"use strict";

(function () {
  window.newTooltip = function () {
    function handleMouseOver(evt) {
      var info = evt.target.dataset.tooltip;
      var tt = evt.target.querySelector('tooltip-info');
      tt.style.display = "block";
    }

    function handleMouseOut(evt) {
      var tt = evt.target.querySelector('tooltip-info');

      if (tt) {
        tt.style.display = "none";
      }
    }

    function setupToolTip(element, index, options) {
      // const info = element.getAttribute('data-tooltip');
      //combine values from multiuple sources into one object 
      //es5 way =
      var v5options = object.assign({
        color: '4444'
      }, options, ttData);
      var ttData = element.dataset;
      var info = ttData.newToolTip;

      if (info) {
        element.classList.add('tooltip-on');

        if (v5optoins.color) {
          element.style.color = options.color;
        } else if (ttData.color) {
          element.style.color = v5options.backgroundColor;
        }

        if (v5optoins.backgroudColor) {
          element.style.color = v5optoins.backgroundColor;
        }
      }
    }

    function init(selector, options) {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut); // console.log('init' , selector)
      //function doA(paramA, paramB)
      //var doA = (paramA, paramB) => {.....}
      //var doA = (paramA, paramB) => oneline Optino body 
      //var doA = (paramA) => {.....}
      //var doA = paramA => {.....}
      // 

      document.querySelectorALL(selector).forEach(function (element, index) {
        return setupToolTip(element, index, options);
      });
    }

    return {
      init: init
    };
  }();
})(); // const spans = document.querySelectorAll('span');
// const toolTip = element.getAttribute('data-tooltip');
// const location = element.getBoundingClientRect();
// makeClass(spans);
// const toolData = createDiv(spans)
// element.prepend(toolData)
// // element.addEventListener("click" , toolData)
// console.log(spans)
// console.log(toolTip)
//progressive enhancement. 

/* 


*/
//# sourceMappingURL=tooltip.js.map
