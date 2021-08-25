//****************************************************************************
// CodeFlow Übung lev2_1: for loop Array
// Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
// Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren.
// Gib in der Konsole image_001.jpg bis image_100.jpg aus.
// Deklariere die Function imageArray2.
// In Funktionskörper deklariere die Variable retArray2 als leeres Array.
// Schreibe eine for-Schleife.
// Nutze push() und Conditionals Statements (if, else if, else).
// Vergiss nicht den Return-Befehl.
// Lass dir retArray2 in der Konsole ausgeben.
console.log(imageArray2());
function imageArray2() {

    let retArray2 = [];
    for (let i = 1; i <= 100; i++) {

        retArray2.push('image_' + `${i}`.padStart(4 - `${i}`.length, '0') + '.jpg');
        // if (i < 10) {
        //     retArray2.push(`image_00${i}.jpg`);
        // } else if (i < 100) {
        //     retArray2.push(`image_0${i}.jpg`);
        // }
        // else {
        //     retArray2.push(`image_${i}.jpg`);
        // }
    }
    return retArray2;
}


//****************************************************************************
// CodeFlow Übung lev2_2: loop with input
// Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben
// soll. Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort 
// “Loop” ausgibst. Die Anzahl der Buchstaben “o” variiert durch die Eingabe 
// des Users.
function loopMe() {

    let num = Number(document.getElementById("numLoops").value);

    // at least a number greater than 0...
    if (num == 0) {
        document.getElementById("result").innerHTML = "Number must be greater as 0!"
        return;
    }
    let str = "lp".split("");
    for (let i = 0; i < num; i++) {
        str.splice(1, 0, 'o');
    }
    document.getElementById("result").innerHTML = str.join("");
}


