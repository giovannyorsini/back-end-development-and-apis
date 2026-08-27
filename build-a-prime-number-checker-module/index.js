function isPrime(number) {
    // Validação básica para garantir que é um número válido e maior que 1
    if (typeof number !== "number" || !Number.isInteger(number) || number <= 1) {
        return false; 
    }

    // O número 2 é o único primo par
    if (number === 2) return true;
    
    // Elimina os outros números pares
    if (number % 2 === 0) return false;

    // Checa os divisores ímpares
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Exportação nomeada correta
module.exports = { isPrime };