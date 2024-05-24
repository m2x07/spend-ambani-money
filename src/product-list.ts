export interface Item {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

const items: Item[] = [
    {
        id: 0,
        name: "Rolls-Royce La Rose Noire",
        price: 30000000,
        imgUrl: "/img/products/rr-la-rose-noire.webp",
    },
    {
        id: 1,
        name: "Rolls Royce Boat Tail",
        price: 36000000,
        imgUrl: "/img/products/rr-boat-tail.webp",
    },
    {
        id: 2,
        name: "Bugatti La Voiture Noire",
        price: 19000000,
        imgUrl: "/img/products/bugatti-la-voiture-noire.webp",
    },
    {
        id: 3,
        name: "Pagani Zonda HP Barchetta",
        price: 23650000,
        imgUrl: "/img/products/pagani-zonda-hp.webp",
    },
    {
        id: 4,
        name: "SP Automotive Chaos",
        price: 14000000,
        imgUrl: "/img/products/sp-automotive-chaos.webp",
    },
    {
        id: 5,
        name: "Lamborghini Venemo",
        price: 4500000,
        imgUrl: "/img/products/lamborghini-venemo.webp",
    },
];

export default items;
