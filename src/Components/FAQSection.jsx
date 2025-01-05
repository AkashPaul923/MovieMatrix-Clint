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
    <div className=" py-12 px-5 md:px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
