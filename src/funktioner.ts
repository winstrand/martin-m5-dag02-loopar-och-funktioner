// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  // TODO

  if (pris % 1 === 0) return '' + pris + ' kr'
  else {
    return (
      '' +
      Intl.NumberFormat('sv', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      }).format(pris) +
      ' kr'
    )
  }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  // TODO
  let vatPart: number = (pris * 0.12) / 1.12
  return Number(vatPart.toFixed(2))
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  // TODO
  return pris * (1 - procent / 100)
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  // TODO
  let isOpen = false
  if (
    ((veckodag == 'lördag' || veckodag == 'söndag') &&
      klockslag >= 9 &&
      klockslag < 16) ||
    (veckodag != 'lördag' &&
      veckodag != 'söndag' &&
      klockslag >= 7 &&
      klockslag < 18)
  ) {
    isOpen = true
  }
  return isOpen
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  // TODO
  let summa: number = 0
  for (const element of tal) {
    summa += element
  }
  return summa
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  // TODO
  let summa: number = 0
  let counter: number = 0
  for (const element of tal) {
    summa += element
    counter++
  }
  return counter === 0 ? 0 : summa / counter
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  // TODO
  let biggest: number = 0
  let counter: number = 0
  for (const element of tal) {
    if (counter === 0) biggest = element
    if (element > biggest) biggest = element
    counter++
  }
  return counter === 0 ? undefined : biggest
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  // TODO
  let returText: string = ''
  for (let index = 0; index < antal; index++) {
    returText += text
  }
  return returText
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  // TODO
  const total: number = antal * pris
  return `${antal} x ${namn}: ` + formateraPris(total)
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
  // TODO
  return n * 2
}
export const ärJämnt = (n: number): boolean => {
  // TODO
  return !(n % 2)
}
