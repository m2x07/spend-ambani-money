export default function ItemCard() {
    return (
        <div className="flex w-[350px] max-w-[350px] shrink flex-col gap-2 rounded-md bg-secondary p-2">
            <div className="aspect-square w-full "></div>
            <div className="text-center">
                <div className="text-xl font-medium">Some nice product</div>
                <div className="text-xl font-medium">$ 999</div>
                <div className="mt-2 flex justify-evenly">
                    <button className="btn-red">-</button>
                    <input
                        type="number"
                        name="quantity"
                        className="w-24 rounded-md bg-bg text-center"
                        id="quantity"
                        min={0}
                        value={0}
                    />
                    <button className="btn-green">+</button>
                </div>
            </div>
        </div>
    );
}
