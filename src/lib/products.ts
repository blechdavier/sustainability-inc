export type Product = {
    name: string;
    price: number;
    image: string;
    co2_kg: number;
    sell_duration: number;
};

export const PRODUCTS: Product[] = [
    // sell duration is the 1 second plus the log base 10 of the price
    {
        name: 'Corn',
        price: 1,
        image:
            'https://images.unsplash.com/photo-1598303080484-8db04d10c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        co2_kg: 0.166,
        sell_duration: 1
    },
    {
        name: 'Walnuts',
        price: 5,
        image:
            'https://images.unsplash.com/photo-1601966915100-b217f1420977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
        co2_kg: 0.098,
        sell_duration: 1.7
    },
    {
        name: 'Steak',
        price: 15,
        image:
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 22.5,
        sell_duration: 2.1
    },
    {
        name: 'Sushi',
        price: 30,
        image:
            'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        co2_kg: 1.36,
        sell_duration: 2.4
    },
    {
        name: 'Sweater',
        price: 100,
        image: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80',
        co2_kg: 52.5,
        sell_duration: 2.7
    },
    {
        name: 'Gaming Console',
        price: 500,
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        co2_kg: 381,
        sell_duration: 3.7
    },
    {
        name: 'iPhone',
        price: 1_200,
        image:
            'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        co2_kg: 98.2,
        sell_duration: 4.1
    },
    {
        name: 'Family Vacation',
        price: 4_000,
        image: "https://images.unsplash.com/photo-1587654542342-c6f9bf970132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        co2_kg: 8800,
        sell_duration: 4.6
    },
    {
        name: 'Motorcycle',
        price: 10_000,
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        co2_kg: 960,
        sell_duration: 5
    },
    {
        name: 'Used Gas Car',
        price: 20_000,
        image: "https://images.unsplash.com/photo-1610411605947-0a96f654d829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
        co2_kg: 46000,
        sell_duration: 5.3
    },
    {
        name: 'Gas Car',
        price: 50_000,
        image:
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 56000,
        sell_duration: 5.7
    },
    {
        name: 'Electric Car',
        price: 100_000,
        image:
            'https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        co2_kg: 19920,
        sell_duration: 6
    },
    {
        name: 'Sports Car',
        price: 200_000,
        image:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 56000,
        sell_duration: 6.3
    },
    {
        name: 'House',
        price: 500_000,
        image:
            'https://images.unsplash.com/photo-1623784929309-703b81d39eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80',
        co2_kg: 270000,
        sell_duration: 6.7
    },
    {
        name: 'Private Jet',
        price: 10_000_000,
        image:
            'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        co2_kg: 703000,
        sell_duration: 8
    },
];