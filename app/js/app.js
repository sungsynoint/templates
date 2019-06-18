class Validate {
    constructor() {
        this.items = [];
        this.nextBtn = document.querySelector("#next-question");
        this.progressBar = document.querySelector("#progress");
    }

    enableButton(condition) {
        const disable = "disabled btn";
        const enable = "btn waves-effect waves-light btn-small";

        if (condition) {

            this.nextBtn.removeAttribute("class", disable);
            this.nextBtn.setAttribute("class", enable)
        } else {
            this.nextBtn.setAttribute("class", disable)
        }
    }

}