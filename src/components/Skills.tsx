import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Server,
  Globe,
  Layers,
  Zap,
  Palette,
  GitBranch,
  Monitor,
  Settings,
  Box,
  FileCode,
  Shield
} from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  // Icon mapping for MERN stack and related technologies
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: any } = {
      'React.js': Code2,
      'Next.js': Layers,
      'TypeScript': FileCode,
      'JavaScript': Zap,
      'HTML5': Globe,
      'CSS3': Palette,
      'Tailwind CSS': Palette,
      'Node.js': Server,
      'Express.js': Server,
      'NestJS': Server,
      'MongoDB': Database,
      'PostgreSQL': Database,
      'MySQL': Database,
      'AWS': Cloud,
      'Docker': Box,
      'Git': GitBranch,
      'VS Code': Monitor,
      'REST APIs': Server,
      'GraphQL': Database,
      'Redux': Code2,
      'Webpack': Settings,
      'Vite': Zap,
      'Jest': Shield,
      'Postman': Settings,
      'Sass': Palette,
      'Bootstrap': Palette,
      'Material-UI': Palette,
      'Styled Components': Palette,
      'Socket.io': Server,
      'Prisma': Database,
      'Mongoose': Database,
      'Heroku': Cloud,
      'Vercel': Cloud,
      'Netlify': Cloud,
      'GitHub Actions': GitBranch,
      'Jenkins': Settings,
      'Linux': Settings,
      'Nginx': Server,
      'Redis': Database,
      'Elasticsearch': Database,
      'Firebase': Cloud,
      'Kubernetes': Cloud
    };
    
    return iconMap[skillName] || Code2; // Default icon for unknown skills
  };

  // Enhanced skill categories for MERN stack
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      skills: skills.filter(skill => 
        ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Material-UI', 'Bootstrap', 'Sass', 'Styled Components'].includes(skill.name)
      )
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      skills: skills.filter(skill => 
        ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT', 'OAuth'].includes(skill.name)
      )
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      skills: skills.filter(skill => 
        ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose', 'Firebase', 'Elasticsearch'].includes(skill.name)
      )
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      skills: skills.filter(skill => 
        ['AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Jenkins', 'Linux', 'Nginx', 'Heroku', 'Vercel', 'Netlify'].includes(skill.name)
      )
    }
  ];

  // Add any uncategorized skills to the first category
  const categorizedSkillNames = skillCategories.flatMap(cat => cat.skills.map(s => s.name));
  const uncategorizedSkills = skills.filter(skill => !categorizedSkillNames.includes(skill.name));
  
  if (uncategorizedSkills.length > 0) {
    skillCategories[3].skills = [...skillCategories[3].skills, ...uncategorizedSkills];
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.bgColor} rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.length > 0 ? (
                  category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer"
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <motion.div
                            whileHover={{ rotate: 10 }}
                            className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:shadow-lg transition-all duration-300`}
                          >
                            <SkillIcon className="text-white" size={24} />
                          </motion.div>
                          <span className="font-semibold text-gray-900 dark:text-white text-sm text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Animated border on hover */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-xl origin-left`}
                        />
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">
                      Skills coming soon...
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              MERN Stack Specialist
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-blue-100"
            >
              Building full-stack applications with MongoDB, Express.js, React.js, and Node.js
            </motion.p>

            {/* MERN Stack Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-8 mb-8"
            >
              {[
                { name: 'MongoDB', icon: Database },
                { name: 'Express.js', icon: Server },
                { name: 'React.js', icon: Code2 },
                { name: 'Node.js', icon: Server }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                    <tech.icon size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-blue-100">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Learning & Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            >
              <Zap className="text-white" size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              best practices, and emerging technologies in the web development ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;