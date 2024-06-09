import { offer } from "../assets/images";
import Button from "../components/Button";
const specialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span>{" "}
          Offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='View Details'/>
          <Button label="Learn more" backgroundColor='bg-white' bordderColor='border-slate-gray' textColor="text-slate gray" RounD="rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default specialOffer;
