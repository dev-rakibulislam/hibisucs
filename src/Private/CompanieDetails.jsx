import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const CompanieDetails = () => {
  const { id } = useParams();
  const allCompanies = useLoaderData();
  const company = allCompanies.find((c) => c.id === id);

  const [selectedJob, setSelectedJob] = useState(null);
  const nabi = useNavigate()
  if (!company) {
    return <div className="text-center py-20 text-gray-600">Company not found.</div>;
  }
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 relative">
        <button className='btn btn-dash btn-accent absolute top-4' onClick={()=>{nabi(-1)}}>↖ Go Back</button>
      <div className="bg-white shadow p-6 rounded-lg mb-12">
        <div className="flex items-center gap-6">
          <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">{company.name}</h1>
            <p className="text-gray-600">{company.industry}</p>
            <p className="text-gray-500">{company.location}</p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Jobs</h2>
      <div className="space-y-4">
        {company.jobs.map((job) => (
          <div key={job.id} className="bg-gray-50 p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-blue-600">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.jobType} | {job.salary}</p>
            </div>
            <button
              className="btn btn-outline btn-sm btn-primary"
              onClick={() => setSelectedJob(job)}
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <dialog id="jobModal" className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-xl text-blue-700">{selectedJob.title}</h3>
            <img src={selectedJob.bannerImage} alt="Job Banner" className="w-full h-48 object-cover rounded my-3" />
            <p className="mb-2"><strong>Type:</strong> {selectedJob.jobType}</p>
            <p className="mb-2"><strong>Location:</strong> {selectedJob.location}</p>
            <p className="mb-2"><strong>Salary:</strong> {selectedJob.salary}</p>
            <p className="mb-2"><strong>Description:</strong> {selectedJob.description}</p>
            <div className="mb-4">
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside text-gray-600 mt-1">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="modal-action">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply
              </a>
              <button className="btn" onClick={() => setSelectedJob(null)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default CompanieDetails;