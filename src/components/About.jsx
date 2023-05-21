const About = () => {
  return (
    <section
      className="bg-white"
      id="about"
    >
      <div className="flex flex-col items-center justify-around md:flex-row max-w-6xl mx-auto p-4 py-12">
        <div className="basis-1/4">
          <img
            className="h-32 md:h-60"
            src="https://ouch-cdn2.icons8.com/B5_rXdYPaC45yPvXaY0Zp7XrRq_7qjR-aHz-jiEBsRw/rs:fit:472:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDU0/LzBlNmEyYjRjLTJh/MzctNDY1OS1hMWZj/LWEyNDcyMTAwZmNk/Mi5zdmc.png"
            alt="groceries"
          />
        </div>
        <div className="flex flex-col basis-1/2 gap-4">
          <h2 className="mx-auto font-bold text-2xl md:text-4xl flex">
            FreshMart: Where Taste Meets Quality
          </h2>
          <p>
            FreshMart is your destination for the finest groceries. We offer a
            handpicked selection of fresh produce and gourmet specialties,
            prioritizing sustainability and local sourcing. Our user-friendly
            website makes shopping easy, with exciting promotions. Join us on a
            flavorful journey to bring taste and quality to your table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
