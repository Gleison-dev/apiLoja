import { Product } from "../models/Product.model.js";

let listProduct = [];

function createProduct(name, brand, category, price){
    const newProduct = new Product(name, brand, category, price);
    listProduct.push(newProduct);
    return newProduct;
}

function getAllProducts(){
    return listProduct;
}

function getProductById(id){
    let product = listProduct.find(data => data.id === id);
    if(product){
        return product;
    }else{
        return "ID não encontrado!"
    }
}

function updatePrice(id, newPrice){
    let product = listProduct.find(data => data.id === id);
    if(product){
        const productIndex = listProduct.findIndex(data => data.id === id);
        listProduct[productIndex].price = newPrice;
        return listProduct[productIndex];
    }else{
        return "ID não encontrado!"
    }
}

function deleteProduct(id){
    let product = listProduct.find(data => data.id === id);
    if(product){
        const productIndex = listProduct.findIndex(data => data.id === id);
        listProduct.splice(productIndex, 1);
        return "Produto removido com sucesso!"
    }else{
        return "ID não encontrado!"
    }
}

export { createProduct, getAllProducts, getProductById, updatePrice, deleteProduct }