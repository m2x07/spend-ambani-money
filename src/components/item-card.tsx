import { useCartStore } from "../store";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type ItemCartProp = {
    item: {
        id: number;
        name: string;
        price: number;
        url: string | undefined;
    };
};

export default function ItemCard({ item }: ItemCartProp) {
    const cart: CartItem[] = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const setQuantity = useCartStore((state) => state.setQuantity);

    function getItemQuantityFromCart(): number {
        const _index = cart.findIndex((i) => i.id === item.id);

        if (_index !== -1) {
            // return the quantity of the item if it exists in the cart
            // i.e when '_index' is not '-1'
            return cart[_index].quantity;
        }

        return 0;
    }

    return (
        <div className="flex w-[350px] max-w-[350px] shrink flex-col gap-2 rounded-md bg-secondary p-2">
            <div className="flex aspect-square w-full items-center justify-center p-5">
                <img src={item.url} alt={item.name} />
            </div>
            <div className="text-center">
                <div className="text-xl font-medium">{item.name}</div>
                <div className="text-xl font-medium">$ {item.price}</div>
                <div className="mt-2 flex justify-evenly">
                    <button
                        onClick={() => {
                            decreaseQuantity(item.id);
                        }}
                        className="btn-red">
                        -
                    </button>
                    <input
                        type="number"
                        name="quantity"
                        onChange={(event) => {
                            setQuantity(
                                {
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                },
                                event.target.valueAsNumber,
                            );
                        }}
                        className="input w-24 rounded-md bg-bg text-center"
                        id="quantity"
                        value={getItemQuantityFromCart()}
                    />
                    <button
                        onClick={() => {
                            addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                            });
                        }}
                        className="btn-green">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
