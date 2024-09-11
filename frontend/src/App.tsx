/* eslint-disable @typescript-eslint/no-explicit-any */
import Stock from "./components/Stock/Stock";
import Cart from "./components/Cart/Cart";
import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "./productsService";

export default function App() {
  const [products, setProducts] = useState<
    { name: string; quantity: number; price: number; id: number }[]
  >([]);

  const [cart, setCart] = useState<
    { name: string; quantity: number; price: number; id: number }[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await getProducts();
      setProducts(productsResponse.products);
    };

    fetchProducts();
  }, [setProducts]);

  const onAddToCartHandler = useCallback(
    (productId: number) => {
      // Update the quantity of a given product in the stock
      const updateQuantity = (
        sourceList: any,
        id: number,
        operator: (q: number) => number
      ) => {
        return sourceList.map((product: any) =>
          id === product.id
            ? { ...product, quantity: operator(product.quantity) }
            : product
        );
      };

      setProducts(updateQuantity(products, productId, (q: number) => --q));

      const index = cart.findIndex(({ id }) => productId === id);

      // If the product is already in the cart, increase the quantity
      if (index !== -1) {
        setCart(updateQuantity(cart, productId, (q) => ++q));

      // Otherwise, add the product to the cart
      } else {
        const p = products.find(({ id }) => productId === id);
        const updatedCart = [...cart, { ...p, quantity: 1 }];

        setCart(updatedCart as any);
      }
    },
    [setProducts, products, setCart, cart]
  );

  return (
    <div className="App">
      <Stock products={products} onAddToCart={onAddToCartHandler} />
      <Cart products={cart} />
    </div>
  );
}
