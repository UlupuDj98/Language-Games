function dateFormatter(date) {
    // Assicurati che l'argomento sia un oggetto Date
    if (!(date instanceof Date)) {
        throw new Error("L'argomento deve essere un oggetto Date.");
    }

    // Estrai il giorno, il mese e l'anno
    const day = String(date.getDate()).padStart(2, '0'); // Aggiunge uno zero iniziale se necessario
    const month = String(date.getMonth() + 1).padStart(2, '0'); // I mesi sono indicizzati da 0 a 11
    const year = date.getFullYear();

    // Restituisci la data formattata
    return `${day}-${month}-${year}`;
}

// Esempio di utilizzo
const today = new Date();
console.log(dateFormatter(today)); // Output: "DD-MM-YYYY" (dove DD, MM e YYYY sono i valori correnti)

module.exports = dateFormatter

