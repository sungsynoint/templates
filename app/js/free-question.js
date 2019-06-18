class Input extends Validate {
    constructor(select) {
        super();
        this.select = select;
    }

    validateInput() {
        this.select.addEventListener("input", (e) => {
            const value = e.target.value;
            this.enableButton(value.length > 1)
        });
        $(document).ready(function () {
            $("input#input_text, textarea#textarea2").characterCounter();
        });
    }
}

const selectId = document.querySelector("#textarea2")
const select = new Input(selectId);

select.validateInput();