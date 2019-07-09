"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MutipleQuestion = function (_Validate) {
    _inherits(MutipleQuestion, _Validate);

    function MutipleQuestion(element) {
        _classCallCheck(this, MutipleQuestion);

        var _this = _possibleConstructorReturn(this, (MutipleQuestion.__proto__ || Object.getPrototypeOf(MutipleQuestion)).call(this));

        _this.element = element;
        return _this;
    }

    _createClass(MutipleQuestion, [{
        key: "validateCheckbox",
        value: function validateCheckbox() {
            var _this2 = this;

            var _loop = function _loop(value) {
                value.addEventListener("change", function () {
                    value.checked ? _this2.items.push(value) : _this2.items.pop(value);
                    _this2.enableButton(_this2.items.length >= 1);
                });
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.element[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    _loop(value);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return MutipleQuestion;
}(Validate);

var element = document.querySelectorAll('[type=checkbox]');
var validate = new MutipleQuestion(element);
validate.validateCheckbox();
