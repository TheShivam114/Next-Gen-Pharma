import ProductCard from "./ProductCard";
import categories from "../../data/categories";

function ProductCategories() {
  return (
    <section className="bg-sky-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="font-semibold uppercase tracking-widest text-teal-600">
            Our Products
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            Product Categories
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Explore our comprehensive portfolio of pharmaceutical
            products designed to meet diverse healthcare needs.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <ProductCard
              key={category.name}
              icon={category.icon}
              name={category.name}
              products={category.products}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductCategories;