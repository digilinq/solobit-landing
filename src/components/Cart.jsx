import React from "react";
import CartItem from "./CartItem";

const cartItems = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
];

const Cart = () => {

    const handleRemove = (id) => {
        // Logic to remove item from cart
    };

    return (
        <div className={`container mx-auto px-4`}>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default Cart;
