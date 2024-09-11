import { ALL_PRODUCTS } from "../database/products";

export const ProductsRepository = {
    getAllProducts: async () => {
        return Promise.resolve(ALL_PRODUCTS);
    }
};
