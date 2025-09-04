import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
