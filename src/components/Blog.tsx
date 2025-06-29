import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, BookOpen, ArrowRight, Tag } from 'lucide-react';
import { blogs } from '../data/portfolio';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Blog
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in web development
          </p>
        </motion.div>

        {blogs.length > 0 ? (
          <>
            {/* Featured Blog */}
            {blogs.filter(blog => blog.featured).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Featured Article
                </h3>
                {blogs.filter(blog => blog.featured).slice(0, 1).map((blog) => (
                  <motion.article
                    key={blog.id}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group cursor-pointer"
                    onClick={() => window.open(blog.url, '_blank')}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                            Featured
                          </span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                            {blog.platform}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {blog.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {blog.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {blog.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{blog.publishedAt}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{blog.readTime}</span>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-medium"
                          >
                            <span>Read Article</span>
                            <ArrowRight size={16} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.filter(blog => !blog.featured).map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group cursor-pointer"
                  onClick={() => window.open(blog.url, '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {blog.platform}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white" size={20} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                          +{blog.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{blog.publishedAt}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="text-blue-600 dark:text-blue-400"
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                >
                  <BookOpen className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 text-blue-100">
                  Follow me on various platforms to get notified when I publish new articles
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="https://dev.to/ghargepratik"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Follow on Dev.to
                  </motion.a>
                  <motion.a
                    href="https://medium.com/@ghargepratik"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                  >
                    Follow on Medium
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-8"
            >
              <BookOpen className="text-blue-600 dark:text-blue-400" size={48} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm currently working on creating valuable technical content to share with the community. 
              Stay tuned for articles about web development, best practices, and my learning journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Tag,
                  title: "Technical Tutorials",
                  description: "Step-by-step guides on modern web development"
                },
                {
                  icon: BookOpen,
                  title: "Best Practices",
                  description: "Sharing insights and industry best practices"
                },
                {
                  icon: ArrowRight,
                  title: "Learning Journey",
                  description: "My experiences and lessons learned"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Want to be notified when I publish my first article?
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;