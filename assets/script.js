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
let index = 0 // Démarrer à la première slide et au premièr point //

console.log(slides.length)

//** Pour recuperer les fleches**//
let flechegauche = document.querySelector(".arrow.arrow_left")
let flechedroite = document.querySelector(".arrow.arrow_right")


//** Pour recuperer les bullet points **//
let bulletpoint = document.querySelectorAll(".dots .dot")
console.log(bulletpoint.length)
for (let index = 0; index < bulletpoint.length; index++) {
	console.log(bulletpoint[index])//**  Vérifier que les éléments existent bien **//

	//**  Nous écoutons les bullet points**//
	bulletpoint[index].addEventListener("click", (event) => {
	
		updatebulletpoints(index)//**Appel à la fonction pour mettre à jour des bullet points**//
		
		updateSlide(index)//**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//

		//**  Afficher l'élément dans la console**//
		console.log(slides[index])
		console.log(bulletpoint[index])
	})
}

//** Recuperer les images et les taglines**//
let banner = document.querySelector(".banner-img")
let p = document.querySelector("#banner p")
let span = document.querySelector("#banner p span")
console.log(banner, p, span) //**  Afficher les éléments dans la console**//




//**  Afficher l'élément dans la console**//
console.log(slides[index])
console.log(bulletpoint[index])

//**  Nous écoutons la flèche droite**//

flechedroite.addEventListener("click", (Event) => {
    console.log(Event.target.alt)
	index++
	index=updateCompteurs(index)
	updateSlide(index) //**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//
    updatebulletpoints(index)//**Appel à la fonction pour mettre à jour des bullet points**//

	console.log(slides[index])
	console.log(bulletpoint[index])
})

//**  Nous écoutons la flèche gauche**//

flechegauche.addEventListener("click", (Event) => { 	
	index--
	index=updateCompteurs(index)
	updateSlide(index) //**Appel à la fonction pour mettre à jour l'affichage de la bannière et du texte**//
    updatebulletpoints(index)//**Appel à la fonction pour mettre à jour des bullet points**//

	//**  Afficher l'élément dans la console**//

	console.log(slides[index])
	console.log(bulletpoint[index])
})

// ** Fonction pour mettre à jour l'affichage de la bannière et du texte**//
function updateSlide(index) {

	banner.src = `./assets/images/slideshow/${slides[index].image}`
	p.innerHTML = slides[index].tagLine

}
// ** Fonction pour mettre à jour les compteurs suite au clique sur la fleche droite/gauche**//

function updateCompteurs(index){

	//** Si on dépasse la première image, revenir à la dernière**//
	//** Si on dépasse le premièr bullet point, revenir au dernièr** //
	if (index < 0) {
		index = slides.length - 1
	}
	// Si on dépasse la dernière image, revenir à la première//
	
	// Si on dépasse le dernièr bullet point, revenir au premièr//
	if (index >= slides.length ) {
		index = 0
	}
	
	return index
	}

//**La fonction pour mettre à jour des bullet points**//
function updatebulletpoints(index) {
	
	//** */ Supprimer la classe "dot_selected" de tous les points **//
	bulletpoint.forEach(dot => dot.classList.remove("dot_selected"))

	//**  Ajouter la classe "dot_selected" au point cliqué **//
	bulletpoint[index].classList.add("dot_selected")

}