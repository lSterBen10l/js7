// Oppgave 1:
function minTekst(tekst) {
    if (tekst.trim() === '') {
        console.log('Teksten er tom');
    } else {
        console.log('Teksten er ikke tom');
    }
}

// Testoppringing for oppgave 1
console.log(minTekst(''));
console.log(minTekst('Røyken VGS'));

// Oppgave 2:
function delOgKonverterTekst(tekst) {
    return tekst.trim().split(/\s+/);
}

// Testoppringing for oppgave 2
console.log(delOgKonverterTekst(' Røyken Videregående Skole '));

// Oppgave 3:
function erPalindrom(tekst) {
    const rent = tekst.toLowerCase().replace(/[\W_]/g, '');
    const reversert = rent.split('').reverse().join('');
    return rent === reversert;
}

// Testoppringing for oppgave 3
console.log(erPalindrom('A man a plan a canal Panama'));
console.log(erPalindrom('Hello World'));

// Oppgave 4:
function alfabetiskRekkefolge(tekst) {
    return tekst.toLowerCase().split('').sort().join('').trim();
}

// Testoppringing for oppgave 4
console.log(alfabetiskRekkefolge('serdar'));

// Oppgave 5:
function tellForekomster(tekst, bokstav) {
    const regex = new RegExp(bokstav, 'gi');
    const forekomster = tekst.match(regex);
    return forekomster ? forekomster.length : 0;
}

// Testoppringing for oppgave 5
console.log(tellForekomster('Welcome to Norge', 'o'));
