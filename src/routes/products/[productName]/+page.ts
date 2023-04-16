import { PRODUCTS } from '$lib/products'

export const load = ({ params }) => {
    const product = PRODUCTS.find(p => p.name === params.productName)

    if (!product) {
        return {
            name: "Product not found",
            image: "https://images.unsplash.com/photo-1489619547086-641e1c87c3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80",
            co2_kg: 0
        }
    }

    return {
        name: product.name,
        image: product.image,
        co2_kg: product.co2_kg
    }
}