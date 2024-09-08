/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  printWidth: 1000, // Aumenta el número de caracteres por línea
  tabWidth: 2, // Ancho de la tabulación de 2 espacios
  singleQuote: true, // Comillas simples en lugar de dobles
  trailingComma: 'none', // Sin comas finales
  bracketSameLine: true, // Mantiene la etiqueta de cierre en la misma línea
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
