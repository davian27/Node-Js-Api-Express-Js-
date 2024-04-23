class Product {
    constructor(id, name, price, categoryId, supplierId) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.categoryId = categoryId;
      this.supplierId = supplierId;
    }
  }
  
  module.exports = Product;