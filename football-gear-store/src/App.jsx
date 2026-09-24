import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header storeName="Football Gear Store" />

      <Hero
        title="Gear Up for Game Day"
        subtitle="Shop quality football gear built for performance."
        buttonText="Shop Now"
      />

      <h1>Featured Football Gear</h1>

      <div className="products">
        <ProductCard
          name="Football Helmet"
          price="199.99"
          image="https://placehold.co/600x400?text=Football+Helmet"
          description="A durable football helmet designed for protection and comfort."
        />

        <ProductCard
          name="Football Gloves"
          price="39.99"
          image="https://placehold.co/600x400?text=Football+Gloves"
          description="High-grip football gloves to help you secure every catch."
        />

        <ProductCard
          name="Football Cleats"
          price="89.99"
          image="https://placehold.co/600x400?text=Football+Cleats"
          description="Lightweight football cleats built for speed and traction."
        />
      </div>

      <Footer
        storeName="Football Gear Store"
        email="footballgear@example.com"
      />
    </div>
  )
}

export default App