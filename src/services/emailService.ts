import emailjs from '@emailjs/browser';

// Validate EmailJS configuration
export const isEmailJSConfigured = (): boolean => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Return false if any required field is missing or empty
  return !!(serviceId && templateId && publicKey && 
           serviceId.trim() !== '' && 
           templateId.trim() !== '' && 
           publicKey.trim() !== '');
};

// Initialize EmailJS if configuration is valid
const initializeEmailJS = (): boolean => {
  if (!isEmailJSConfigured()) {
    return false;
  }

  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Send email using EmailJS
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  // Check if EmailJS is properly configured
  if (!isEmailJSConfigured()) {
    return {
      success: false,
      message: 'Email service is not configured. Please contact me directly via email or phone.'
    };
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: import.meta.env.VITE_PERSONAL_NAME || 'Pratik Gharge',
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly.'
    };
  }
};

// Get configuration status for UI display
export const getConfigStatus = () => {
  const isConfigured = isEmailJSConfigured();
  
  return {
    isConfigured,
    message: isConfigured 
      ? 'EmailJS is properly configured' 
      : 'EmailJS configuration is incomplete. Contact form will show alternative contact methods.'
  };
};

// Initialize EmailJS on module load
initializeEmailJS();