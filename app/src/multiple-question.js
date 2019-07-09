class MutipleQuestion extends Validate {
    constructor(element) {
        super();
        this.element = element;
    }
    validateCheckbox() {
        for (const value of this.element) {
            value.addEventListener("change", () => {
                value.checked ? this.items.push(value) : this.items.pop(value)
                this.enableButton(this.items.length >= 1)
            });
        }
    }
}

const element = document.querySelectorAll('[type=checkbox]');
const validate = new MutipleQuestion(element)
validate.validateCheckbox();