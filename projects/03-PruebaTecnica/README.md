# Prueba técnica para Juniors y Trainees de React en Live Coding

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.

## npm install @vitejs/plugin-react -E

## npm install react react-dom -E

Siempre recuerdo instalar y configurar el linter:
1- npm install standard -D
2- En el "package.json" dentro del objeto creas otra propiedad que será otro objeto con lo siguiente:
"eslintConfig": {
"extends": "./node_modules/standard/eslintrc.json"
}
