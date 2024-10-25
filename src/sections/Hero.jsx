import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoe, setBigshoe] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 pt-10 xl:pt-28">
        <p className="text-lg sm:text-xl font-montserrat text-coral-red mt-10">
          Our summer collection
        </p>
        <h1 className="mt-4 sm:mt-10 font-palanquin text-5xl sm:text-6xl lg:text-8xl font-bold max-sm:text-4xl leading-tight">
          <span className="xl:bg-white xl:whitespace-nowrap relative xl:z-10 pr-6 sm:pr-10 rounded-full">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-1 sm:mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 mb-6 sm:mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop me" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 sm:mt-20 gap-10 sm:gap-16">
          {statistics.map((state) => (
            <div key={state.label}>
              <p className="text-2xl sm:text-4xl font-palanquin font-bold">{state.value}</p>
              <p className="leading-5 sm:leading-7 font-montserrat text-slate-gray text-sm sm:text-base">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 sm:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="bigShoe"
          width={350} // Reduced width for mobile
          height={300} // Reduced height for mobile
          className="object-contain relative z-10 max-w-[80%] sm:max-w-[100%]"
        />
        <div className="flex gap-3 sm:gap-6 absolute -bottom-[5%] left-4 sm:left-[10%] max-sm:px-4">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigshoe(shoe);
                }}
                bigShoeImg={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
