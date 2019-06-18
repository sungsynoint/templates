class MutipleQuestion extends Validate {
    constructor(checkbox) {
        this.checkbox = checkbox
        super();
    }
    validateCheckbox(checkbox) {
        for (const value of checkbox) {
            value.addEventListener("change", () => {
                value.checked ? this.items.push(value) : this.items.pop(value)
                this.enableButton(this.items.length >= 1)
            });
        }
    }
}

const checkbox = document.querySelectorAll('[type=checkbox]');
const validate = new MutipleQuestion(checkbox)
validate.validateCheckbox();