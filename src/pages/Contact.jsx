import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';
import toast from 'react-hot-toast';
import { validateContactForm } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateContactForm(formData);
    if (errors.length) {
      errors.forEach((msg) => toast.error(msg));
      return;
    }

    setLoading(true);

    try {
      const apiBase = String(import.meta.env.VITE_BACKEND_URL || "").replace(/\/+$/, "");
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent successfully! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'Info@dreamsakar.com', gradient: 'from-indigo-500 to-purple-500' },
    { icon: '📞', title: 'Phone', value: '+91 8889992911', gradient: 'from-purple-500 to-cyan-500' },
    {
      icon: '📍', title: 'Address',
      value: {
        company: 'Dreamsakar Consulting Services',
        headOffice: '1203-C, Vidur Nagar Indore (M.P.) 452009',
        branchOffice: '15-1-413, Feel khana Hyderabad (Telangana) 500012'
      },
      gradient: 'from-cyan-500 to-indigo-500'
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-6 hover:shadow-premium transition-all border border-slate-100"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {info.title}
                  </h3>
                  <div className="text-slate-600 space-y-2">
                    {typeof info.value === "string" ? (
                      <p>{info.value}</p>
                    ) : (
                      <>
                        <p className="font-semibold">{info.value.company}</p>

                        <div>
                          <p className="font-medium text-slate-700">Head Office</p>
                          <p>{info.value.headOffice}</p>
                        </div>

                        <div>
                          <p className="font-medium text-slate-700">Branch Office</p>
                          <p>{info.value.branchOffice}</p>
                        </div>
                      </>
                    )}
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-premium p-8 md:p-12 border border-slate-100"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Phone (10 digits)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    inputProps={{ inputMode: 'numeric', maxLength: 14 }}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={6}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                      },
                    }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{
                        py: 1.8,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                        fontSize: '16px',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0891b2 100%)',
                          boxShadow: '0 15px 30px -5px rgba(99, 102, 241, 0.5)',
                        },
                        '&:disabled': {
                          background: '#cbd5e1',
                        },
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
