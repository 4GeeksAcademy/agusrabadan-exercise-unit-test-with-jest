// Variable que declara el valor de 1€ con respecto a las otras divisas
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Funcion para convertir de € a $ 
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD ;
    return valueInDollar
};
// Funcion para convertir de $ a Yen
const fromDollarToYen = function(valueInDollar)  {
    let dollarToEuro = valueInDollar / oneEuroIs.USD;
    let euroToYen = dollarToEuro * oneEuroIs.JPY;
    return Math.floor(euroToYen * 100) / 100;
};
// Funcion para convertir de Yen a Libra
const fromYenToPound = function(valueInYen) {
    let yenToEuro = valueInYen / oneEuroIs.JPY;
    let euroToPound = yenToEuro * oneEuroIs.GBP;
    return Math.floor(euroToPound * 100) / 100;
};
//Exportación para el test
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };