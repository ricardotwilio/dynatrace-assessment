import { ProductsRepository } from "./products.repository";
import { Router } from "express";

export const ProductsController = {
    getAllProducts: async (req, res) => {
        const { page, pageSize = 5 } = req.query;

        const products = await ProductsRepository.getAllProducts();

        const start = (Number(page) - 1) * pageSize;
        const end = start + pageSize;

        const paginatedProducts = products.slice(start, end);
        const hasMoreProducts = end < products.length;

        res.json({
            products: paginatedProducts || [],
            page: Number(page),
            pageSize: pageSize,
            hasMoreProducts,
        });
    }
};

const router = Router();

router.get("/", ProductsController.getAllProducts);

export default router;
