// const { init } = require("browser-sync");

(function(){

    //locate all span text, give them a class for each to apply a tooltip style.
    window.newTooltip = (function(){

        //creates class on all spans
        function makeClass(span_array){
            span_array.forEach((span, ndx) => {
                span.classList.add('tooltip' , `section-${ndx}`)
            })
        }


        //creates a new Div and adds a class
        function createDiv(spans , toolTip , location){
            const newDiv = document.createElement('div');
            newDiv.classList.add("text-information");
            newDiv.innerText = toolTip

            
            return newDiv
        }

        function createToolTip(selector){
            console.log('init' , selector)

            const element = document.querySelector(selector);
            const spans = document.querySelectorAll('span');
            const toolTip = element.getAttribute('data-tooltip');

            const location = element.getBoundingClientRect();

            makeClass(spans);

            const toolData = createDiv(spans)
            element.prepend(toolData)
            // element.addEventListener("click" , toolData)
            console.log(spans)
            console.log(toolTip)
        }

        return {
            init: createToolTip
        }

    })();

})();
