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


//** Pour recuperer les fleches**//
let flechegauche = document.querySelector(".arrow.arrow_left")
let flechedroite = document.querySelector(".arrow.arrow_right")

//** Pour recuperer les bullet points **//
let bulletpoint = document.querySelectorAll(".dots .dot")
console.log(bulletpoint.length)
for (let i = 0; i < bulletpoint.length; i++) {
	console.log(bulletpoint[i])//**  Vérifier que les éléments existent bien **//
	//**  Nous écoutons les bullet points**//
	bulletpoint[i].addEventListener("click", (event) => {
		//** */ Supprimer la classe "dot_selected" de tous les points **//
		bulletpoint.forEach(dot => dot.classList.remove("dot_selected"))

		//**  Ajouter la classe "dot_selected" au point cliqué **//
		event.target.classList.add("dot_selected")

		//**Changement de la bannière et du texte suit suite à la clique sur un bullet point concret**//
		index = i
		updateSlide()//**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//

		//**  Afficher l'élément dans la console**//
		console.log(slides[index])
		console.log(bulletpoint[i])
	})
}

//** Recuperer les images et les taglines**//
let banner = document.querySelector(".banner-img")
let p = document.querySelector("#banner p")
let span = document.querySelector("#banner p span")
console.log(banner, p, span) //**  Afficher l'élément dans la console**//


let index = 0 // Démarrer à la première slide//
i = 0// Démarrer au premièr point//

//**  Afficher l'élément dans la console**//
console.log(slides[index])
console.log(bulletpoint[i])

//**  Nous écoutons la flèche droite**//

flechedroite.addEventListener("click", (Event) => {
	console.log(Event.target.alt)
	//  Incrémenter l'index et i
	index++
	i++
	// Si on dépasse la dernière image, revenir à la première//
	if (index >= slides.length) {
		index = 0
	}
	// Si on dépasse le dernièr bullet point, revenir au premièr//
	if (i >= bulletpoint.length) {
		i = 0
	}
	updateSlide() //**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//

	//** */ Supprimer la classe "dot_selected" de tous les points **//
	bulletpoint.forEach(dot => dot.classList.remove("dot_selected"))

	//**  Ajouter la classe "dot_selected" au point i **//
	bulletpoint[i].classList.add("dot_selected")
	//**  Afficher l'élément dans la console**//

	console.log(slides[index])
	console.log(bulletpoint[i])
})

//**  Nous écoutons la flèche gauche**//

flechegauche.addEventListener("click", (Event) => {
	console.log(Event.target.alt)
	// ** Decrémenter l'index et i**//
	index--
	i--
	//** Si on dépasse la première image, revenir à la dernière**//
	if (index < 0) {
		index = slides.length - 1
	}
	//** Si on dépasse le premièr bullet point, revenir au dernièr** //
	if (i < 0) {
		i = bulletpoint.length - 1
	}
	updateSlide() //**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//

	//** */ Supprimer la classe "dot_selected" de tous les points **//
	bulletpoint.forEach(dot => dot.classList.remove("dot_selected"))

	//**  Ajouter la classe "dot_selected" au point i **//
	bulletpoint[i].classList.add("dot_selected")
	//**  Afficher l'élément dans la console**//

	console.log(slides[index])
	console.log(bulletpoint[i])
})

// ** Fonction pour mettre à jour l'affichage de la bannière et du texte**//
function updateSlide() {

	banner.src = `./assets/images/slideshow/${slides[index].image}`
	p.innerHTML = slides[index].tagLine

}

