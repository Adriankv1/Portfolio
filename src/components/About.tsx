import React from 'react';
import profileImage from './images/PFPFB.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Adrian Viken" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full transform rotate-12 scale-110 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full transform -rotate-12 scale-105 opacity-30"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-dark-600 leading-relaxed mb-6">
                I'm a frontend developer newly graduated from the University of Agder. 
                I'm passionate about creating user-centered digital experiences.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
                When I'm not coding, you'll either find me playing frisbee golf, or playing video games. 
              </p>
            </div>

            {/* Stats
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-dark-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-dark-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-dark-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-dark-600">Technologies</div>
              </div>
            </div> */}

            {/* Personal Info */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-dark-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 font-medium">Name:</span>
                  <span className="text-dark-600">Adrian Kristoffer Viken</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 font-medium">Email:</span>
                  <span className="text-dark-600">Adriankv2002@hotmail.no</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 font-medium">Location:</span>
                  <span className="text-dark-600">Jessheim, Norway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 font-medium">Availability:</span>
                  <span className="text-dark-600">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 