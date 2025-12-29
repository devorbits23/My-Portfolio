import React from "react";
import { FaCode, FaServer, FaLayerGroup, FaTools, FaPlug, FaMobileAlt } from "react-icons/fa";

const ServiceComponent = ({ icon: Icon, title, description, details }) => {
  return (
    <div
      className="group border border-gray-700 rounded-2xl p-8 
                 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 
                 backdrop-blur-md shadow-md transition-all duration-500 
                 hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] hover:border-indigo-500 
                 hover:scale-[1.02] flex flex-col justify-between h-full"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition">
          <Icon size={28} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-3">{description}</p>

      {/* Extra Details */}
      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Building responsive, modular interfaces with React.js and Tailwind CSS.",
      details: [
        "Reusable component architecture",
        "State management with hooks/context",
        "Responsive layouts across devices",
        "Clean, maintainable codebase",
      ],
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Developing scalable APIs and server-side logic with Node.js and Express.",
      details: [
        "RESTful API design",
        "Authentication & authorization",
        "Database modeling with MongoDB",
        "Performance tuning & caching",
      ],
    },
    {
      icon: FaLayerGroup,
      title: "Full-Stack Development",
      description:
        "Delivering complete end-to-end solutions by combining frontend, backend, and database expertise.",
      details: [
        "Frontend + backend integration",
        "Database schema design",
        "Deployment pipelines",
        "Scalable microservices architecture",
      ],
    },
    {
      icon: FaTools,
      title: "Performance & Optimization",
      description:
        "Refactoring code and optimizing apps for speed, scalability, and reliability.",
      details: [
        "Code splitting & lazy loading",
        "SEO-friendly structures",
        "Accessibility audits",
        "Optimized build pipelines",
      ],
    },
    {
      icon: FaPlug,
      title: "API Integration",
      description:
        "Connecting third-party services and external APIs to enhance functionality.",
      details: [
        "Payment gateway integration",
        "Social login & OAuth",
        "Third-party API consumption",
        "Custom middleware development",
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Web Development",
      description:
        "Ensuring seamless experiences across devices with mobile-first, accessibility-focused development.",
      details: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Fluid typography & spacing",
        "Accessibility-first coding practices",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="services-page bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-28 px-6"
    >
      {/* Hero Banner */}
      <div className="text-center mb-16">
        <h1 className="text-indigo-400 text-4xl md:text-5xl font-extrabold tracking-wide">
          Services Provided
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          I specialize in development — crafting reliable, scalable, and cinematic web applications with technical precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceComponent
         key={index} {...service} />
        ))}
      </div>

      {/* Workflow Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-indigo-400">⚡ My Development Workflow</h2>
        <p className="text-gray-400 mb-10">
          Every project follows a structured workflow to ensure quality, scalability, and cinematic polish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-gray-700 bg-[#1e293b]/50 backdrop-blur-md">
            <h3 className="text-white font-semibold mb-2">1. Planning</h3>
            <p className="text-gray-400 text-sm">Understanding requirements and defining architecture.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-[#1e293b]/50 backdrop-blur-md">
            <h3 className="text-white font-semibold mb-2">2. Development</h3>
            <p className="text-gray-400 text-sm">Building frontend and backend with clean, modular code.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-[#1e293b]/50 backdrop-blur-md">
            <h3 className="text-white font-semibold mb-2">3. Optimization</h3>
            <p className="text-gray-400 text-sm">Improving performance, accessibility, and scalability.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-[#1e293b]/50 backdrop-blur-md">
            <h3 className="text-white font-semibold mb-2">4. Deployment</h3>
            <p className="text-gray-400 text-sm">Testing, deploying, and maintaining for long-term success.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">🚀 Let’s Build Together</h2>
        <p className="text-gray-400 mb-6">
          Interested in collaborating or exploring my work? Reach out and let’s craft something cinematic.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default ServicesPage;