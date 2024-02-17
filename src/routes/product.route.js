import { Router } from "express";
import { 
    createProduct, 
    getAllProducts,
    getProductById,
    updatePrice,
    deleteProduct
 } from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.post("/new-product", (req, res) => {
    const { name, brand, category, price } = req.body;
    const newProduct = createProduct(name, brand, category, price);
    res.status(201).json({newProduct});
});

productRoute.get("/products", (req, res) => {
    const products = getAllProducts();
    res.json({products});
});

productRoute.get("/product-find-id/:id", (req, res) => {
    const id = req.params.id;
    const productFindId = getProductById(id);
    res.json({productFindId});
});

productRoute.patch("/price-update/:id", (req, res) => {
    const id = req.params.id;
    const { newPrice } = req.body;
    const priceUpdate = updatePrice(id, newPrice);
    res.json({priceUpdate});
});

productRoute.delete("/delete-product/:id", (req, res) => {
    const id = req.params.id;
    const delProduct = deleteProduct(id);
    res.json({delProduct});
});

export { productRoute }