class Select extends Validate {
    constructor(select) {
        super();
        this.select = select
    }

    validateDropdown() {
        this.select.addEventListener("change", (e) => {
            const value = e.target.value;
            const optionValue = value === "option";
            this.enableButton(!optionValue)
        })
        $(document).ready(function () {
            $("select").formSelect();
        });
    }
}

const selectId = document.querySelector("#select_question");
const select = new Select(selectId);


const radioId = document.querySelector("#single-question")
const radio = new Select(radioId)

select.validateDropdown();