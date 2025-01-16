// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.




// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const biciCorsa = [
    {"nome": "Bici1","peso": 30},
    {"nome": "Bici2","peso": 20},
    {"nome": "Bici3","peso": 25},
    {"nome": "Bici4","peso": 26},
    {"nome": "Bici5","peso": 35},
    {"nome": "Bici6","peso": 32},
    {"nome": "Bici7","peso": 38},
    {"nome": "Bici8","peso": 19},
]

// Stampare a schermo la bici con peso minore.

// Utilizzo un ciclo for dove gli dico ciclami dentro a bicicorsa finche cnon trovi "il peso minore "
for(let i = 0; i < biciCorsa.length; i++){
    let biciIesima= biciCorsa[i]
    console.log(biciIesima)
    
    // prendimi il numero minore dall array
    let biciLeggera = biciCorsa[0]
    
    if(biciIesima < biciLeggera){

    }
}                


