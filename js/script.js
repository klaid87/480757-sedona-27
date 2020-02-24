var button = document.querySelector(".search-modal-button");
var popup = document.querySelector(".search-form");
var checkIn = document.querySelector("[name=check-in]");


button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("form-show");
});
