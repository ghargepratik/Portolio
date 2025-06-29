import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                My journey in software development began during my computer science studies, and I've been 
                continuously learning and growing ever since.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in creating efficient, scalable, and user-friendly applications using the MERN stack, 
                cloud technologies, and modern development practices. I'm always excited to take on new challenges 
                and contribute to innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.education.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{personalInfo.education.university}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{personalInfo.education.duration}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="text-green-600 dark:text-green-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.experience}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="text-orange-600 dark:text-orange-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Available</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Open to opportunities</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-75 blur-sm"
              />
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-700 dark:text-gray-300">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">Let's Work Together</h4>
              <p className="mb-6">I'm always interested in new opportunities and exciting projects.</p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;