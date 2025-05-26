import { Link, useLoaderData } from "react-router";
const CompaniesSection = () => {

  const companies = useLoaderData()

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
          Featured Companies
        </h2>
        <p className="text-gray-600 text-lg">
          Explore top companies hiring right now.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {companies && companies.length > 0 ? (
          companies?.map((company) => (
            <Link
              to={`/Company-Details/${company.id}`}
              key={company.id}
              title={company.name}
              className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg shadow flex flex-col items-center transition"
            >
              <img
                src={company.logo || "https://via.placeholder.com/80"}
                alt={company.name}
                className="w-20 h-20 object-cover mb-2 rounded-full "
              />
              <p className="text-gray-800 font-medium text-center">
                {company.name}
              </p>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No companies found.
          </p>
        )}
      </div>
    </section>
  );
};

export default CompaniesSection;