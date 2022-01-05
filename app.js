let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = euro => euro * oneEuroIs.USD
const fromDollarToYen = dollar => (dollar / oneEuroIs.USD) * oneEuroIs.JPY
const fromYenToPound = yen => (yen / oneEuroIs.JPY) * oneEuroIs.GBP

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound }

// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };