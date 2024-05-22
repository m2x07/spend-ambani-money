import ModeToggle from "./mode-toggle";

export default function Header() {
    return (
        <header className="w-screen bg-gradient-to-b from-blue-500 to-blue-600 text-black mb-3">
            <div className="m-auto flex max-w-7xl items-center justify-between py-2">
                <h1 className="heading-one-text font-narrow text-3xl font-semibold uppercase text-yellow-400 sm:text-4xl">
                    Spend Ambani's Money
                </h1>
                <ModeToggle className="rounded-md p-2" />
            </div>
        </header>
    );
}
