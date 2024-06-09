import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const superquality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Gladiator Sandals, a flat sandal with several wide cross straps
          holding the sole to the foot and with a solitary strap around the
          ankle, can see your feet through the summer season in style. These
          open-toe gladiator sandals shoes will make you look becoming and give
          you a sense of pride and satisfaction, and will give you a sense of
          comfort and relief. When it comes to summer shoes, a pair of well-made
          sandals will stay in your collection for years to come. The sandals
          will make your feet feel in heaven.
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 flex  justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={500}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default superquality;
