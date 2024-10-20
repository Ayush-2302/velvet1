import React, { useEffect, useState } from "react";

// Sample job data
const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    salary: "$80,000 - $100,000",
    description: "Looking for a skilled frontend developer with experience in React.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Web Innovations",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    description: "Seeking a backend developer proficient in Node.js and MongoDB.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Startup Hub",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000",
    description: "Join our team as a full stack developer with expertise in JavaScript.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Agency",
    location: "Austin, TX",
    salary: "$70,000 - $90,000",
    description: "Looking for a UI/UX designer to improve user experiences.",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Data Insights",
    location: "Remote",
    salary: "$85,000 - $105,000",
    description: "Seeking a data scientist to analyze complex data sets.",
  },
];

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching job data
    const fetchJobs = () => {
      // In a real application, you would fetch data from an API
      setJobs(mockJobs);
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Job Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-800 font-bold">{job.salary}</p>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDashboard;
