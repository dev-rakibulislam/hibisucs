import { FaDatabase, FaHeadphones, FaMoneyBill } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { MdBuild } from "react-icons/md";
import { RiBookMarkedFill } from "react-icons/ri";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Job Track helped me land a job at a company I never even knew existed. The interface is clean and super easy to use!",
    },
    {
      name: "Michael Lee",
      role: "Data Analyst",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "I loved how I could compare job requirements and easily track my applications. Highly recommended!",
    },
    {
      name: "Aisha Patel",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote:
        "The best job board I've used. The personalized matches and clean layout made my job search a breeze.",
    },
  ];
  const categories = [
    { title: "Software Development", icon: <GrCloudSoftware className='text-yellow-500' />, link: "/jobs?category=software" },
    { title: "UI/UX Design", icon: <MdBuild className='text-yellow-500' />, link: "/jobs?category=design" },
    {
      title: "Data & Analytics", icon: <FaDatabase className='text-green-500' />
      , link: "/jobs?category=data"
    },
    { title: "Marketing", icon: <RiBookMarkedFill className='text-blue-500' />
, link: "/jobs?category=marketing" },
    { title: "Finance", icon: <FaMoneyBill className='text-green-500' />
, link: "/jobs?category=finance" },
    { title: "Customer Support", icon: <FaHeadphones className='text-yellow-500' />
, link: "/jobs?category=support" },
  ];
  return (<>
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">What Our Users Say</h2>
        <p className="text-gray-600 text-lg mt-2">Real stories from successful job seekers</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">“{review.quote}”</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Explore by Category</h2>
        <p className="text-gray-600 text-lg mt-2">Find jobs that match your skills and interests</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div 
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow hover:bg-blue-50 text-center transition flex gap-2 flex-col justify-center items-center"
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <h3 className="text-lg font-medium text-gray-800">{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>


  </>

  );
};

export default Testimonials;