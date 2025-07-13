import React, { useState } from "react";
import "./Styles/Faq.css"; // Optional styling file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
     
        question: "What is therapy, and how can it help me?",
        answer:
          "Therapy is a process where a trained professional helps you explore your thoughts, feelings, and behaviors to improve mental health and well-being. It can help you manage stress, cope with trauma, and develop healthier habits.",
      },
      {
        question: "How do I know if I need therapy?",
        answer:
          "If you’re experiencing overwhelming emotions, difficulty coping with life events, or persistent feelings of sadness, anxiety, or stress, therapy can provide support and tools to help you navigate these challenges.",
      },
      {
        question: "What should I expect in my first therapy session?",
        answer:
          "Your first session will typically involve discussing your goals, concerns, and background. It’s an opportunity for your therapist to understand your needs and for you to ask questions about the process.",
      },
      {
        question: "How long does therapy usually last?",
        answer:
          "The duration of therapy varies for each person. Some people benefit from short-term therapy, lasting a few weeks, while others may find long-term therapy helpful for ongoing support.",
      },
      {
        question: "Is therapy confidential?",
        answer:
          "Yes, therapy is confidential. Therapists are bound by ethical and legal guidelines to protect your privacy. Exceptions include situations where there is a risk of harm to yourself or others.",
      },
      {
        question: "What types of therapy do you offer?",
        answer:
          "We offer a range of therapies, including cognitive-behavioral therapy (CBT), psychodynamic therapy, mindfulness-based therapy, and couples counseling. Your therapist will recommend an approach based on your needs.",
      },
      {
        question: "How do I choose the right therapist?",
        answer:
          "Choosing the right therapist depends on your preferences and needs. Consider factors like their specialization, experience, and whether you feel comfortable talking with them during your initial sessions.",
      },
      {
        question: "Can therapy help with anxiety and depression?",
        answer:
          "Yes, therapy is highly effective for managing anxiety and depression. Therapists use evidence-based approaches to help you identify triggers, develop coping strategies, and improve your emotional well-being.",
      },
      {
        question: "Do you offer online therapy sessions?",
        answer:
          "Yes, we offer online therapy sessions for those who prefer the convenience and comfort of attending from home. Online sessions are conducted via secure video conferencing platforms.",
      },
      {
        question: "How do I prepare for my therapy session?",
        answer:
          "Preparing for a session can involve reflecting on what you want to discuss, setting goals for therapy, and being open to exploring your thoughts and feelings. You don’t need to have all the answers — your therapist will guide you.",
      },
    ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
