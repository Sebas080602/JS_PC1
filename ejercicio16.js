class TextProcessor {
    // Normalización del texto: elimina puntuación, convierte a minúsculas
    static normalizeText(text) {
      return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Elimina la puntuación
        .replace(/\s+/g, ' ') // Elimina espacios extra
        .trim(); // Elimina espacios en blanco al inicio y final
    }
  
    // Encontrar palíndromos
    static isPalindrome(text) {
      const normalizedText = TextProcessor.normalizeText(text);
      const reversedText = normalizedText.split('').reverse().join('');
      return normalizedText === reversedText;
    }
  
    // Contar la frecuencia de palabras
    static wordFrequency(text) {
      const normalizedText = TextProcessor.normalizeText(text);
      const words = normalizedText.split(' ');
      const frequency = {};
  
      words.forEach(word => {
        if (word in frequency) {
          frequency[word]++;
        } else {
          frequency[word] = 1;
        }
      });
  
      return frequency;
    }
}
  
  // Ejemplo de uso:
const text = "A man, a plan, a canal, Panama!";
  
  // Normalización del texto
const normalizedText = TextProcessor.normalizeText(text);
console.log('Texto Normalizado:', normalizedText);
  
  // Comprobar si es un palíndromo
const isPalin = TextProcessor.isPalindrome(text);
console.log('Es Palíndromo:', isPalin);
  
  // Contar la frecuencia de palabras
const frequency = TextProcessor.wordFrequency(text);
console.log('Frecuencia de Palabras:', frequency);
  