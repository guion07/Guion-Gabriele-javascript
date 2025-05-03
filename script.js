function controllaNumero(num) {
    console.log(num);

    if (num % 2 === 0) {
        console.log("Numero pari");
    } else {
        console.log("Numero dispari");
    }

    if (num > 100) {
        alert("Grande!");
    }
}

controllaNumero(101);

let countdown = 10;
while (countdown >= 0) {
    console.log(countdown);
    if (countdown === 0) {
        alert("BOOM!");
    }
    countdown--;
}

let numeri = [3, 6, 1, 9];
numeri.push(5);
numeri.sort((a, b) => a - b);
console.log("Primo elemento:", numeri[0]);
console.log("Ultimo elemento:", numeri[numeri.length - 1]);

function calcola(n1, n2, operazione) {
    switch (operazione) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n2 !== 0 ? n1 / n2 : "Errore: divisione per zero";
        default:
            return "Operazione non valida";
    }
}

console.log("Calcolo somma:", calcola(10, 5, "+"));
console.log("Calcolo divisione per zero:", calcola(10, 0, "/"));

function saluta() {
    const nome = document.getElementById("inputNome").value;
    document.getElementById("saluto").innerText = `Ciao, ${nome}!`;
}
