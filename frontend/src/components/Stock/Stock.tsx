type ItemProps = {
  name: string;
  quantity: number;
  price: number;
  id: number;
  onAddToCart: (id: number) => void;
};

const Item = ({ name, quantity, price, id, onAddToCart }: ItemProps) => {
  return (
    <li className="item">
      <span>{name}</span>
      <span>{price}€</span>
      <span>{quantity} left</span>
      {quantity > 0 && (
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      )}
    </li>
  );
};

interface StockProps {
  products: {
    name: string;
    quantity: number;
    price: number;
    id: number;
  }[];
  onAddToCart: (id: number) => void;
}

export default function Stock({ products , onAddToCart }: StockProps) {
  return (
    <div className="stock">
      <h1>Products</h1>
      <ul>
        {products.map(({ name, quantity, price, id }) => (
          <Item
            name={name}
            quantity={quantity}
            price={price}
            key={id}
            id={id}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
}
