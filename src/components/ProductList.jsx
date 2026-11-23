import ProductCard from './ProductCard'
import { products } from '../data/products'

function ProductList() {
  const newProducts = products.filter((product) => product.group === 'new')

  return (
    <section className="py-xl">
      <h2 className="mb-2xl font-heading text-title leading-none text-center uppercase">
        New Arrivals
      </h2>
      <div className="grid grid-cols-4 gap-md">
        {newProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
      <a
        className="block w-fit mx-auto mt-lg py-xs px-2xl border border-border rounded-pill text-text"
        href="/category.html"
      >
        View All
      </a>
    </section>
  )
}

export default ProductList