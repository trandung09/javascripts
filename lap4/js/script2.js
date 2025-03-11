// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max",
    price: 30000000,
    brand: "Apple",
    count: 2,
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

// 1. In thông tin sản phẩm
console.log("Danh sách sản phẩm:");
products.forEach((product) => {
  console.log(
    `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
  );
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
const totalPrice = products.reduce(
  (sum, product) => sum + product.price * product.count,
  0
);
console.log("Tổng tiền giỏ hàng:", totalPrice);

// 3. Tìm các sản phẩm của thương hiệu "Apple"
const appleProducts = products.filter((product) => product.brand === "Apple");
console.log("Sản phẩm của Apple:", appleProducts);

// 4. Tìm các sản phẩm có giá > 20 triệu
const expensiveProducts = products.filter(
  (product) => product.price > 20000000
);
console.log("Sản phẩm giá trên 20 triệu:", expensiveProducts);

// 5. Tìm sản phẩm có chữ "pro" trong tên (không phân biệt hoa thường)
const proProducts = products.filter((product) =>
  product.name.toLowerCase().includes("pro")
);
console.log("Sản phẩm có chữ 'pro':", proProducts);

// 6. Thêm 1 sản phẩm vào mảng
const newProduct = {
  name: "Xiaomi Mi 11 Ultra",
  price: 18000000,
  brand: "Xiaomi",
  count: 2,
};
products.push(newProduct);
console.log("Đã thêm sản phẩm:", newProduct);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung"
products = products.filter((product) => product.brand !== "Samsung");
console.log("Giỏ hàng sau khi xóa Samsung:", products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log("Giỏ hàng sắp xếp theo giá tăng dần:", products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log("Giỏ hàng sắp xếp theo số lượng giảm dần:", products);

// 10. Lấy 2 sản phẩm ngẫu nhiên trong giỏ hàng
const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
console.log("Hai sản phẩm ngẫu nhiên:", randomProducts);
