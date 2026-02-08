import emailjs from "@emailjs/browser";

export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendJobApplication = async (data) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data
    );
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
