// # Sử dụng từ khóa const và let để khai báo các biến

let name = 'John';
const age = 25;

console.log(name + ' ' + age);
console.log(`${name} ${age}`);

function printArray(...names) {
    names.forEach((name) => {
        console.log(name);
    });
}

const array = ['John', 'Doe', 'Jane'];
printArray(array);