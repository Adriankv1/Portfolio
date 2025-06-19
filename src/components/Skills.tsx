import React from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️", color: "bg-blue-500" },
        { name: "TypeScript", level: 90, icon: "📘", color: "bg-blue-600" },
        { name: "JavaScript", level: 90, icon: "🟨", color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, icon: "🌐", color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, icon: "🎨", color: "bg-cyan-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "C#", level: 65, icon: "#", color: "bg-green-600" },
        { name: "Python", level: 70, icon: "🐍", color: "bg-blue-500" },
        { name: "PostgreSQL", level: 75, icon: "🐘", color: "bg-blue-700" },
        { name: "GraphQL", level: 80, icon: "🔷", color: "bg-pink-600" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80, icon: "🐳", color: "bg-blue-500" },
        { name: "Figma", level: 80, icon: "🎨", color: "bg-purple-500" },
        { name: "Jira", level: 90, icon: "🧪", color: "bg-red-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-dark-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">
              Additional Skills & Interests
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "UI/UX Design", "Responsive Design", "Performance Optimization", 
                "SEO", "Agile/Scrum", "Technical Writing", "Green Coding", 
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                >
                  <span className="text-dark-700 font-medium text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-primary-100">
            <h3 className="text-2xl font-bold text-dark-900 mb-4 text-center">
              Currently Learning
            </h3>
            <p className="text-center text-dark-600 mb-6">
              I'm always expanding my skill set. Here's what I'm currently exploring:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Rust", icon: "🦀" },
                { name: "WebAssembly", icon: "⚡" },
                { name: "Machine Learning", icon: "🤖" },
                { name: "Blockchain", icon: "⛓️" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-medium text-dark-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 