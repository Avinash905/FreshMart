const Contact = () => {
  return (
    <section id="contact">
      <div className="flex text-white flex-col items-center justify-around md:flex-row max-w-6xl mx-auto p-4 py-12 text-center md:text-left">
        <div className="flex flex-col gap-2 basis-2/3">
          <h2 className="text-3xl text-white font-bold">
            Stay Fresh with Our Newsletter
          </h2>
          <p>
            Join our community of food enthusiasts and let us inspire your
            culinary adventures.
          </p>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded h-max outline-none"
            />
            <button className="px-4 py-1.5 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black font-bold rounded my-5">
              Notify me
            </button>
          </div>
          <p>Read about our terms and conditions.</p>
          <span className="text-yellow-400 underline">Privacy Policy</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
