var button = document.querySelector(".search-modal-button");
var popup = document.querySelector(".search-form");
var checkIn = document.querySelector("[name=date-check-in]");


button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("form-hide");
    checkIn.focus();
});
