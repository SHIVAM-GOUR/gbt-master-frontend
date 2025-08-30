"use client";
import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is GroowByTech and what do you offer?",
          answer: "GroowByTech specializes in creating pre-designed, ready-to-deploy website solutions for schools and businesses. We eliminate the complexity of web development by providing reliable, customizable websites that can be deployed quickly without the need for hiring developers or learning to code."
        },
        {
          question: "How is GroowByTech different from other web development companies?",
          answer: "Unlike traditional web development companies, we focus on pre-built solutions that are ready to deploy. This means faster turnaround times, lower costs, and proven reliability. Our solutions are specifically tailored for schools and businesses, with industry-specific features built in."
        },
        {
          question: "Do I need technical knowledge to use your services?",
          answer: "No technical knowledge is required. Our team handles all the technical aspects including setup, deployment, and maintenance. We provide training and ongoing support to ensure you can manage your website content easily."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      questions: [
        {
          question: "What's included in the monthly pricing?",
          answer: "Our monthly pricing includes hosting, SSL certificates, regular backups, security updates, maintenance, 24/7 monitoring, and customer support. You also get access to our content management system and regular feature updates."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "We believe in transparent pricing. Our monthly fees cover everything you need. The only additional costs might be for custom integrations or premium third-party services that you specifically request."
        },
        {
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we'll help you migrate any additional features or content as needed."
        },
        {
          question: "Do you offer discounts for educational institutions?",
          answer: "Yes, we offer special pricing for educational institutions including schools, colleges, and non-profit organizations. Contact our sales team for details about educational discounts."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide 24/7 technical support via email, phone, and live chat. Our support includes troubleshooting, content updates, feature explanations, and general website assistance. Premium plans include priority support with faster response times."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We aim to respond to all support requests within 2 hours during business hours and within 4 hours outside business hours. Critical issues are addressed immediately, and we provide 24/7 emergency support for all plans."
        },
        {
          question: "Can you help with content updates and changes?",
          answer: "Absolutely! We can help with content updates, adding new pages, updating images, and making design adjustments. Basic content updates are included in all plans, while extensive changes may be subject to additional fees."
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 px-6 md:px-40 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Questions & Answers</h2>
          <div className="flex justify-center mb-6">
            <span className="block h-1 w-64 md:w-96 bg-green-10 rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know about our services and more.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-3xl p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-green-10">{category.title}</h3>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 1000 + questionIndex;
                  const isOpen = openIndex === index;

                  return (
                    <div key={questionIndex} className="bg-white rounded-2xl shadow-sm">
                      <button
                        onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-all"
                      >
                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-green-10 transform transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}