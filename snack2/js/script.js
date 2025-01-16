// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadreCalcio =[
    { "nome": "squadra1", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra2", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra3", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra4", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra5", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra6", "punti fatti": 0,"falli subiti": 0,},
    { "nome": "squadra7", "punti fatti": 0,"falli subiti": 0,},

]


// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
function randomNumeri (max){
    return Math.floor(Math.random() * max);
}



// faccio ciclo for per iterare squadrecalcio 
for(let i = 0; i < squadreCalcio.length; i++){
    // Poi dichiaro la variabile iesima e le do il valore a squadra
    let squadraIesima= squadreCalcio[i]
    // Numeri random a punti fatti
    squadraIesima["punti fatti"]=randomNumeri(50)
    // Numeri random a punti subiti
    squadraIesima["falli subiti"] =  randomNumeri(80)
    console.log(squadraIesima)

}

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.?????
const arrayEmpty=[]

for(let i = 0; i < squadreCalcio.length; i++ ){
    let squadraIesima= squadreCalcio[i]

    arrayEmpty.push(squadraIesima.nome)
    arrayEmpty.push(squadraIesima["falli subiti"])
}
console.log(arrayEmpty)

