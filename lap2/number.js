const minValue = -Infinity
const maxValue = Infinity

// # Để tạo một big int ta thêm hậu tố n vào sau số nguyên
const bigInt = 1000000000000000000000000000000000n;
console.log(bigInt);

const bigIntFromString = BigInt('123333333333333333333333333333333')
console.log(bigIntFromString)

// # Ta có thể chuyển number về bigInt nhưng ngược lại có thể gây ra lỗi
const bigIntSample = 10000000000000000000000000000000000000000000n
const num = Number(bigInt) // Có thể gây lỗi tràn số

const newNum = 123
const newBigInt = BigInt(newNum)

// # Các phương thức của Number (một số)
newNum.toPrecision
newNum.toFixed
newNum.toExponential
newNum.toString()
Number.valueOf("123");

// # Number static method

Number.isInteger(123)
Number.isNaN(123)
Number.parseInt("123")
Number.parseFloat("123.4")
