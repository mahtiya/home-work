

var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormSelect = document.querySelector(".form_select");
var result = document.querySelector(".form_result")

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var inputValue = elFormInput.value;
    var selectValue = elFormSelect.value;

    result.textContent = `${inputValue * selectValue}`;
    
})





