class Satisfaction extends Validate {
    constructor(element) {
        super();
        this.element = element;
    }
    validateInput() {
        for (const value of this.element) {
            value.addEventListener("change", (e) => {
                const result = e.target.checked;
                this.enableButton(result)
            });
        }

        $(document).ready(function () {
            $(".tooltipped").tooltip();
        });
    }
}

const element = document.querySelectorAll('[name="group1"]')
const validate = new Satisfaction(element)
validate.validateInput();