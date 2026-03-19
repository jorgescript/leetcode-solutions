/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Examples:

Input: s = "III"
Output: 3

Input: s = "XLIX"
Output: 49

Input: s = "MCMXCIV"
Output: 1994
*/

function romanToInt(s: string): number {
  // Mapa de valores romanos
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as const;

  // Tipo estricto para las claves válidas
  type RomanChar = keyof typeof romanValues;

  let total = 0; // Resultado final
  let prev = 0; // Valor previo (a la derecha)

  // Recorremos de derecha a izquierda
  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanValues[s[i] as RomanChar];

    /**
     * Si el valor actual es menor que el anterior:
     * Ejemplo: IV → I (1) < V (5)
     * Entonces restamos
     */
    if (current < prev) {
      total -= current;
    } else {
      /**
       * Si no, sumamos normalmente
       * Ejemplo: VI → V (5) + I (1)
       */
      total += current;
    }

    // Actualizamos el valor previo
    prev = current;
  }

  return total;
}
