export interface Item {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

const items: Item[] = [
    {
        id: 0,
        name: "Big Mac",
        price: 4.89,
        imgUrl: "/img/products/big-mac.webp",
    },
    {
        id: 1,
        name: "McNuggets (6pcs)",
        price: 4.00,
        imgUrl: "/img/products/mc-nuggets.webp",
    },
    {
        id: 2,
        name: "Steak Quasadilla",
        price: 11.60,
        imgUrl: "/img/products/quesadilla.webp",
    },
    {
        id: 3,
        name: "Burrito Bowl",
        price: 13.60,
        imgUrl: "/img/products/buritto-bowl.webp",
    },
    {
        id: 4,
        name: "Chicken Sandwich",
        price: 8.49,
        imgUrl: "/img/products/chicken-sandwich.webp",
    },
    {
        id: 5,
        name: "Donut",
        price: 1.49,
        imgUrl: "/img/products/donut.webp",
    },
    {
        id: 6,
        name: "Margherita Pizza",
        price: 13.99,
        imgUrl: "/img/products/pizza.webp",
    },
    {
        id: 7,
        name: "Biryani",
        price: 10.49,
        imgUrl: "/img/products/biryani.webp",
    },
    {
        id: 8,
        name: "Dosa",
        price: 5.45,
        imgUrl: "/img/products/dosa.webp",
    },
    {
        id: 9,
        name: "Medu Wada",
        price: 4.5,
        imgUrl: "/img/products/medu-vada.webp",
    },
    {
        id: 10,
        name: "Redbull",
        price: 1.92,
        imgUrl: "/img/products/redbull.webp",
    },
    {
        id: 11,
        name: "Prime",
        price: 29.99,
        imgUrl: "/img/products/prime.webp",
    },
    {
        id: 12,
        name: "Iphone",
        price: 900,
        imgUrl: "/img/products/iphone.webp",
    },
    {
        id: 13,
        name: "Macbook Pro M3 16'",
        price: 3999,
        imgUrl: "/img/products/macbook.webp",
    },
    {
        id: 14,
        name: "iPad Pro 13inch 1TB",
        price: 2400,
        imgUrl: "/img/products/ipad.webp",
    },
    {
        id: 15,
        name: "Android Phone",
        price: 499,
        imgUrl: "/img/products/android-phone.webp",
    },
    {
        id: 16,
        name: "Build a PC",
        price: 2500,
        imgUrl: "/img/products/gaming-pc.webp",
    },
    {
        id: 17,
        name: "Tunnel Boring Machine",
        price: 2000000,
        imgUrl: "/img/products/tunnel-boring-machine.webp",
    },
    {
        id: 18,
        name: "Flight Simulator Cabin",
        price: 799000,
        imgUrl: "/img/products/flight-simulator-cabin.webp",
    },
    {
        id: 19,
        name: "Inflatable theme park",
        price: 10000,
        imgUrl: "/img/products/inflatable-theme-park.webp",
    },
    {
        id: 20,
        name: "Tactical army gear",
        price: 8000,
        imgUrl: "/img/products/tactical-army-gear.webp",
    },
    {
        id: 21,
        name: "Ronaldo (1 year contract)",
        price: 207000000,
        imgUrl: "/img/products/ronaldo.webp",
    },
    {
        id: 22,
        name: "Armed Black Hawk",
        price: 2300000000,
        imgUrl: "/img/products/black-hawk.webp",
    },
    {
        id: 23,
        name: "Lockheed Martin - ATACMS",
        price: 10000000000,
        imgUrl: "/img/products/atacms.webp",
    },
    {
        id: 24,
        name: "Barret M82A1 50 Cal",
        price: 14000,
        imgUrl: "/img/products/Model-82A1-29-BBL-MP.webp",
    },
    {
        id: 25,
        name: "Glock 19",
        price: 550,
        imgUrl: "/img/products/glock.webp",
    },
    {
        id: 26,
        name: "Make a movie",
        price: 200000000,
        imgUrl: "/img/products/movie.webp",
    },
    {
        id: 27,
        name: "Personal Z+ Security Unit, 1 year",
        price: 3000000,
        imgUrl: "/img/products/security.webp"
    },
    {
        id: 28,
        name: "Rolls-Royce La Rose Noire",
        price: 30000000,
        imgUrl: "/img/products/rr-la-rose-noire.webp",
    },
    {
        id: 29,
        name: "Rolls Royce Boat Tail",
        price: 36000000,
        imgUrl: "/img/products/rr-boat-tail.webp",
    },
    {
        id: 30,
        name: "Bugatti La Voiture Noire",
        price: 19000000,
        imgUrl: "/img/products/bugatti-la-voiture-noire.webp",
    },
    {
        id: 31,
        name: "Pagani Zonda HP Barchetta",
        price: 23650000,
        imgUrl: "/img/products/pagani-zonda-hp.webp",
    },
    {
        id: 32,
        name: "SP Automotive Chaos",
        price: 14000000,
        imgUrl: "/img/products/sp-automotive-chaos.webp",
    },
    {
        id: 33,
        name: "Lamborghini Venemo",
        price: 4500000,
        imgUrl: "/img/products/lamborghini-venemo.webp",
    },
    {
        id: 34,
        name: "Spotify (100 years)",
        price: 13188,
        imgUrl: "/img/products/spotify.webp",
    },
    {
        id: 35,
        name: "Youtube Premium (100 years)",
        price: 10999,
        imgUrl: "/img/products/yt-premium.webp",
    },
    {
        id: 36,
        name: "Gym Membership (100 years)",
        price: 48000,
        imgUrl: "/img/products/gym.webp",
    },
    {
        id: 37,
        name: "Bachelors Degree",
        price: 300000,
        imgUrl: "/img/products/degree.webp",
    },
    {
        id: 38,
        name: "Doctorate (P.hd)",
        price: 500000,
        imgUrl: "/img/products/degree.webp",
    },
    {
        id: 39,
        name: "Go Bunjee Jumping",
        price: 79,
        imgUrl: "/img/products/bunjee-jumping.webp",
    },
    {
        id: 40,
        name: "Go Sky diving",
        price: 499,
        imgUrl: "/img/products/sky-diving.webp",
    },
    {
        id: 41,
        name: "Trip to UAE (1month)",
        price: 20000,
        imgUrl: "/img/products/dubai.webp",
    },
    {
        id: 42,
        name: "Trip to India (3 month)",
        price: 10000,
        imgUrl: "/img/products/india.webp",
    },
    {
        id: 43,
        name: "Begin an AI startup",
        price: 2000000,
        imgUrl: "/img/products/startup.webp",
    },
    {
        id: 44,
        name: "Hire a professional hitman",
        price: 50000,
        imgUrl: "/img/products/hitman.webp",
    },
    {
        id: 45,
        name: "Get married",
        price: 80000,
        imgUrl: "/img/products/marriage.webp",
    },
    {
        id: 46,
        name: "Cab ride (5 km)",
        price: 29.64,
        imgUrl: "/img/products/cab.webp",
    },
    {
        id: 47,
        name: "Watch a movie",
        price: 45,
        imgUrl: "/img/products/movie-ticket.webp",
    },
    {
        id: 48,
        name: "Throw a rave party",
        price: 15000,
        imgUrl: "/img/products/rave-party.webp",
    },
    {
        id: 49,
        name: "Entire steam store",
        price: 1000000,
        imgUrl: "/img/products/steam.webp",
    }
];

export default items;
