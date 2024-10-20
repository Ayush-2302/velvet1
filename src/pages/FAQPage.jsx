import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email with tracking information.",
  },
  {
    question: "Can I change my order?",
    answer: "You can change your order within one hour of placing it. Please contact our support team.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Our customer support is available 24/7 via chat and email.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us through the contact form on our website or via email at support@example.com.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h2
              className="cursor-pointer text-lg font-semibold"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </h2>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
