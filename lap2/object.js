// # Object trong Javascript, có thể hiểu tương tự như một struct trong C/C++;

// + Khởi tạo môt object mà chưa có bất kì thuộc tính nào
// + Hai cách này tương đương nhau
let person = new Object();
let user = {}

// + Thêm các thuộc tính cho object
user.name = 'Join'
user.email = 'join@gmail.us.com'
user.age = 50

console.log(user)

// + Truy cập các thành phần của object
console.log(user.name)
console.log(user['email'])

// + Xóa một thuộc tính có trong Object
delete user.age
console.log(user)

// + Trả về một object trong function
function makeUser(name, age) {
    return {
        name: name,
        age: age
    }

    // Lệnh return này cũng tương đương
    // return {
    //     name,
    //     age
    // }
}

let newUser = makeUser('Doe', 25)
console.log(newUser)

// + Kiểm tra sự tồn tại tên thuộc tính trong object với in
console.log(('email' in user) ? 'True' : 'False')
console.log(("email" in newUser) ? "True" : "False");

// + Vòng lặp for in duyệt các ket trong object 
for (let key in newUser) {
    console.log(newUser[key])
}

// + Tham chiếu và sao chép đối tượng
// Gán tham chiếu
let copyUser = newUser; 

console.log(copyUser)
copyUser.age = 50

console.log(newUser)
console.log(copyUser)

// let clone = Object.assign({}, user);
let copyUser2 = {}
Object.assign(copyUser2, user) // chỉ sao chép các thuộc tính không tham chiếu
console.log(copyUser2)
copyUser.age = 100;

console.log(user)

// + Từ kháo this trong Object
const object = {
    name: 'Tran Van Dung',
    sayHi: function() {
        console.log(this.name + ': say hi to you!')
    }
}

object.sayHi();

// + Xây dựng một hàm tạo và toán tử new để có thể tạo nhièu object có các thuôcn tính tương đương nhau
// Các hàm này có thể không có các tham số và có thể tạo bất kì giá trị nào và 
// sử dụng this.key để tạo một property cho object
function Animal(name, age, canFly) {
    this.name = name;
    this.age = age;
    this.canFly = canFly
}

const dog = new Animal('Dog', 2, false)
const cat = new Animal('Cat', 2, false)
const bird = new Animal('Bird', 4, true)

console.log(dog)
console.log(cat)
console.log(bird)

// Trong các function đóng vai trò là hàm tạo object
// có thể có thêm các fucntion khác (đóng vai trò là method như trong các class)
function Company() {
    this.employeeSize = 1000,

    this.hasSomeThing = function() {
        console.log("This is my company")
    }
}

const company = new Company()
company.hasSomeThing()

// + Sử dụng các static function của Object để bảo vệ, tạo các quyền cho một object 
const q = [1, 2, 3]
Object.preventExtensions(q) // ngắn khôgn cho mảng mở rộng
q.push(5) // Lỗi

