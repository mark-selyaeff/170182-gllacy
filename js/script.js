var link = document.querySelector('.feedback-form');
var popup = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');
var exit = document.querySelector('.modal-content-close');
var catalog = document.querySelector('.main-menu ul > li:first-child a');
var catalog_popup = document.querySelector('.catalog-modal-content');

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
});

exit.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

catalog.addEventListener("mouseover", function(event) {
	event.preventDefault();
	catalog_popup.classList.add("modal-show");
});

catalog.addEventListener("mouseout", function(event) {
	catalog_popup.classList.remove("modal-show");
});