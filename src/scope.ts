const kafe = 'Kardemumma'

function visaNamn() {
  const recept = 'hemligt'
  console.log(kafe) // gissning: variablen inte är definerad i funktionen/metoden men definerad före metod anrop och har då ett värde 'Kardemumma'
  console.log(recept) // gissning: hemligt, denna är definerad i funktionen/metoden
}
visaNamn()

let räknare = 0
function ökaRäknare() {
  räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning: 2, variablen räknare är deklarerad innan metod anrop och har då ett värde

function lokal() {
  let räknare = 100
  räknare++
  return räknare
}
console.log(lokal()) // gissning: 101, som kommer från metoden
console.log(räknare) // gissning: 2, då variablen är deklareard tidigare med värdet 2
// variabler deklarerade i en metod förjer inte med ut. (om man inte använder var vilket ger andra problem)

// Ta bort kommentaren på nästa rad och läs felet:
//console.log(recept) // gissning: Variablen är inte deklarerad tidigare så här kommer det att bli fel
// Error: Cannot find name 'recept'.

for (let i = 0; i < 3; i++) {
  console.log('varv', i)
}
// Ta bort kommentaren på nästa rad och läs felet:
//console.log(i) // gissning: Variablen är inte deklarerad tidigare så här kommer det att bli fel
// Error: Cannot find name 'i'.

/*
Regler för variabler

* En variablen som skapas i en metod, lever bara i den metoden.
  Försöker man anropa variablen utanför så kommer det att generera ett fel

* En metod kan se variabler som är deklarerade i den och de variabler som
  är deklarerade innan metodanropet

* let i i en for-loop lever bara i just den for-lopen. Och kan inte användas
  utanför loopen.

*/
