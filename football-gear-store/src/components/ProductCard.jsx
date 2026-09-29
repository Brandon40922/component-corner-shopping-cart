import './ProductCard.css'

function ProductCard({ name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <p>{description}</p>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard