import Footer from "./components/footer.tsx";
import Header from "./components/header";
import ItemCard from "./components/item-card";
import products from "./product-list.ts";
import { useCartStore } from "./store.ts";

function App() {
    const bal = useCartStore((state) => state.availableNetworth);
    const spent = useCartStore((state) => state.moneySpent);
    const spentInPercent = ((spent / 110000000000) * 100).toFixed(2);

    return (
        <>
            <Header />
            <div className="wrapper m-auto mb-3 max-w-7xl px-2">
                <div className="mb-3 flex flex-col items-center gap-2 rounded-md bg-secondary p-2">
                    <img
                        src="/img/mukesh-ambani.webp"
                        alt="Mukesh Ambani - Asia's richest person from India"
                        className="max-w-[275px] rounded sm:max-w-xs"
                    />
                    <div className="text-center">
                        <h2 className="text-2xl font-medium">Mukesh Ambani</h2>
                        <span className="text-muted">
                            Chairman and managing director, Reliance Industries
                        </span>
                    </div>
                </div>
                <div className="sticky top-0 mb-3 flex flex-col justify-between gap-2 bg-bg text-center text-xl font-medium text-black md:flex-row md:text-2xl">
                    <div className="flex justify-center rounded-md bg-green-400 p-2 md:flex-1 dark:bg-green-500">
                        Net Worth: $ {bal}
                    </div>
                    <div className="flex justify-center rounded-md bg-blue-400 p-2 md:flex-1 dark:bg-blue-500">
                        You Spent: $ {spent} ({spentInPercent}%)
                    </div>
                </div>
                <div className="mb-3 flex flex-wrap justify-evenly gap-x-2 gap-y-8 rounded-md bg-bg p-2 py-4">
                    {products.map((item) => (
                        <ItemCard
                            key={item.id}
                            item={{
                                id: item.price,
                                name: item.name,
                                price: item.price,
                                url: item.imgUrl,
                            }}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
