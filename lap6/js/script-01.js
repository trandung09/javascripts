// // # Callback trong javascript

// // Công việc 3 : Giả sử sau 3s thì thực hiện xong
// function funcC() {
//   setTimeout(function () {
//     console.log("three");
//   }, 3000);
// }

// // Công việc 4 : Giả sử sau 4s thì thực hiện xong
// function funcD() {
//   setTimeout(function () {
//     console.log("four");
//   }, 4000);
// }

// // Tổng thời gian thực hiện hết 2 cv3 và cv4 là 4s
// // Thực hiện công việc
// funcC();
// funcD();

// const doTask = (name, time, cb) => {
//     console.log("Thực hiện công việc: " + name);
//     setTimeout(() => {
//         cb();
//     }, time);
// }

// const finish = () => {
//     console.log("Hoàn thành công việc");
// }

// // doTask("Rửa bát", 2000, finish);

// // Th1: Các tác vụ có liên quan đến nhau
// // Nhặt rau - Rửa rau - Luộc rau
// console.log("Start");
// doTask("Nhặt rau", 3000, () => {
//     doTask("Rửa rau", 2000, () => {
//         doTask("Luộc rau", 4000, () => {
//             finish();
//         });
//     });
// });
// console.log("End");

// // Th2: Các tác vụ không liên quan đến nhau
// // Ăn cơm - Lướt facebook - Check mail
// console.log("Start");
// doTask("Ăn cơm", 4000, () => {
//     console.log("Ăn cơm xong");
// });
// doTask("Lướt facebook", 2000, () => {
//     console.log("Lướt facebook xong");
// });
// doTask("Check mail", 2500, () => {
//     console.log("Check mail xong");
// });
// console.log("End");

// // Nếu nhiều công việc => Dẫn đến tình trạng callback hell
// // Để khắc phục tình trạng callback hell => Dẫn đến sự ra đời của promise (ES6)

// # Promise trong javascript
// + Là một đối tượng đại diện cho sự hoàn thành hoặc thất bại của một hoạt động
// bất đồng bộ và giá trị kết quả của nó
// + Một Promise có ba trạng thái:
//     . Pending: đang chờ xử lý - trạng thái ban đầu
//     . Fulfilled: đã hoàn thành - hoạt động đồng bộ đã hoàn thành và có giá trị đã
//     được trả về
//     . Rejected: bị từ chối - hoạt động thất bại và có một lỗi hoặc giá trị từ chối
//     được trả về
const doTask = (name, time, isOk) => {
  console.log("Thực hiện công việc: " + name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve("Hoàn thành công việc: " + name);
      } else {
        reject("Không thể hoàn thành công việc: " + name);
      }
    }, time);
  });
};

// Th1: Các tác vụ có liên quan đến nhau
// Nhặt rau - Rửa rau - Luộc rau
doTask("Nhặt rau", 3000, true)
  .then((rs) => {
    console.log(rs);
    return doTask("Rửa rau", 2000, false);
  })
  .then((rs) => {
    console.log(rs);
    return doTask("Luộc rau", 4000, true);
  })
  .then((rs) => {
    console.log(rs);
  })
  .catch((err) => {
    console.log(err);
  });

// Th2: Các tác vụ không liên quan đến nhau
// Ăn cơm - Lướt facebook - Check mail
Promise.all([
  doTask("Ăn cơm", 3000, false),
  doTask("Lướt facebook", 2000, true),
  doTask("Check mail", 4000, true),
])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// # Trong JavaScript, async và await là các từ khóa giúp viết mã bất đồng bộ một cách dễ đọc và hiểu hơn, đặc biệt khi so sánh với các cách tiếp cận truyền thống như callbacks và promises.

// + Async
//    .Từ khóa async được đặt trước một function để chỉ ra rằng function đó sẽ trả về một Promise.
//    . Nếu một function async trả về một giá trị, giá trị đó sẽ tự động được bọc trong một Promise.
// + Await
//    . Từ khóa await chỉ có thể sử dụng trong các async function.
//    . await làm cho JavaScript chờ đợi cho đến khi Promise đó được giải quyết (resolve) hoặc bị từ chối (reject) trước khi tiếp tục thực hiện các dòng code tiếp theo.
// + Sử dụng async và await giúp mã bất đồng bộ của bạn dễ đọc và bảo trì hơn, đặc biệt là khi so sánh với các phương pháp cũ hơn như callback hoặc chuỗi các hàm then() của Promises.
const doTask = (name, time, isOk) => {
  console.log("Thực hiện công việc: " + name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve("Hoàn thành công việc: " + name);
      } else {
        reject("Không thể hoàn thành công việc: " + name);
      }
    }, time);
  });
};

// Nhặt rau - Rửa rau - Luộc rau
// async function task1() {};
const handleTask = async () => {
  try {
    let rs = await doTask("Nhặt rau", 3000, true);
    console.log(rs);

    let rs1 = await doTask("Rửa rau", 2000, true);
    console.log(rs1);

    let rs2 = await doTask("Luộc rau", 4000, true);
    console.log(rs2);
  } catch (error) {
    console.log(error);
  }
};

handleTask();
