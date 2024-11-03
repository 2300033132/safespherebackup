// src/pages/Services.jsx
import React from "react";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Phone,
  Ambulance,
  Home,
  Car,
  AlertTriangle,
  FirstAid,
  Wifi,
  MessageCircle
} from "lucide-react";

function Services() {
  const emergencyServices = [
    {
      icon: <Ambulance className="text-red-500" size={28} />,
      title: "Medical Emergency Response",
      description: "Immediate assistance for medical emergencies including first aid, CPR, and transportation to medical facilities.",
      features: ["First aid support", "Emergency medical transport", "Medication assistance"]
    },
    {
      icon: <Home className="text-cyan-600" size={28} />,
      title: "Natural Disaster Support",
      description: "Help during and after natural disasters like floods, earthquakes, hurricanes, and wildfires.",
      features: ["Evacuation assistance", "Shelter coordination", "Supply distribution"]
    },
    {
      icon: <Car className="text-green-600" size={28} />,
      title: "Stranded Transportation",
      description: "Assistance when you're stranded due to vehicle breakdown, lack of transportation, or other issues.",
      features: ["Vehicle troubleshooting", "Transportation alternatives", "Ride coordination"]
    },
    {
      icon: <Shield className="text-purple-600" size={28} />,
      title: "Safety Escort Services",
      description: "Safe accompaniment for vulnerable individuals in potentially dangerous situations.",
      features: ["Walking companions", "Virtual check-ins", "Safety planning"]
    }
  ];

  const nonEmergencyServices = [
    {
      icon: <Wifi className="text-sky-600" size={28} />,
      title: "Resource Connection",
      description: "Connecting individuals with essential resources like food, shelter, and social services.",
      features: ["Resource database", "Appointment scheduling", "Follow-up support"]
    },
    {
      icon: <MessageCircle className="text-teal-600" size={28} />,
      title: "Crisis Counseling",
      description: "Emotional support and guidance during difficult times from trained volunteers.",
      features: ["Active listening", "Coping strategies", "Professional referrals"]
    },
    {
      icon: <Heart className="text-pink-500" size={28} />,
      title: "Elderly Assistance",
      description: "Specialized support for senior citizens including wellness checks and daily task help.",
      features: ["Wellness checks", "Medication reminders", "Grocery assistance"]
    },
    {
      icon: <Users className="text-orange-600" size={28} />,
      title: "Community Training",
      description: "Educational programs to prepare community members for emergency situations.",
      features: ["CPR/First Aid classes", "Disaster preparedness", "Response training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e2e6ea] via-[#edf0f3] to-[#f3f4f6] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#1e3a5f] text-white py-20 px-6 text-center shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-md">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive emergency and community support to keep you and your loved ones safe — powered by compassion, technology, and teamwork.
          </p>
        </div>
      </section>

      {/* Emergency Response Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f3f4f6] via-[#e9ecef] to-[#f5f7fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="text-red-600" size={36} />
            </div>
            <h2 className="text-3xl font-bold text-[#1b263b] mb-4">
              Emergency Response Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              When every second counts — our verified volunteers respond fast and efficiently to ensure safety and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#f9fafb]/80 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:shadow-red-100/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white/60 p-3 rounded-lg shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1b263b]">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Support Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#edf0f3] via-[#f4f5f6] to-[#e2e6ea]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center p-4 bg-cyan-100 rounded-full mb-4">
              <Heart className="text-cyan-600" size={36} />
            </div>
            <h2 className="text-3xl font-bold text-[#1b263b] mb-4">
              Community Support Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Empowering individuals with long-term care, resources, and emotional support to build stronger, connected communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {nonEmergencyServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#f9fafb]/80 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:shadow-cyan-100/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white/60 p-3 rounded-lg shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1b263b]">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#134e5e] via-[#1b6ca8] to-[#2a5298] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Volunteers Make It Possible</h2>
          <p className="text-lg text-cyan-100 mb-10 max-w-3xl mx-auto">
            Behind every successful response is a team of dedicated individuals who care deeply about their communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "2,500+", label: "Trained Volunteers" },
              { value: "24/7", label: "Availability" },
              { value: "30 min", label: "Average Response Time" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-lg">
                <div className="text-5xl font-bold text-cyan-100 mb-2">{stat.value}</div>
                <p className="text-cyan-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
