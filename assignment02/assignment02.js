var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Manufacturer, Description, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
    }
    return Product;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
        this.products = new Array();
    }
    ProductFactory.prototype.isPresent = function (productId) {
        if (this.products.filter(function (product) { return product.ProductId === productId; }).length > 0)
            return true;
        return false;
    };
    ProductFactory.prototype.validateProduct = function (product) {
        if (this.isPresent(product.ProductId)) {
            console.log("Product Id must be unique.");
            return false;
        }
        if (typeof (product.ProductName) !== "string") {
            console.log("Product Name must be string.");
            return false;
        }
        if (typeof (product.Category) !== "string") {
            console.log("Product Category must be string.");
            return false;
        }
        if (typeof (product.Manufacturer) !== "string") {
            console.log("Product Manufacturer must be string.");
            return false;
        }
        if (product.Description.length > 100) {
            console.log("Description should not be more than 100 charachetrs");
            return false;
        }
        if (product.Price < 0) {
            console.log("Price should not be -ve");
            return false;
        }
        return true;
    };
    ProductFactory.prototype.getProducts = function () {
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Dell', "Dell XPS 15", 120000));
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Dell', "Dell XPS 13", 90000));
        this.products.push(new Product(102, 'Iron', 'ECL', "Panasonic", "Automic Iron", 2000));
        this.products.push(new Product(103, 'Lays', 'FOD', "Lays", "Potato Chips", 20));
        return this.products;
    };
    ProductFactory.prototype.addProduct = function (prd) {
        if (this.validateProduct(prd)) {
            this.products.push(prd);
            return this.products;
        }
        return this.products;
    };
    ProductFactory.prototype.filterProducts = function (filter, criteria) {
        var response;
        switch (filter) {
            case "Category":
                response = this.products.filter(function (product, i) {
                    if (product.Category === criteria)
                        return product;
                });
                break;
            case "Manufacturer":
                response = this.products.filter(function (product, i) {
                    if (product.Manufacturer === criteria)
                        return product;
                });
                break;
            default:
                return this.products;
        }
        return response;
    };
    ProductFactory.prototype.deleteProduct = function (productId) {
        if (this.isPresent(productId)) {
            this.products = this.products.filter(function (item) { return item.ProductId != productId; });
            return this.products;
        }
        console.log("Product not present...");
        this.products;
    };
    return ProductFactory;
}());
var factory = new ProductFactory();
factory.getProducts().forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.addProduct(new Product(104, 'Water Bottle', 'ESL', "Milton", "Metal Bottle", 200)).forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.addProduct(new Product(105, 'Balaji Chips', 'FOD', "Balaji", "Potato Chips", 20)).forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.addProduct(new Product(106, 'Balaji Chips', 'FOD', "Balaji", "Potato Chips", -20)).forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.filterProducts("Manufacturer", "Dell").forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.filterProducts("Category", "ECT").forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.filterProducts("Name", "ECT").forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
console.log();
factory.deleteProduct(105).forEach(function (products, i) {
    console.log(JSON.stringify(products));
});
