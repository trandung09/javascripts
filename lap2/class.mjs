// # Class - lớp (tương tự như Java): khuôn mẫu của việc tạo các object

// * Cú pháp cơ bản:

// class Animal {
//   static count = 0;

//   #id; // Biến private, tương tự như Java ()

//   // Constructor method: khi tạo mặc định sẽ có một constructor rỗng
//   // Các addtribute được tạo từ constructor hoặc có thể thêm điộng được
//   // nhờ vào tính Prototype
//   constructor(name, age) {
//     // Mặc định các thuộc tính này là public
//     this.#id = this.count++; // Gán giá trị cho private field được khai báo trước
//     this.name = name;
//     this.age = age;

//     // this.#newType = 10 => Lỗi vì #variableName chưa được khai báo
//   }

//   // => Sau khi khởi tạo đối tượng này bao gồm 3 thuộc tính: id, name, age

//   // Cád method của class (không cần khai báo từ khóa fucntion)

//   sayHi() {
//     console.log("I am a Animal");
//   }

//   age() {
//     return this.age;
//   }

//   name() {
//     return this.name;
//   }
// }

// const dog = new Animal('Dog', 12)

// console.log(dog.name)
// console.log(dog.age)

// console.log(typeof dog);

// // Thêm một thuộc tính mới vào class
// Animal.prototype.canFly = false;

// // Thêm một function mới vào class
// Animal.prototype.sayHi = function() {
//     console.log('Hi, iam a ' + this.name);
// }

// // Hàm getter, setter trong class javascript

// class Person {
//     #name;
//     #age;

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     set name(name) {
//         this.#name = name;
//     }

//     set age(age) {
//         this.age = age;
//     }

//     get name() {
//         return this.#name;
//     }

//     get age() {
//         return this.#age;
//     }
// }

// const newPerson = new Person('John', 10);
// console.log(newPerson.name); // Gọi name() = name - không gọi bằng tên hàm
// newPerson.name = 'David' // Gọi hàm set bằng tên
// console.log(newPerson.name)

// // Return một class trong Function
// function makeUser() {
//     return class {  
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//     }
// }

// let User = makeUser();

// console.log(new User('Nash', 20).name)

// let User2 = function() { // Tương tự cách trên
//     return class {
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }
//     };
// }

// # Kế thừa trong Javascript
// class Dog extends Animal {

//     // constructor(name, age) {
//     //     super(name, age);
//     // }

//     sayHi() {
//         super.sayHi()
//         // console.log('I am a Dog');
//     }   
    
//     static staticMethod() {
//         console.log("This is static method");
//     }

//     static getInstance() {
//         return new this('Dog', 10);
//     }
// }

// const newDog  = new Dog('Dog', 2);
// newDog.sayHi();

// Dog.staticMethod();

export class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hello, I am ${this.name} - ${this.age} year old`);
  }
}



