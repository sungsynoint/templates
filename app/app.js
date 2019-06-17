"use strict"

const Validate = function (selector) {
    this.array = new Array();
    this.selectorId = selector;
    this.nextBtn = document.querySelector("#next-question");
    this.previousBtn = document.querySelector("#previous-question");
    this.progressBar = document.querySelector("#progress");
    this.enableButton = function () {
        const enableClass = "waves-effect waves-light btn blue accent-3";
        this.nextBtn.setAttribute("class", enableClass)
    };
    this.disableButton = function () {
        const disableClass = "disabled btn";
        this.nextBtn.setAttribute("class", disableClass);
    };
    this.enableProgress = function () {
        this.progressBar.setAttribute("style", "width: 10%")
    };
    this.disableProgress = function () {
        this.progressBar.setAttribute("style", "width: 0%")
    }
}

const question = new Validate();

Validate.prototype.selectorAll = document.querySelectorAll('[type=checkbox]');
Validate.prototype.validateCheckbox = function () {
    for (const value of this.selectorAll) {
        value.addEventListener("change", () => {
            value.checked ? this.array.push(value) : this.array.pop(value)
            this.array.length >= 1 ? this.enableButton() + this.enableProgress() :
                this.disableButton() + this.disableProgress();
        });
    }

}

Validate.prototype.validateDropdown = function () {
    question.selectorId = document.querySelector("#select_question");
    this.selectorId.addEventListener("change", (e) => {
        const {
            value
        } = e.target;

        const optionValue = value === "option";
        !optionValue ? this.enableButton() + this.enableProgress() :
            this.disableButton() + this.disableProgress();
    })

    this.previousBtn.addEventListener("click", function () {
        window.history.back()
    });

    $(document).ready(function () {
        $("select").formSelect();
    });

}



question.validateCheckbox();
question.validateDropdown();