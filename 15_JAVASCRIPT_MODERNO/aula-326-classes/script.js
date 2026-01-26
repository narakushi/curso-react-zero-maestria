// 8 - classes

class Product {
  constructor(name, price) {
    this.name = name
    //this.name = "Nome do produto" + name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

const tenis = new Product("Tenis verde", 120)

console.log(tenis.productWithDiscount(20));