import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';

const EmailJSSetup: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const setupSteps = [
    {
      step: 1,
      title: "Create EmailJS Account",
      description: "Sign up for a free account at EmailJS",
      action: "Visit EmailJS",
      link: "https://www.emailjs.com/"
    },
    {
      step: 2,
      title: "Add Email Service",
      description: "Connect your email provider (Gmail, Outlook, etc.)",
      action: "Add Service",
      details: "Go to Email Services → Add New Service → Choose your provider"
    },
    {
      step: 3,
      title: "Create Email Template",
      description: "Design your email template with dynamic variables",
      action: "Create Template",
      template: `
Subject: New Contact from Portfolio - {{from_name}}

Hello Pratik,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
      `
    },
    {
      step: 4,
      title: "Get Your Credentials",
      description: "Copy your Service ID, Template ID, and Public Key",
      action: "Update Config"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Settings className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                EmailJS Setup Guide
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Follow these steps to enable email functionality
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span>{step.action}</span>
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {step.details && (
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {step.details}
                        </p>
                      </div>
                    )}

                    {step.template && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Template:
                          </span>
                          <button
                            onClick={() => copyToClipboard(step.template!, 'template')}
                            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                          >
                            {copiedField === 'template' ? <Check size={14} /> : <Copy size={14} />}
                            <span>{copiedField === 'template' ? 'Copied!' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-700 dark:text-gray-300">
                          {step.template}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Update Configuration
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-4">
                  After completing the setup, update the following values in <code>src/services/emailService.ts</code>:
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Service ID', value: 'your_service_id' },
                    { label: 'Template ID', value: 'your_template_id' },
                    { label: 'Public Key', value: 'your_public_key' }
                  ].map((config, index) => (
                    <div key={index} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">{config.label}:</span>
                        <code className="ml-2 text-sm text-gray-600 dark:text-gray-400">{config.value}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(config.value, config.label)}
                        className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                      >
                        {copiedField === config.label ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copiedField === config.label ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailJSSetup;