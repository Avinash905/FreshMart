import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="-mt-20">
      <div className="text-white flex flex-col justify-center items-center gap-3 h-screen text-center">
        <p className="mx-auto text-yellow-400 font-bold uppercase text-sm md:text-md">
          Shop Fresh. Eat Well.
        </p>
        <h1 className="mx-auto font-bold text-3xl md:text-5xl my-5">
          Groceries at Your Fingertips.
        </h1>
        <h2 className="mx-auto font-bold text-xl md:text-4xl flex flex-col md:flex-row gap-2">
          Bringing Quality
          <div className="text-yellow-400">
            <Typewriter
              options={{
                strings: ["Ingredients", "Groceries"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          to Your Kitchen
        </h2>
        <p className="mx-auto font-bold text-gray-500 text-lg md:text-2xl">
          FreshMart provides a wide selection of quality groceries delivered to
          your doorstep.
        </p>
        <button className="px-8 py-3 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black font-bold rounded my-5">
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
