"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ToolTipClass = /*#__PURE__*/function () {
  function ToolTipClass(selector, options) {
    var _this = this;

    _classCallCheck(this, ToolTipClass);

    // console.log('init' , selector)
    //function doA(paramA, paramB)
    //var doA = (paramA, paramB) => {.....}
    //var doA = (paramA, paramB) => oneline Optino body 
    //var doA = (paramA) => {.....}
    //var doA = paramA => {.....}
    // 
    document.querySelectorALL(selector).forEach(function (element, index) {
      return _this.setupToolTip(element, index, options);
    });
  }

  _createClass(ToolTipClass, [{
    key: "handleMouseOver",
    value: function handleMouseOver(evt) {
      var info = evt.target.dataset.tooltip;
      var tt = evt.target.querySelector('tooltip-info');
      tt.style.display = "block";
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(evt) {
      var tt = evt.target.querySelector('tooltip-info');

      if (tt) {
        tt.style.display = "none";
      }
    }
  }, {
    key: "setupToolTip",
    value: function setupToolTip(element, index, options) {
      // const info = element.getAttribute('data-tooltip');
      //combine values from multiuple sources into one object 
      //es5 way =
      var v5options = object.assign({
        color: '4444'
      }, options, ttData);
      console.log(v5options); //es6 way = 

      var v6options = _objectSpread(_objectSpread({
        color: '4444',
        fontWeight: 'bold'
      }, options), ttData);

      console.log(v6options);
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

        element.appendChild(tooltip);
        element.addEventListener('mouseover', this.handleMouseOver);
        element.addEventListener('mouseout', this.handleMouseOut);
      }
    }
  }]);

  return ToolTipClass;
}();
//# sourceMappingURL=tooltip-class.js.map
