const MAX_PRODUCTS = 6;

class Product {
  static id_auto_increment = 0;

  #id;

  constructor(name, price, brand, thumbnail, rating) {
    this.#id = this.id_auto_increment++;
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.thumbnail = thumbnail;
    this.rating = rating;
  }

  get id() {
    return this.#id;
  }
}

let product = new Product(
  "Monogram Flower Tile Short Parka",
  11000000,
  "Louis Vuitton",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  3
);

const productList = document.querySelector(".product-list");

const htmlPattern = `<div class="col-md-3">
            <div class="course-item shadow-sm rounded mb-4">
              <div class="course-item-image">
                <img
                  src=${product.thumbnail}
                  alt="Marge Innastraightline"
                />
              </div>
              <div class="course-item-info p-3">
                <h2 class="fs-5 mb-4 text-dark">
                  ${product.name}
                </h2>
                <div
                  class="d-flex justify-content-between align-items-center fw-light text-black-50"
                >
                  <p class="type">Louis Vuitton</p>
                  <p class="rating">
                    <span>${product.rating}</span>
                    <span class="text-warning"
                      ><i class="fa-solid fa-star"></i
                    ></span>
                  </p>
                </div>
                <p class="price text-danger fs-5">${product.price} VND</p>
              </div>
            </div>
          </div>`;

// console.log(htmlPattern);
let result = "";

for (let id = 0; id < MAX_PRODUCTS; id++) {
  result += htmlPattern;
}

productList.innerHTML = result;
