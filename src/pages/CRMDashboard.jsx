import React, { useEffect, useState } from "react";

// Sample customer data
const mockCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "456-789-0123", status: "Active" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "321-654-9870", status: "Prospective" },
];

// Sample activity log data
const mockActivities = [
  { id: 1, customer: "John Doe", action: "Follow-up call", date: "2024-10-20" },
  { id: 2, customer: "Jane Smith", action: "Email sent", date: "2024-10-19" },
  { id: 3, customer: "Alice Johnson", action: "Meeting scheduled", date: "2024-10-18" },
];

// Sample sales opportunities
const mockOpportunities = [
  { id: 1, title: "New Project Proposal", customer: "John Doe", value: "$5,000", status: "In Progress" },
  { id: 2, title: "Website Redesign", customer: "Alice Johnson", value: "$10,000", status: "Won" },
];

const CRMDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setCustomers(mockCustomers);
      setActivities(mockActivities);
      setOpportunities(mockOpportunities);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">CRM Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <table className="min-w-full border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Phone</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{customer.name}</td>
              <td className="border border-gray-300 p-2">{customer.email}</td>
              <td className="border border-gray-300 p-2">{customer.phone}</td>
              <td className="border border-gray-300 p-2">{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
      <ul className="border border-gray-300 mb-6">
        {activities.map((activity) => (
          <li key={activity.id} className="border-b p-4">
            <strong>{activity.customer}</strong>: {activity.action} on {activity.date}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Sales Opportunities</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Title</th>
            <th className="border border-gray-300 p-2 text-left">Customer</th>
            <th className="border border-gray-300 p-2 text-left">Value</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opportunity) => (
            <tr key={opportunity.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{opportunity.title}</td>
              <td className="border border-gray-300 p-2">{opportunity.customer}</td>
              <td className="border border-gray-300 p-2">{opportunity.value}</td>
              <td className="border border-gray-300 p-2">{opportunity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRMDashboard;
