const input = document.querySelector('#validation-input')
const correctLength = input.dataset.length

input.addEventListener('blur', onInputChange)

function onInputChange(event) {

    if (input.value.trim().length === Number(correctLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }

}