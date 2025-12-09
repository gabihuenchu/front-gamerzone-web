import { CartService } from '../../services/cartService'
import { LocalCart } from '../../lib/cart/localCart'
import { getAuthToken, isServerAuthToken } from '../../services/api'

export default function ProductCard({ product }) {
    const priceValue = typeof product?.price === 'number' ? product.price : Number(product?.price) || 0
    const priceText = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(priceValue)
    async function handleBuy() {
        const id = product?.id || product?._id || product?.productId
        if (!id) return
        try {
            const token = getAuthToken()
            const useServer = isServerAuthToken(token)
            if (useServer) {
                await CartService.addToCart(id, 1)
            } else {
                await LocalCart.addItem(id, 1, {
                    name: product?.name,
                    price: product?.price,
                    imageUrl: product?.imageUrl,
                    description: product?.description,
                })
            }
        } catch {
            await LocalCart.addItem(id, 1, {
                name: product?.name,
                price: product?.price,
                imageUrl: product?.imageUrl,
                description: product?.description,
            })
        }
        alert("Producto añadido correctamente")
    }
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src={product?.imageUrl}
                    alt={product?.name || 'Producto'}
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p className="text-lg font-semibold">{priceText}</p>
                {product?.description ? <p>{product.description}</p> : null}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleBuy}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
