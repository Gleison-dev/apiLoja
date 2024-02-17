import { v4 as uuidv4 } from "uuid";

class Product{
    constructor(name, brand, category, price){
        this.id = uuidv4();
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.created_at = new Date().toUTCString();
    }
}

export { Product }