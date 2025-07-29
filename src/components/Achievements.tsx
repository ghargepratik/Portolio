import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Zap, 
  Shield, 
  Database, 
  Mail, 
  GitBranch,
  TrendingUp,
  CheckCircle,
  Target,
  Award
} from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      icon: Zap,
      title: "Performance Optimization",
      description: "Improved backend system performance by 40% through Node.js service refactoring, database query optimization, and Redis caching implementation—delivering faster response times and enhanced scalability under high load.",
      impact: "40% Performance Boost",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Accessibility Excellence",
      description: "Achieved 95% WCAG 2.2 compliance for the KFAdvance platform using Level Access tools, enhancing accessibility across enterprise clients and meeting global accessibility standards.",
      impact: "95% WCAG Compliance",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Automation Framework",
      description: "Designed a dynamic email automation system in the KFAdvance admin panel with rule-based scheduling for user onboarding and reminder emails—reducing manual effort by 80% and increasing delivery accuracy.",
      impact: "80% Effort Reduction",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      id: 4,
      icon: Database,
      title: "GraphQL Integration",
      description: "Integrated GraphQL (Hasura/Apollo) APIs and restructured frontend data flows, eliminating over-fetching and redundant API calls—significantly boosting frontend performance and user experience.",
      impact: "Enhanced Data Flow",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
    },
    {
      id: 5,
      icon: GitBranch,
      title: "Microservices Architecture",
      description: "Built and deployed scalable microservices using Node.js, Express.js, Docker, and CI/CD pipelines—improving system modularity, reducing deployment time, and simplifying long-term maintenance.",
      impact: "Scalable Architecture",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    },
    {
      id: 6,
      icon: Shield,
      title: "Security Enhancement",
      description: "Strengthened backend security by implementing token-based authentication, comprehensive request validation, and intelligent rate limiting—reducing attack surface and fortifying data protection.",
      impact: "Enhanced Security",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg"
            >
              <Trophy className="text-white" size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Professional Achievements
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Measurable impact and technical excellence in MERN Stack development projects
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              {/* Icon and Impact Badge */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-3 lg:p-4 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <achievement.icon className="text-white" size={24} />
                </motion.div>
                <div className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold rounded-full shadow-md`}>
                  {achievement.impact}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                  {achievement.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} rounded-b-2xl origin-left`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { icon: TrendingUp, value: "40%", label: "Performance Boost" },
                  { icon: CheckCircle, value: "95%", label: "WCAG Compliance" },
                  { icon: Target, value: "80%", label: "Effort Reduction" },
                  { icon: Award, value: "6+", label: "Major Achievements" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-3 group-hover:bg-white/30 transition-all duration-300">
                      <stat.icon size={24} className="lg:w-8 lg:h-8" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm lg:text-base text-orange-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-8 lg:mt-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Delivering Measurable Results
                </h3>
                <p className="text-lg lg:text-xl text-orange-100 max-w-3xl mx-auto">
                  Every project is an opportunity to create impact through innovative solutions, 
                  performance optimization, and user-centered design
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;