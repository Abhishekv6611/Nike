import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  Superquality,
  Footer,
  CustomerReview,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Superquality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="xl:padding-1 bg-pale-blue  rounded-s-xl">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding  rounded-s-3xl">
        <Footer />
      </section>
    </section>
  </main>
);
export default App;
