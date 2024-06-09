import { products } from "../constants";
import PopularProductCards from "../components/popularProductCards";
const popularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">popular </span>
          products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          This meta description from TK Maxx manages to hit all the right notes
          in exactly 160 characters. It has some fun turns of phrase that give
          the description character – “Look sharp” and “for a steal”, while also
          conveying the brand’s differentiator: it offers smart clothing from
          big name brands at affordable prices.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4  gap-14">
        {products.map((product) => (
          <PopularProductCards key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default popularProducts;
