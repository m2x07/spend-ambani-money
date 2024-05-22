import Header from "./components/header";
import ItemCard from "./components/item-card";

function App() {
    return (
        <>
            <Header />
            <div className="wrapper m-auto mb-3 max-w-7xl px-2">
                <div className="mb-3 flex flex-col items-center gap-2 rounded-md bg-secondary p-2">
                    <img
                        src="/img/mukesh-ambani.webp"
                        alt="Mukesh Ambani - Asia's richest person"
                        className="max-w-[275px] rounded sm:max-w-xs"
                    />
                    <div className="text-center">
                        <h2 className="text-2xl font-medium">Mukesh Ambani</h2>
                        <span className="text-muted">
                            Chairman and managing director, Reliance Industries
                        </span>
                    </div>
                </div>
                <div className="mb-3 flex flex-col md:flex-row justify-between gap-2 text-center text-xl md:text-2xl font-medium">
                    <div className="flex md:flex-1 justify-center rounded-md bg-green-400 p-2 dark:bg-green-500">
                        Balance: $ 1,000,000,000,000
                    </div>
                    <div className="flex md:flex-1 justify-center rounded-md bg-blue-400 p-2 dark:bg-blue-500">
                        Cart: $ 1,000,000
                    </div>
                </div>
                <div className="mb-3 flex flex-wrap justify-evenly gap-x-2 gap-y-8 py-4 rounded-md bg-bg p-2">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </>
    );
}

export default App;
