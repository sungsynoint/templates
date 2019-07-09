"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
    function Validate() {
        _classCallCheck(this, Validate);

        this.items = [];
        this.nextBtn = document.querySelector("#next-question");
        this.progressBar = document.querySelector("#progress");
    }

    _createClass(Validate, [{
        key: "enableButton",
        value: function enableButton(condition) {
            var btnClass = "btn waves-effect waves-light btn-small";
            condition ? this.nextBtn.setAttribute("class", btnClass) : this.nextBtn.setAttribute("class", btnClass += " disabled");
        }
    }]);

    return Validate;
}();
