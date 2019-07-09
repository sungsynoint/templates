class Radio extends Validate {
    constructor(select) {
        super();
        this.select = select
    }

    validateRadio() {
        this.select.addEventListener("change", (e) => {
            const checked = e.target.checked;
            this.enableButton(checked)
        })
    }
}

const selectId = document.querySelector("#single-question")
const select = new Radio(selectId);

select.validateRadio();