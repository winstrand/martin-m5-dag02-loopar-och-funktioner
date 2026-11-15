// Dag 2, del 1: Loopar. Resultatet syns i Console (F12).

// UPPGIFT 1: skriv ut talen 1 till 10, ett per rad, med en for-loop.
for (let index = 1; index <= 10; index++) {
  console.log(index)
}

// UPPGIFT 2: skriv ut talen 10 till 1 (nedräkning) med en while-loop.
//            Skriv "Kaffe!" efter 1.
let loopCounter: number = 10
while (loopCounter > 0) {
  console.log(loopCounter)
  loopCounter--
}
// UPPGIFT 3: gör samma sak som uppgift 1, men skriv bara ut jämna tal.
//            Tips: n % 2 === 0
for (let index = 1; index <= 10; index++) {
  if (index % 2 === 0) console.log(index)
}
// UPPGIFT 4: här är kaféets prislista. Skriv ut ett kvitto med en for...of-loop:
//            "Kardemummabulle: 35 kr" osv, och sist "Summa: ... kr".
const prislista: number[] = [35, 32, 59, 45]
const namnlista: string[] = [
  'Kardemummabulle',
  'Bryggkaffe',
  'Ostmacka',
  'Latte'
]
// TODO
let prisIndex: number = 0
let summa: number = 0
for (const pris of prislista) {
  summa += pris
  console.log(`${namnlista[prisIndex]}: ${pris} kr`)
  prisIndex++
}
console.log(`Summa: ${summa} kr`)

// UPPGIFT 5 (utmaning): skriv ut en multiplikationstabell för 3:ans tabell,
//            "3 x 1 = 3" till "3 x 10 = 30".

for (let index = 1; index <= 10; index++) {
  console.log(`3 x ${index} = `, 3 * index)
}
