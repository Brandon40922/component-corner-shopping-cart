import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CartItem from './components/CartItem'

function App() {
  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      name: "Football Helmet",
      price: 199.99,
      image: "https://placehold.co/600x400?text=Football+Helmet",
      description: "A durable football helmet designed for protection and comfort."
    },
    {
      id: 2,
      name: "Football Gloves",
      price: 39.99,
      image: "https://placehold.co/600x400?text=Football+Gloves",
      description: "High-grip football gloves to help you secure every catch."
    },
    {
      id: 3,
      name: "Football Cleats",
      price: 89.99,
      image: "https://placehold.co/600x400?text=Football+Cleats",
      description: "Lightweight football cleats built for speed and traction."
    },
    {
      id: 4,
      name: "Shoulder Pads",
      price: 149.99,
      image: "https://placehold.co/600x400?text=Shoulder+Pads",
      description: "Protective shoulder pads designed for comfort and impact protection."
    },
    {
      id: 5,
      name: "Football",
      price: 29.99,
      image: "https://placehold.co/600x400?text=Football",
      description: "A durable football designed for practices and game day."
    },
    {
      id: 6,
      name: "Mouthguard",
      price: 14.99,
      image: "https://placehold.co/600x400?text=Mouthguard",
      description: "A comfortable mouthguard designed to help protect your teeth."
    }
  ]

  // Adds a product to the shopping cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Removes an item from the shopping cart
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((item, index) => index !== indexToRemove))
  }

  // Calculates the total price of all items in the cart
  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="app">
      <Header
        storeName="Football Gear Store"
        cartCount={cart.length}
      />

      <Hero
        title="Gear Up for Game Day"
        subtitle="Shop quality football gear built for performance."
        buttonText="Shop Now"
      />

      <h1>Featured Football Gear</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <section className="cart-section">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                name={item.name}
                price={item.price}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </section>

      <Footer
        storeName="Football Gear Store"
        email="footballgear@example.com"
      />
    </div>
  )
}

export default App