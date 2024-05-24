import { create } from "zustand";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type NewCartItem = {
    id: number;
    name: string;
    price: number;
};

interface StoreState {
    cart: CartItem[];
    availableNetworth: number;
    moneySpent: number;
    addToCart: (i: NewCartItem) => void;
    decreaseQuantity: (i: number) => void;
    setQuantity: (i: NewCartItem, q: number) => void;
}

export const useCartStore = create<StoreState>()((set) => ({
    cart: [],
    availableNetworth: 110000000000,
    moneySpent: 0,
    addToCart: (newItem: NewCartItem) => {
        set((state) => {
            const _index = state.cart.findIndex((i) => i.id === newItem.id);
            if (_index > -1) {
                const updatedCart: CartItem[] = state.cart.map((i) =>
                    i.id === newItem.id ? { ...newItem, quantity: i.quantity + 1 } : i,
                );
                return {
                    cart: updatedCart,
                    availableNetworth: state.availableNetworth - newItem.price,
                    moneySpent: state.moneySpent + newItem.price,
                };
            }

            return {
                cart: [...state.cart, { ...newItem, quantity: 1 }],
                availableNetworth: state.availableNetworth - newItem.price,
                moneySpent: state.moneySpent + newItem.price,
            };
        });
    },
    decreaseQuantity: (id: number) => {
        set((state) => {
            const _index = state.cart.findIndex((i) => i.id === id);
            const n: CartItem = state.cart.find((item) => item.id === id) as CartItem;
            if (state.cart[_index].quantity === 1) {
                return {
                    cart: state.cart.filter((item) => item.id !== id),
                    availableNetworth: state.availableNetworth + n.price,
                    moneySpent: state.moneySpent - n.price,
                };
            }
            const updatedCart: CartItem[] = state.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            );
            return {
                cart: updatedCart,
                availableNetworth: state.availableNetworth + n.price,
                moneySpent: state.moneySpent - n.price,
            };
        });
    },
    setQuantity: (item, newQuantity) => {
        set((state) => {
            const _index = state.cart.findIndex((i) => i.id === item.id);

            if (isNaN(newQuantity)) {
                newQuantity = 0;
            }
            const prevQuantity =
                state.cart[_index] == undefined ? 0 : state.cart[_index].quantity;

            // diff is the difference between the previous item quantity and the new one
            // it is used to calculate the values for moneySpent and availableNetworth
            const diff = newQuantity - prevQuantity;
            const newAvailNet = state.availableNetworth - diff * item.price;
            const newMoneySpent = state.moneySpent + diff * item.price;

            if (_index === -1) {
                return {
                    cart: [...state.cart, { ...item, quantity: newQuantity }],
                };
            }

            return {
                cart: state.cart.map((i) =>
                    i.id === item.id ? { ...i, quantity: newQuantity } : i,
                ),
                availableNetworth: newAvailNet,
                moneySpent: newMoneySpent,
            };
        });
    },
}));
