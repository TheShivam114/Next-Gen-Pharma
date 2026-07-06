function ProductCard({ icon: Icon, name, products }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
        <Icon className="text-3xl text-teal-600" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-800">
        {name}
      </h3>

      <p className="mt-2 text-slate-500">
        {products}
      </p>

      <button className="mt-6 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
        View Range
      </button>

    </div>
  );
}

export default ProductCard;