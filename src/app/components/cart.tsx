import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { CartContext } from "../context/cartContext";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const Cart = () => {
  const {
    onRemove,
    toggleCartItemQty,
    totalPrice,
    totalQuantity,
    cartItems,
    showCart,
    setShowCart,
  }: any = useContext(CartContext);

  const handleClose = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-full sm:w-[420px] bg-white h-full shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b bg-gray-100">
          <button
            className="flex items-center text-gray-700 hover:text-gray-900 transition"
            onClick={handleClose}
          >
            <AiOutlineLeft className="mr-2 text-xl" />
            <span className="text-lg font-medium">Your Cart</span>
            <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              {totalQuantity}
            </span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((product: any) => (
              <div
                key={product._id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Image
                  src={urlForImage(product.images[0]).url()}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <h5 className="text-lg font-semibold">{product.name}</h5>
                  <p className="text-gray-600 text-sm">${product.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition"
                      onClick={() => toggleCartItemQty(product._id, "minus")}
                    >
                      <AiOutlineMinus className="text-gray-700" />
                    </button>
                    <span className="mx-3 text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition"
                      onClick={() => toggleCartItemQty(product._id, "plus")}
                    >
                      <AiOutlinePlus className="text-gray-700" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(product)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <TiDeleteOutline size={24} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-gray-100">
            <div className="flex justify-between text-lg font-semibold">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Pay with Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
