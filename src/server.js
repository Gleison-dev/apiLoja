import express from "express";
import { userRoute } from "./routes/user.route.js";
import { productRoute } from "./routes/product.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoute);
app.use(productRoute);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});