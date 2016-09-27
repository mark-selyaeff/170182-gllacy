var link = document.querySelector('.feedback-form');
var popup = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');
var exit = document.querySelector('.modal-content-close');

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