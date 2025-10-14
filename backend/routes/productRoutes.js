import express from "express";
const router = express.Router();

// controllers
import {
    addProduct,
    updateProductDetails,
    removeProduct,
    fetchProducts,
    fetchAllProducts,
    fetchProductById,
    addProductReview,
    fetchTopProducts,
    fetchNewProducts,
    filterProducts,
} from "../controllers/productController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";
import ExpressFormidable from "express-formidable";

router.route("/")
    .get(fetchProducts)
    .post(authenticate, authorizeAdmin, ExpressFormidable(), addProduct);

router.route("/allProducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router.route("/:id")
    .get(fetchProductById)
    .put(authenticate, authorizeAdmin, ExpressFormidable(), updateProductDetails)
    .delete(authenticate, authorizeAdmin, removeProduct);

router.route("/filtered-products").post(filterProducts);

export default router;
