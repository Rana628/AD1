import React, { useState } from "react";

const DigitalArtCourse = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const features = [
        {
            title: "Hands-on Lessons",
            desc: "Learn digital painting, shading & composition",
            img: "/calendar.png",
        },
        {
            title: "Tool Mastery",
            desc: "Master Procreate, Photoshop, & Illustrator",
            img: "/share.png",
        },
        {
            title: "Exclusive Resource Pack",
            desc: "Brushes, templates & textures",
            img: "/whatsapp.png",
        },
        {
            title: "Live Mentorship",
            desc: "Weekly Q&A sessions with industry pros",
            img: "/website.png",
        },
        {
            title: "Project-Based Learning",
            desc: "Build a stunning portfolio",
            img: "/chart.png",
        },
        {
            title: "Certificate of Completion",
            desc: "Boost your creative career",
            img: "/database.png",
        },
        {
            title: "Community Access",
            desc: "Network with fellow artists",
            img: "/multiple-devices.png",
        },
    ];

    const testimonials = [
        {
            name: "Aditi Verma",
            age: 22,
            text: "I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now, I’m taking commissions online!",
        },
        {
            name: "Rajesh Khanna",
            age: 30,
            text: "Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!",
        },
    ];

    const faqs = [
        {
            question: "Who is this course for?",
            answer: "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience is required!",
        },
        {
            question: "What tools do I need to take this course?",
            answer: "You will need a tablet (iPad, Wacom, or any drawing tablet), digital art software (Procreate, Photoshop, or Krita), and a passion for creativity.",
        },
        {
            question: "How long is the course?",
            answer: "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
        },
        {
            question: "Is this a live or recorded course?",
            answer: "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
        },
        {
            question: "Will I receive a certificate?",
            answer: "Yes! After completing the course, you will receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
        },
        {
            question: "Can I monetize my digital art after this course?",
            answer: "Absolutely! The course includes a bonus session on freelancing and selling your art, so you can start earning right away.",
        },
        {
            question: "Q:How do I enroll?",
            answer: 'Click the "Enroll Now" button , make the payment, and get instant access to the course materials!',
        },
        {
            question: "What happens if I miss a live session?",
            answer: "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
        },
        {
            question: "How do I apply the coupon code?",
            answer: "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
        },
        {
            question: "What if I don’t have a tablet?",
            answer: "You can still take the course using a mouse and free digital art software (like Krita). However, a tablet is recommended for better results.",
        },
        {
            question: "Is there a refund policy?",
            answer: "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!",
        },
        {
            question: "How do I enroll?",
            answer: 'Click the "Enroll Now" button, make the payment, and get instant access to the course materials!',
        },
    ];

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the FAQ if it's already open
        } else {
            setActiveIndex(index); // Open the clicked FAQ
        }
    };

    return (
        <div className="font-sans bg-gray-50">
            <div className="flex justify-between px-2 md:px-10 py-2">
                <img src="Im2.jpg" className="w-36 md:h-20 md:aspect-video " />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-xl w-auto px-3 rounded-full font-bold text-white  sm:w-50 m-1">
                    Get Started
                </button>
            </div>
            {/* Hero Section */}
            <section className="py-5 md:py-16 px-4 ">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent ">
                        Master the Art of Digital Illustration
                    </h1>
                    <p className="text-base md:text-xl mb-8">
                        A 4-Week Course Designed for Beginners & Enthusiasts!
                    </p>
                    <img src="Im1.jpg" />
                    <div className="space-y-4">
                        <p className="text-xl mt-5 md:mt-1 md:text-3xl font-bold">
                            <span>
                                Learn to create stunning digital Art Work with
                                step-by-step guidance from industry experts. Np
                                prior experience required. Just your Creativity!
                                <br></br>Enroll now for ₹7999
                            </span>
                        </p>
                        <p className="text-3xl font-bold"></p>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-bold">
                            Secure Your Spot for Just ₹79
                        </button>
                        <p className="text-sm opacity-90">
                            Use a coupon code within 15 minutes to unlock a
                            special bonus pack!
                        </p>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Without Proper Training, You Might:</h2>
          <div className="grid md:grid-cols-3 gap-8 text-red-600 font-medium">
            <div>Struggle with complex software tools</div>
            <div>Feel stuck without structured learning</div>
            <div>Miss out on monetizing your skills</div>
          </div>
        </div>
      </section> */}
            <section className="py-4 pt-10 md:pt-0 md:py-16 px-4 bg-white ">
                <div className="max-w-4xl mx-auto text-center ">
                    <h2 className="text-2xl font-bold mb-8">
                        Without Proper Training, You Might:
                    </h2>
                    <div className="mx-3 md:mx-0 gap-4 md:gap-8 flex flex-col md:flex-row ">
                        {/* Item 1 */}
                        <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <p className="text-red-600 font-medium">
                                Struggle with complex software tools
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow ">
                            <div className="flex  justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <p className="text-red-600 font-medium">
                                Feel stuck without structured learning
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <p className="text-red-600 font-medium">
                                Miss out on monetizing your skills
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className=" bg-gradient-to-r from-blue-500 to-purple-500 text-4xl font-bold  bg-clip-text text-transparent   text-center mb-12">
                        With This Course, You Get:
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow gap-3 md:gap-0"
                            >
                                {/* <h3 className="font-bold text-lg mb-2 text-purple-600"> */}
                                {feature.img && (
                                    <>
                                        <img
                                            className="h-7 w-7 m-1"
                                            src={`${feature.img}`}
                                        />
                                    </>
                                )}{" "}
                                {feature.title} - {feature.desc}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="flex items-center justify-center">
                <button className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg text-bold transition-all">
                    Book Now at ₹ 49
                </button>
            </div>

            <section className=" py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text text-transparent">
                        Is this right for you?
                    </h2>
                    <p className="text-xl mb-8">
                        Everybody is fond of Digital Art! You need it too.!
                    </p>
                    <img src="Im3.jpg" />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-12">
                        Student Success Stories
                    </h2>
                    <div className="flex gap-8 flex-col md:flex-row">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm hover:gradient-shadow transition-gradient-shadow"
                            >
                                <p className="font-bold text-black-600 flex items-center justify-center">
                                    {testimonial.name}
                                </p>
                                <p className="text-gray-500 text-sm flex items-center justify-center">
                                    {testimonial.age}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="flex items-center justify-center">
                <button className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
                    Book Now for ₹ 79
                </button>
            </div>
            {/* FAQs Section */}
            {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-purple-600 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-black-600">
                                        {faq.question}
                                    </h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 transform transition-transform ${
                                            activeIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                {activeIndex === index && (
                                    <p className="text-gray-600 mt-2">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center">
                <button className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
                    Let's get started
                </button>
            </div>
            {/* CTA Section */}
            <section className=" py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Start Your Digital Art Journey?
                    </h2>
                    <p className="text-xl mb-8">
                        Click below to secure your spot & start creating!
                    </p>
                    <button className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
                        Enroll Now for ₹79
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DigitalArtCourse;
