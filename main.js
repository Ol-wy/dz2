//______Светофор с помощью switch case_______

// const color = prompt ("Укажите цвет: зеленый, красный, желтый") 
// const colorlist = [
//     {name: red = ("Красный")},
//     {name: green = ("Зеленый")},
//     {name: yellow = ("Желтый")}
// ]; 
// switch (color) {
//     case red: 
//         alert("Стоять");
//         break;
        
//     case green:
//         alert("Идти");
//         break;

//     case yellow:
//         alert("Ждать");
//         break;
// }

//___________________________________________


// let i = ""
// while (i.length <8) {
//     i += "*";
//     console.log(i);
// }

// for (let i = "*"; i.length < 8; i += "*") {
//     console.log(i);
// }

//___________________________________________

let chess = " * * * *"
for (let i = 0; i < 8; i++) {
    console.log(chess.substr(i%2,8));
}

// function ChessBoard() {
//     const limit = 8
//     return Array.from(Array(limit).keys())
//         .reduce((acc, _, index) => {
//           let result = ''
//           if (index % 2 !== 0) {
//             result += ' #'.repeat(limit / 1)
//           } else {
//             result += '# '.repeat(limit / 1)
//           }
//           return acc + result + '\n'
//      }, '')
//     }
    
//     console.log(ChessBoard());

//______________________________________________

// function fizzBuzz() {
//     let symbol = 1
//     while(symbol <=100) {
//         symbol % 3 === 0 && symbol % 5 === 0
//         ? console.log(`${symbol} - FizzBuzz`) 
//         : symbol % 3 === 0 && console.log(`${symbol} - Fizz`)
//         || symbol % 5 === 0 && console.log(`${symbol} - Buzz`)
//         symbol++
//     }
// }

// console.log(fizzBuzz());




