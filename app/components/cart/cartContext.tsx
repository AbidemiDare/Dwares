"use client";

import { createContext, useContext, useReducer, Dispatch } from "react";

interface cartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: cartItem[];
  dispatch: Dispatch<Action>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type Action =
  | { type: "ADD_TO_CART"; payload: cartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "CLEAR_CART" };

const cartReducer = (state: cartItem[], action: Action): cartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
