let numeros = [3,5,62,6,85,2,55];
let mayor, menor;

for (let i = 0; i < numeros.length; i++) {
    if (i === 0) {
        mayor = numeros[i];
        menor = numeros[i];
    }
    else if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    else if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

document.writeln("El mayor: " + mayor);
document.writeln("El menor: " + menor);