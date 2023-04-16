export type Product = {
    name: string;
    price: number;
    image: string;
    co2_kg: number;
    sell_duration: number;
};


/*
    walnuts
    corn on the cob
    steak
    sushi
    iphone
    electric car
    gas car
    house
    private jet
    passenger airliner
*/

export const PRODUCTS: Product[] = [
    // sell duration is the 1 second plus the log base 10 of the price
    {
        name: 'Corn',
        price: 1,
        image:
            'https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        co2_kg: 0.01,
        sell_duration: 1
    },
    {
        name: 'Walnuts',
        price: 5,
        image:
            'https://images.unsplash.com/photo-1601966915100-b217f1420977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
        co2_kg: -0.03,
        sell_duration: 1.7
    },
    {
        name: 'Steak',
        price: 15,
        image:
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 0,
        sell_duration: 2.1
    },
    {
        name: 'Sushi',
        price: 25,
        image:
            'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        co2_kg: 0,
        sell_duration: 2.4
    },
    {
        name: 'Sweatshirt',
        price: 50,
        image: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80',
        co2_kg: 0,
        sell_duration: 2.7
    },
    {
        name: 'Gaming Console',
        price: 500,
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        co2_kg: 0,
        sell_duration: 3.7
    },
    {
        name: 'iPhone',
        price: 1_000,
        image:
            'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        co2_kg: 0,
        sell_duration: 4
    },
    {
        name: 'Gas Car',
        price: 50_000,
        image:
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 0,
        sell_duration: 5.7
    },
    {
        name: 'Electric Car',
        price: 100_000,
        image:
            'https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        co2_kg: 0,
        sell_duration: 6
    },
    {
        name: 'Sports Car',
        price: 200_000,
        image:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 0,
        sell_duration: 6.3
    },
    {
        name: 'House',
        price: 500_000,
        image:
            'https://images.unsplash.com/photo-1623784929309-703b81d39eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80',
        co2_kg: 0,
        sell_duration: 6.7
    },
    {
        name: 'Private Jet',
        price: 10_000_000,
        image:
            'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        co2_kg: 0,
        sell_duration: 8
    },
    {
        name: 'Yacht',
        price: 20_000_000,
        image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        co2_kg: 0,
        sell_duration: 8.3
    },
    {
        name: 'Space Shuttle',
        price: 1_700_000_000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Endeavour_silhouette_STS-130.jpg/1024px-Endeavour_silhouette_STS-130.jpg',
        co2_kg: 0,
        sell_duration: 10.2
    }
];