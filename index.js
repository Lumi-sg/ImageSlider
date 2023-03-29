const picture = document.querySelectorAll(".slide");

const navigator = document.querySelectorAll(".nav");

let currentSlide = 0;

function changeSlide(moveTo) {
	if (moveTo >= picture.length) {
		moveTo = 0;
	}
	if (moveTo < 0) {
		moveTo = picture.length - 1;
	}

	picture[currentSlide].classList.toggle("active");
	navigator[currentSlide].classList.toggle("active");
	`~`;
	picture[moveTo].classList.toggle("active");
	navigator[moveTo].classList.toggle("active");

	currentSlide = moveTo;
}

const navNext = document.querySelector("#next").addEventListener("click", () => {
	changeSlide(currentSlide + 1);
});

const navPrev = document.querySelector("#prev").addEventListener("click", () => {
	changeSlide(currentSlide - 1);
});

const bullet = document.querySelectorAll(".nav").forEach((bullet, bulletIndex) => {
	bullet.addEventListener("click", () => {
		if (currentSlide !== bulletIndex) {
			changeSlide(bulletIndex);
		}
	});
});

function automaticSlideChanger() {
	changeSlide(currentSlide + 1);
	setTimeout(automaticSlideChanger, 4000);
}
window.onload = function () {
	setTimeout(automaticSlideChanger, 5000);
};
