/*
Las expresiones regulares en JavaScript son una poderosa herramienta para buscar y manipular cadenas de texto. A continuación te presento una lista de las expresiones regulares más comunes y útiles en JavaScript:

1. Límites y anclas
^ : Coincide con el inicio de la cadena.
Ejemplo: /^Hola/ coincide con "Hola, mundo".
$ : Coincide con el final de la cadena.
Ejemplo: /mundo$/ coincide con "Hola, mundo".
\b : Coincide con un límite de palabra.
Ejemplo: /\bmundo\b/ coincide con "mundo", pero no con "mundos".
\B : Coincide con un no-límite de palabra.
Ejemplo: /\Bola/ coincide con "bola" en "tombola", pero no con "bola" sola.

*/

// 2. Cuantificadores
// * : Coincide con 0 o más repeticiones del patrón anterior.
// Ejemplo: /a*/ coincide con "", "a", "aa", "aaa", etc.
// + : Coincide con 1 o más repeticiones del patrón anterior.
// Ejemplo: /a+/ coincide con "a", "aa", "aaa", pero no con "".
// ? : Coincide con 0 o 1 repetición del patrón anterior (opcionalidad).
// Ejemplo: /a?/ coincide con "", "a".
// {n} : Coincide exactamente con n repeticiones del patrón anterior.
// Ejemplo: /a{3}/ coincide con "aaa".
// {n,} : Coincide con n o más repeticiones del patrón anterior.
// Ejemplo: /a{2,}/ coincide con "aa", "aaa", "aaaa", etc.
// {n,m} : Coincide con al menos n y como máximo m repeticiones del patrón anterior.
// Ejemplo: /a{2,4}/ coincide con "aa", "aaa", "aaaa", pero no con "a" ni con "aaaaa".

// 3. Grupos y alternancia
// () : Agrupa subexpresiones para aplicar operadores o capturar el texto coincidente.
// Ejemplo: /(abc)+/ coincide con "abc", "abcabc", etc.
// (?:...) : Agrupa subexpresiones sin capturar (grupo no capturante).
// Ejemplo: /(?:abc)+/ coincide con "abc", "abcabc", etc., pero no captura el texto.
// | : Alternancia, funciona como un "o" lógico.
// Ejemplo: /gato|perro/ coincide con "gato" o "perro".

// 4. Clases de caracteres
// . : Coincide con cualquier carácter excepto nuevas líneas.
// Ejemplo: /a.b/ coincide con "aab", "acb", pero no con "ab".
// \d : Coincide con cualquier dígito (equivalente a [0-9]).
// Ejemplo: /\d+/ coincide con "123", "456", etc.
// \D : Coincide con cualquier carácter que no sea un dígito (equivalente a [^0-9]).
// Ejemplo: /\D+/ coincide con "abc", "!", etc.
// \w : Coincide con cualquier carácter alfanumérico o subrayado (equivalente a [A-Za-z0-9_]).
// Ejemplo: /\w+/ coincide con "abc", "123", "a_1", etc.
// \W : Coincide con cualquier carácter que no sea alfanumérico o subrayado (equivalente a [^A-Za-z0-9_]).
// Ejemplo: /\W+/ coincide con "!", "@", etc.
// \s : Coincide con cualquier carácter de espacio en blanco (incluye espacio, tabulación, nueva línea).
// Ejemplo: /\s+/ coincide con " ", "\t", "\n", etc.
// \S : Coincide con cualquier carácter que no sea un espacio en blanco.
// Ejemplo: /\S+/ coincide con "abc", "123", etc.
// [abc] : Coincide con cualquiera de los caracteres entre corchetes.
// Ejemplo: /[abc]/ coincide con "a", "b", o "c".
// [^abc] : Coincide con cualquier carácter que no esté entre los corchetes.
// Ejemplo: /[^abc]/ coincide con cualquier carácter excepto "a", "b", o "c".
// [a-z] : Coincide con cualquier carácter en el rango especificado.
// Ejemplo: /[a-z]/ coincide con cualquier letra minúscula.

// 5. Escapado de caracteres
// \ : Escapa el siguiente carácter, permitiendo que caracteres especiales se interpreten literalmente.
// Ejemplo: /\./ coincide con un punto literal.

// 6. Grupos de captura
// () : Crea un grupo de captura.
// Ejemplo: /(hello)/ captura "hello".
// \1, \2, etc.: Referencia un grupo de captura anterior.
// Ejemplo: /(\w+)\s\1/ coincide con "word word".

// 7. Patrones avanzados
// (?=...) : Lookahead positivo, asegura que lo que sigue a la posición actual coincide con el patrón dado.
// Ejemplo: /\d(?=px)/ coincide con un dígito que va seguido de "px", pero no captura "px".
// (?!...) : Lookahead negativo, asegura que lo que sigue a la posición actual no coincide con el patrón dado.
// Ejemplo: /\d(?!px)/ coincide con un dígito que no va seguido de "px".
// (?<=...) : Lookbehind positivo, asegura que lo que precede a la posición actual coincide con el patrón dado.
// Ejemplo: /(?<=\$)\d+/ coincide con números precedidos por "$".
// (?<!...) : Lookbehind negativo, asegura que lo que precede a la posición actual no coincide con el patrón dado.
// Ejemplo: /(?<!\$)\d+/ coincide con números que no están precedidos por "$".