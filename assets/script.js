const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// const et let

const btnSlideLeft = document.querySelector(".arrow_left");
const btnSlideRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot_selected");
const bannerImg = document.querySelector(".banner-img");

// function
let numero = 0;
function changeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length - 1) {
		numero = 0;	
	}
	changeDot(-1)
	if (numero < 0) {
		numero = slides.length - 1;	
	}
	changeDot(1)
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[numero].image}`;
	document.querySelector(".services").innerHTML = slides[numero].tagLine;
}

function changeDot() {
	const dots = document.querySelectorAll(".dot")
	dots.forEach((dot, i) => {
		if (i === numero)
			dot.classList.add("dot_selected")
		if (i !== numero)
			dot.classList.remove("dot_selected")
	})
}

// eventListener

btnSlideLeft.addEventListener("click", () => {
	changeSlide(-1);

})
btnSlideRight.addEventListener("click", () => {
	changeSlide(1);

})