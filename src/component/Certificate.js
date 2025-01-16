import React from 'react';

function Certificate() {
    return (
      <section className="bg-gray-100 py-10">
        {/* Projects Section */}
        <div className="container mx-auto px-2 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Web Development */}
            <div className="bg-black text-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <img
                src="/screenshot.png"
                alt="Web Development"
                className="w-screen h-auto object-cover rounded-full mb-4"
              />
              <p className="text-white mb-4">
                I specialize in creating responsive and user-friendly websites using the latest
                technologies like React, Tailwind CSS, and more.
              </p>
              <a
                href="#web-development"
                className="bg-[#87b2f4] text-black py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Learn More
              </a>
            </div>
  
            {/* Card 2 - UI/UX Design */}
            <div className="bg-black text-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
              <img
                src="/screenshot.png"
                alt="Web Development"
                className="w-screen h-auto object-cover rounded-full mb-4"
              />
              <p className="text-white mb-4">
                I design intuitive user interfaces that enhance user experiences, focusing on
                aesthetics and functionality.
              </p>
              <a
                href="#ui-ux-design"
                className="bg-[#87b2f4] text-black py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
  
        {/* Certificate Section */}
        <div className="container mx-auto my-10 text-center">
          <h2 className="text-3xl font-bold mb-4">My Certificate</h2>
          <p className="text-lg mb-6">
            Below is my ALX Software Engineering certificate. You can view or download it!
          </p>
          <div className="flex justify-center items-center">
            <a
              href="/alx.pdf"
              download="alx.pdf"
              className="inline-block bg-[#87b2f4] text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
            >
              Download My Certificate
            </a>
          </div>
        </div>
      </section>
    
  );
}

export default Certificate;
