import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory tracking, and customer management features.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality, team collaboration tools, and progress tracking.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Weather Forecast Platform",
    description: "An interactive weather application providing detailed forecasts, weather maps, and alerts with a beautiful, intuitive interface.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Social Media Analytics",
    description: "A powerful analytics platform for social media managers to track engagement, monitor trends, and optimize content strategy.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "Learning Management System",
    description: "An educational platform with course management, progress tracking, interactive assignments, and student-teacher communication tools.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Fitness Tracking App",
    description: "A comprehensive fitness application with workout planning, progress monitoring, nutrition tracking, and social features.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col h-48">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
          {project.description}
        </p>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
          View Project
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  // For mobile, we'll show one card at a time
  const nextSlideMobile = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlideMobile = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Explore a collection of innovative projects showcasing modern web development 
            and creative problem-solving solutions.
          </p>
        </div>

        {/* Desktop View - 3 cards */}
        <div className="hidden md:block relative">
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-1/3 flex-shrink-0">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Desktop indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: projects.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-purple-700' : 'bg-purple-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View - 1 card */}
        <div className="md:hidden relative">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlideMobile}
              className="p-2 rounded-full bg-white text-purple-700 hover:bg-purple-50 shadow-lg transition-all duration-200 flex-shrink-0"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlideMobile}
              className="p-2 rounded-full bg-white text-purple-700 hover:bg-purple-50 shadow-lg transition-all duration-200 flex-shrink-0"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-purple-700' : 'bg-purple-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project counter */}
        <div className="text-center mt-8">
          <p className="text-purple-600 font-medium">
            <span className="hidden md:inline">
              Showing {currentIndex + 1}-{Math.min(currentIndex + 3, projects.length)} of {projects.length} projects
            </span>
            <span className="md:hidden">
              Project {currentIndex + 1} of {projects.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;