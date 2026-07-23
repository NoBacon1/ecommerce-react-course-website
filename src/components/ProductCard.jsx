{/* This script pulled the product card set up in Home into its own component to be used whenever we need it */ }
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart, cartItems } = useCart();
    const productInCart = product
    ? cartItems.find((item) => item.id === product.id)
    : null;

    const productQuanityLabel = productInCart 
    ? `(${productInCart.quantity})`
    : "";

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-card-image" />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">${product.price}</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>
                        View Details
                    </Link>
                    <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product.id)}
                    >
                        Add to Cart {productQuanityLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}