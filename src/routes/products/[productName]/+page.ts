import { PRODUCTS } from '$lib/products'
import { RESEARCH } from '$lib/research.js'

export const load = async ({ params }) => {
    const product_index = PRODUCTS.findIndex(product => product.name === params.productName)
    const product = PRODUCTS[product_index]

    if (!product) {
        return {
            name: "Product not found",
            image: "https://images.unsplash.com/photo-1489619547086-641e1c87c3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80",
            price: 0,
            co2_kg: 0,

            initialParagraph: "This product was not found.",
            quantity: "N/A",
            emissions: "N/A",
            otherConcerns: "N/A",
            sources: []
        }
    }

    let research = RESEARCH[product_index]

    return {
        ...product,
        ...research,
    }
}