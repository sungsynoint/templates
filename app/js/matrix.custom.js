class MatrixCustom extends Validate {
    constructor(element) {
        super();
        this.element = element;
    }
    validateMatrix() {
        this.element.forEach(group => {
            group.addEventListener("change", () => {
                const index = document.querySelectorAll('[type="radio"]:checked')
                    .length;
                this.enableButton(index === this.element.length)
            });
        });
    }
}

const element = document.querySelectorAll(".question-body");
const validate = new MatrixCustom(element)
validate.validateMatrix();