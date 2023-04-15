let numero = window.prompt("Ingrese un número:");
let cont = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        cont++;
    }
}
if (cont === 2) {
    document.writeln("El número ingresado es primo");
}
else {
    document.writeln("El número ingresado no es primo");
}

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        document.writeln(numero + " es divisible por " + i);
    }
}