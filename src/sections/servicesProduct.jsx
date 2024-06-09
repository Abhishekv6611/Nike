import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
const servicesProduct = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((services) => (
        <ServiceCard key={services.label} {...services} />
      ))}
    </section>
  );
};

export default servicesProduct;
