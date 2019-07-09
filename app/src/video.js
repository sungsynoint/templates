class Video extends Validate {
    constructor(select) {
        super();
        this.select = select;
    }

    validateVideo() {
        this.select.addEventListener("play", (e) => {
            setTimeout(() => {
                this.enableButton(true)
            }, 2000)
        })
    }
}


const selectId = document.querySelector("#video");
const select = new Video(selectId);

select.validateVideo();