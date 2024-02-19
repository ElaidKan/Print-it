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
// const récupérer Eléments HTML

const btnSlideLeft = document.querySelector(".arrow_left");
const btnSlideRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");

// fonction qui met à jour les images et textes
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
// fonction qui met à jour la class dot selected

function changeDot() {
	const dots = document.querySelectorAll(".dot")
	dots.forEach((dot, i) => {
		if (i === numero)
			dot.classList.add("dot_selected")
		if (i !== numero)
			dot.classList.remove("dot_selected")
	})
}
// boucle for qui crée les différentes div de dots

for (var i = 0; i < slides.length; i++) {
	console.log(slides[i]);
	const dot = document.createElement("div")
	dot.classList.add("dot") 
	dots.appendChild(dot)
	if(i===numero) {
		dot.classList.add("dot_selected")
	}
}

// initialisation de la page
function init() {
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[numero].image}`;
	document.querySelector(".services").innerHTML = slides[numero].tagLine;
	btnSlideLeft.addEventListener("click", () => {
		changeSlide(-1);

	})
	btnSlideRight.addEventListener("click", () => {
		changeSlide(1);

	})
}
init();