import { useMemo } from "react";

const CartItem = ({
  name,
  quantity,
  price,
}: {
  name: string;
  quantity: number;
  price: number;
}) => {
  return (
    <li className="item">
      <span>{name}</span>
      <span>{price}€</span>
      <span>({quantity})</span>
    </li>
  );
};

export default function Cart({
  products,
}: {
  products: { name: string; quantity: number; price: number; id: number }[];
}) {
  const total = useMemo(
    () =>
      products.reduce((acc, { quantity, price }) => quantity * price + acc, 0),
    [products]
  );

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {products.map(({ name, quantity, price, id }) => (
          <CartItem name={name} quantity={quantity} price={price} key={id} />
        ))}
      </ul>
      <span>Total: {total}</span>
    </div>
  );
}
