class Select extends Validate {
    constructor(select) {
        super();
        this.select = select
    }

    validateDropdown() {
        this.select.addEventListener("change", (e) => {
            const {
                value
            } = e.target;
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
select.validateDropdown();