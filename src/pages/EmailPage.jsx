import React, { useState } from "react";

const initialTemplates = [
  {
    id: 1,
    name: "Welcome Email",
    subject: "Welcome to Our Service!",
    body:
      "Hi there,\n\nThank you for joining us! We’re excited to have you on board.\n\nBest,\nThe Team",
  },
  {
    id: 2,
    name: "Password Reset",
    subject: "Reset Your Password",
    body:
      "Hello,\n\nClick the link below to reset your password:\n\n[Reset Link]\n\nCheers,\nThe Support Team",
  },
  {
    id: 3,
    name: "Newsletter Subscription",
    subject: "Thank You for Subscribing!",
    body:
      "Hi there,\n\nThanks for subscribing to our newsletter! Stay tuned for updates.\n\nBest,\nThe Newsletter Team",
  },
  {
    id: 4,
    name: "Account Verification",
    subject: "Verify Your Account",
    body:
      "Hello,\n\nPlease verify your account by clicking the link below:\n\n[Verification Link]\n\nCheers,\nThe Support Team",
  },
  {
    id: 5,
    name: "Order Confirmation",
    subject: "Your Order Confirmation",
    body:
      "Hi,\n\nThank you for your order! Your order number is [Order Number].\n\nBest,\nThe Sales Team",
  },
  {
    id: 6,
    name: "Feedback Request",
    subject: "We Value Your Feedback!",
    body:
      "Hello,\n\nWe would love to hear your thoughts about our service. Please provide your feedback!\n\nThank you,\nThe Support Team",
  },
];

const EmailPage = () => {
  const [templates, setTemplates] = useState(initialTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    body: "",
  });

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setFormData({
      name: template.name,
      subject: template.subject,
      body: template.body,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveTemplate = () => {
    if (selectedTemplate) {
      const updatedTemplates = templates.map((template) =>
        template.id === selectedTemplate.id
          ? { ...template, ...formData }
          : template
      );
      setTemplates(updatedTemplates);
      alert("Template updated successfully!");
    } else {
      const newTemplate = { ...formData, id: templates.length + 1 };
      setTemplates((prev) => [...prev, newTemplate]);
      alert("New template created successfully!");
    }
    setFormData({ name: "", subject: "", body: "" });
    setSelectedTemplate(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Email Templates</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Select a Template</h2>
        <ul className="list-disc pl-5 mb-4">
          {templates.map((template) => (
            <li
              key={template.id}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleSelectTemplate(template)}
            >
              {template.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Edit Template</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Template Name"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Email Body"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          rows="6"
        ></textarea>
        <button
          onClick={handleSaveTemplate}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition w-full"
        >
          {selectedTemplate ? "Update Template" : "Create Template"}
        </button>
      </div>

      {selectedTemplate && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Template Preview</h2>
          <div className="font-bold">{formData.subject}</div>
          <div className="mt-2 whitespace-pre-line">{formData.body}</div>
        </div>
      )}
    </div>
  );
};

export default EmailPage;
