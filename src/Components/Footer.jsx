import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-12 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Job Track</h2>
          <p className="text-gray-600">
            Job Track is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/Terms" className="hover:text-blue-600">Terms & Condition</Link>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Job Track. All rights reserved .<br />
        <span className="font-bold text-green-700 font-[roboto] italic">Powered By <span className="font-extrabold">Rakib</span></span>
      </div>
    </footer>
  );
};

export default Footer;