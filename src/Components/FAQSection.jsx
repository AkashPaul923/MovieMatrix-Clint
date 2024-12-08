import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is MovieMatrix?",
      answer:
        "MovieMatrix is your go-to platform for honest and insightful movie reviews.",
    },
    {
      question: "How are the reviews on MovieMatrix rated?",
      answer:
        "Reviews are rated based on storytelling, performances, direction, and overall impact.",
    },
    {
      question: "Can I contribute reviews to MovieMatrix?",
      answer:
        "Yes, you can submit your reviews. Our team will evaluate and feature the best ones.",
    },
    {
      question: "Is MovieMatrix free to use?",
      answer:
        "Absolutely! You can read all reviews and ratings without any cost.",
    },
    {
      question: "Does MovieMatrix provide streaming links?",
      answer:
        "No, MovieMatrix focuses solely on reviews and does not host or link to movie streams.",
    },
    {
      question: "How can I stay updated with new reviews?",
      answer:
        "Follow MovieMatrix on social media or subscribe to our newsletter for the latest updates.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-black rounded-md">
              <summary className="cursor-pointer p-4 font-medium">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-gray-300">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
