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
//** Pour trouver le nombre des bullets point à ajouter**//

let dotsnumber = slides.length
console.log(dotsnumber)



//** Pour recuperer les fleches**//
let flechegauche = document.querySelector(".arrow.arrow_left")
let flechedroite = document.querySelector(".arrow.arrow_right")

//** Pour ecouter les fleches**//
flechegauche.addEventListener("click", (Event) => {
	console.log(Event.target.alt)
})

flechedroite.addEventListener("click", (Event) => {
	console.log(Event.target.alt)
})


//** Recuperer les bullet points **//
let bulletpoint = document.querySelectorAll(".dots .dot")
console.log(bulletpoint.length)
for (let i = 0; i < bulletpoint.length; i++) {
	console.log(bulletpoint[i]) //**  Vérifier que les éléments existent bien **//

	bulletpoint[i].addEventListener("click", (event) => {
		//** */ Supprimer la classe "dot_selected" de tous les points **//
		bulletpoint.forEach(dot => dot.classList.remove("dot_selected"))

		//**  Ajouter la classe "dot_selected" au point cliqué **//
		event.target.classList.add("dot_selected")

	})
}