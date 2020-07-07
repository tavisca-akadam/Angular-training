class Product {
    constructor(
        public ProductId: number,
        public ProductName: string,
        public Category: string,
        public Manufacturer: string,
        public Description: string,
        public Price: number
    ) { }
}

class ProductFactory {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
    }
    isPresent(productId: number): boolean {
        if (this.products.filter(product => product.ProductId === productId).length > 0)
            return true;
        return false;
    }
    validateProduct(product: Product): boolean {
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
    }
    getProducts(): Array<Product> {
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Dell', "Dell XPS 15", 120000));
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Dell', "Dell XPS 13", 90000));
        this.products.push(new Product(102, 'Iron', 'ECL', "Panasonic", "Automic Iron", 2000));
        this.products.push(new Product(103, 'Lays', 'FOD', "Lays", "Potato Chips", 20));
        return this.products;
    }

    addProduct(prd: Product): Array<Product> {
        if (this.validateProduct(prd)) {
            this.products.push(prd);
            return this.products;
        }
        return this.products;
    }

    filterProducts(filter: string, criteria: string): Array<Product> {
        let response: Array<Product>;
        switch (filter) {
            case "Category":
                response = this.products.filter((product, i) => {
                    if (product.Category === criteria)
                        return product;
                });
                break;
            case "Manufacturer":
                response = this.products.filter((product, i) => {
                    if (product.Manufacturer === criteria)
                        return product;
                });
                break;
            default:
                return this.products;

        }
        return response;
    }

    deleteProduct(productId: number): Array<Product> {
        if (this.isPresent(productId)) {
            this.products = this.products.filter(item => item.ProductId != productId);
            return this.products;
        }
        console.log("Product not present...");
        this.products;
    }
}

let factory = new ProductFactory();

factory.getProducts().forEach((products, i) => {
    console.log(JSON.stringify(products));
});
console.log();

factory.addProduct(new Product(104, 'Water Bottle', 'ESL', "Milton", "Metal Bottle", 200)).forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();

factory.addProduct(new Product(105, 'Balaji Chips', 'FOD', "Balaji", "Potato Chips", 20)).forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();

factory.addProduct(new Product(106, 'Balaji Chips', 'FOD', "Balaji", "Potato Chips", -20)).forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();

factory.filterProducts("Manufacturer", "Dell").forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();
factory.filterProducts("Category", "ECT").forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();
factory.filterProducts("Name", "ECT").forEach((products, i) => {
    console.log(JSON.stringify(products));
});

console.log();
factory.deleteProduct(105).forEach((products, i) => {
    console.log(JSON.stringify(products));
});