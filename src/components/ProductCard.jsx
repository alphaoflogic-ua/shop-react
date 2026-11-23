function ProductCard({ title, photo, price, rating, oldPrice, discount }) {
  return (
    <a className="flex flex-col gap-sm" href="/product.html">
      <img
        className="w-full object-cover rounded-md bg-product-bg aspect-square"
        src={photo}
        alt={title}
      />
      <h3 className="mb-sm text-product-title">{title}</h3>
      <div className="flex items-center gap-sm text-caption">
        <span
          className="h-icon-md w-[calc(var(--spacing-icon-md)*5)] bg-[linear-gradient(90deg,var(--color-rating)_calc(var(--rating)/5*100%),var(--color-border)_0)] mask-[url('/images/product-card/star.svg')] mask-repeat-x mask-size-[var(--spacing-icon-md)_var(--spacing-icon-md)]"
          style={{ '--rating': rating }}
        ></span>
        <span>{rating}/5</span>
      </div>
      <div className="flex items-center gap-sm text-price font-bold">
        <span>${price}</span>
        {oldPrice && <del className="text-text-muted">${oldPrice}</del>}
        {discount && (
          <span className="py-sm px-xs rounded-pill bg-discount-bg text-discount text-caption font-medium">
            -{discount}%
          </span>
        )}
      </div>
    </a>
  )
}

export default ProductCard