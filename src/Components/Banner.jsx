const Banner = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Your Dream Job
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Find the best opportunities tailored to your skills and career goals. Join thousands of professionals advancing their careers.
          </p>
          <button className="btn btn-primary text-white text-lg">
            Browse Jobs
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://i.ibb.co/Q7hHC4Zg/Whats-App-Image-202-04-30-at-21-45-32-eb0e14c3-min.jpg"
            alt="Job Search Illustration"
            className="w-full max-w-lg mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;