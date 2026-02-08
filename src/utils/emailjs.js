import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data object with name, email, phone, message
 * @returns {Promise} - Promise that resolves with email send result
 */
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error.text || error.message };
  }
};
