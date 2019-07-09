"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MatrixCustom = function (_Validate) {
    _inherits(MatrixCustom, _Validate);

    function MatrixCustom(element) {
        _classCallCheck(this, MatrixCustom);

        var _this = _possibleConstructorReturn(this, (MatrixCustom.__proto__ || Object.getPrototypeOf(MatrixCustom)).call(this));

        _this.element = element;
        return _this;
    }

    _createClass(MatrixCustom, [{
        key: "validateMatrix",
        value: function validateMatrix() {
            var _this2 = this;

            this.element.forEach(function (group) {
                group.addEventListener("change", function () {
                    var index = document.querySelectorAll('[type="radio"]:checked').length;
                    _this2.enableButton(index === _this2.element.length);
                });
            });
        }
    }]);

    return MatrixCustom;
}(Validate);

var element = document.querySelectorAll(".question-body");
var validate = new MatrixCustom(element);
validate.validateMatrix();
