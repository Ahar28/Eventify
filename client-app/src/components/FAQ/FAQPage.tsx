import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const FAQPage: React.FC = () => {
    const faqs: FAQ[] = [
        {
          question: 'How do I sign up for a user account?',
          answer: 'You can sign up by navigating to the signup page and entering the required information, including your email and a password.',
        },
        {
          question: 'What should I do if I forget my password?',
          answer: 'If you forget your password, use the "Forgot Password" link on the login page to reset it via your email.',
        },
        {
          question: 'How can I update my profile information?',
          answer: 'To update your profile, go to the "My Profile" section after logging in, where you can edit your personal details.',
        },
        {
          question: 'How do I create an event?',
          answer: 'As an organizer, you can create an event by accessing the "Create Event" section and filling out the event details.',
        },
        {
          question: `Can I cancel an event I've created?`,
          answer: 'Yes, you can cancel your event from the event management dashboard, but please note the refund policy for attendees.',
        },
        {
          question: 'How do attendees register for events?',
          answer: `Attendees can register for events by clicking on the registration link on the event's page and completing the process.`,
        },
        {
          question: 'What payment methods are accepted for ticket purchases?',
          answer: 'We accept various payment methods including credit cards, PayPal, and other online payment platforms.',
        },
        {
          question: `How can I view events I'm interested in?`,
          answer: 'Use the event feeds section to filter, search, and find events that match your interests.',
        },
        {
          question: `Is there a way to track the events I've attended?`,
          answer: `Yes, your user profile keeps a history of all the events you've registered for and attended.`,
        },
        {
          question: 'How do I download or cancel my ticket?',
          answer: 'You can download or cancel your tickets from the "My Tickets" section in your profile.',
        },
        {
          question: 'How can I give feedback on an event I attended?',
          answer: `After an event, you'll receive a link to provide feedback or you can do so directly on the event page.`,
        },
        {
          question: 'What are the benefits of creating an event on this platform?',
          answer: 'Our platform offers tools for easy management, promotion, and analytics to help make your event a success.',
        },
        {
          question: 'Can I receive a refund if I cancel my event ticket?',
          answer: `Refund eligibility varies by event. Please check the specific event's policy for details.`,
        },
        {
          question: 'How do I check in to an event?',
          answer: `You can check in to an event using the QR code on your ticket or by presenting it at the event's check-in counter.`,
        },
        {
          question: 'How are badges and certificates generated?',
          answer: 'Badges are automatically generated for your profile based on event attendance. Certificates are emailed after event completion.',
        },
        {
          question: 'Can I share an event with friends?',
          answer: 'Yes, you can share events through social media links or direct sharing options available on the event page.',
        },
        
      ];
      

      const styles = {
        faqContainer: {
            display: 'flex' as 'flex', 
            flexDirection: 'column' as 'column', 
            margin: 'auto', 
            padding: '20px',
            maxWidth: '1000px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
            backgroundColor: '#FFF', 
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            color: '#334E68',
        },
        faqQuestion: {
            cursor: 'pointer',
            padding: '15px 20px',
            marginBottom: '5px',
            backgroundColor: '#61a5c2',
            color: '#F3F4F6',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
        },
        faqAnswer: {
            padding: '15px 20px',
            marginBottom: '20px',
            backgroundColor: '#F0F4F8',
            color: '#334E68',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.3s ease',
        },
    };

  return (
    <div style={styles.faqContainer}>
      <h2 style={{ marginBottom: '20px', color: '#003366', textAlign: 'center',fontSize: '1.5rem',fontWeight: 'bold', WebkitBackgroundClip: 'padding-box', textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} styles={styles} />
      ))}
    </div>
  );
};

type FAQItemProps = {
  faq: FAQ;
  styles: {
    faqQuestion: React.CSSProperties;
    faqAnswer: React.CSSProperties;
  };
};

const FAQItem: React.FC<FAQItemProps> = ({ faq, styles }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const dynamicStyles = isHovered || isOpen ? {
      backgroundColor: '#003366', 
      color: '#FFFFFF', 
      transform: isOpen ? 'none' : 'translateY(-2px)', 
      boxShadow: isOpen ? '0 4px 6px rgba(0,0,0,0.1)' : '0 6px 12px rgba(0,0,0,0.15)', 
    } : {};
  
    return (
      <div>
        <div
          style={{ ...styles.faqQuestion, ...dynamicStyles }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {faq.question}
        </div>
        {isOpen && <div style={styles.faqAnswer}>{faq.answer}</div>}
      </div>
    );
  };
  

export default FAQPage;
