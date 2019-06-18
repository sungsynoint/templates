class Validate {
    constructor() {
        this.items = [];
        this.nextBtn = document.querySelector("#next-question");
        this.progressBar = document.querySelector("#progress");
    }

    enableButton(condition) {
        let btnClass = "btn waves-effect waves-light btn-small"
        condition ? this.nextBtn.setAttribute("class", btnClass) : this.nextBtn.setAttribute("class", btnClass += " disabled")
    }

}