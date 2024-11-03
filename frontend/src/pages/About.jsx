// src/pages/About.jsx
import React from "react";
import { Heart, Users, Shield, Clock, Target } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e2e6ea] via-[#edf0f3] to-[#f3f4f6] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#1e3a5f] text-white py-20 px-6 text-center shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-md">
            About SafeSphere
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering communities to respond quickly and compassionately during
            emergencies through technology and collaboration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f3f4f6] via-[#e9ecef] to-[#f5f7fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1b263b] mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              To build a connected, resilient network of volunteers ensuring that
              no one faces crisis alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-cyan-600" size={32} />,
                title: "Rapid Response",
                desc: "Match help requests with volunteers in minutes, not hours.",
              },
              {
                icon: <Users className="text-teal-600" size={32} />,
                title: "Community Powered",
                desc: "Local heroes creating real impact through collaboration.",
              },
              {
                icon: <Shield className="text-red-500" size={32} />,
                title: "Verified Volunteers",
                desc: "Every helper is vetted and trained to ensure safety and trust.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f9fafb]/80 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:shadow-cyan-100/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#1b263b]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#edf0f3] via-[#f4f5f6] to-[#e2e6ea]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1b263b] mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {["Request Help", "Alert Volunteers", "Connect & Assist", "Follow-Up"].map(
              (title, i) => (
                <div key={i}>
                  <div className="bg-gradient-to-b from-cyan-100/80 to-sky-50/70 backdrop-blur-md rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-cyan-200 shadow-sm">
                    <span className="text-2xl font-bold text-cyan-700">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#1b263b]">{title}</h3>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">
                    {[
                      "Submit a help request describing your emergency.",
                      "Nearby volunteers get instantly notified.",
                      "Volunteers reach and assist based on the situation.",
                      "We verify resolution and provide extra support if needed.",
                    ][i]}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#134e5e] via-[#1b6ca8] to-[#2a5298] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "2,500+", label: "Trained Volunteers" },
              { value: "15,000+", label: "Requests Handled" },
              { value: "94%", label: "Response Success" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-cyan-100 mb-2">{stat.value}</div>
                <p className="text-cyan-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#f2f4f7] via-[#eaecee] to-[#f5f6f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1b263b] mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Heart className="text-pink-500" size={24} />,
                title: "Compassion",
                desc: "Every crisis is personal. We act with empathy and humanity.",
              },
              {
                icon: <Clock className="text-green-500" size={24} />,
                title: "Responsiveness",
                desc: "Speed matters. Our system is built for real-time response.",
              },
              {
                icon: <Shield className="text-red-500" size={24} />,
                title: "Safety",
                desc: "Trust and protection for both requesters and volunteers.",
              },
              {
                icon: <Users className="text-purple-500" size={24} />,
                title: "Community",
                desc: "Resilient societies are built on unity and shared responsibility.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-[#f9fafb]/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-cyan-100/50 transition-all"
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white/60 p-3 rounded-lg shadow-inner">{val.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1b263b]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#1e3a5f] text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you want to help, request aid, or support our efforts — there’s a place for you at SafeSphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-[#0d1b2a] font-semibold py-3 px-8 rounded-lg transition-all shadow-md">
              Request Assistance
            </button>
            <button className="bg-transparent hover:bg-cyan-950 text-cyan-300 border border-cyan-400 font-semibold py-3 px-8 rounded-lg transition-all">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
