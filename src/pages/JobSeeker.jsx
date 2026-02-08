import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { Autocomplete, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";

const JobSeeker = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    current_location: "",
    preferred_location: [""],
    profile: "",
    message: "",
  });
  console.log("formdata", formData)
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const locations = [
    "Indore",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Delhi NCR",
    "Remote",
  ];

  // 🔑 INIT EMAILJS
  useEffect(() => {
    emailjs.init("6NOxaYSDTK1cQJD0d"); // 👈 replace
  }, []);

  // 📎 Convert file to Base64
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // 📨 Submit Handler
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!resume) {
  //     alert("Please upload resume");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const base64Resume = await convertToBase64(resume);

  //     const templateParams = {
  //       name: formData.name,
  //       email: formData.email,
  //       current_location: formData.current_location,
  //       preferred_location: formData.preferred_location,
  //       phone: formData.phone,
  //       profile: formData.profile,
  //       message: formData.message,
  //     };

  //     await emailjs.send(
  //       "service_mr0wjy4",   // 👈 replace
  //       "template_4og0swq",  // 👈 replace
  //       templateParams
  //     );

  //     alert("Application submitted successfully 🚀");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       current_location: "",
  //       preferred_location: "",
  //       profile: "",
  //       message: "",
  //     });
  //     setResume(null);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to submit application ❌");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("profile", formData.profile);
    form.append("currentLocation", formData.current_location);
    form.append(
      "preferredLocations",
      JSON.stringify(formData.preferred_location)
    );
    form.append("message", formData.message);
    form.append("resume", resume);

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}apply`, {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      alert("Application submitted 🚀");
      setFormData({
        name: "",
        email: "",
        phone: "",
        current_location: "",
        preferred_location: [],
        profile: "",
        message: "",
      });
      setResume(null);
    } else {
      alert("Failed to submit ❌");
    }
  };


  return (
    <div className="pt-24 overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Job Seeker Portal
          </motion.h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Apply for top jobs, get expert guidance, and accelerate your career with our placement support.
          </p>
        </div>
      </section>

      {/* WHY APPLY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Apply Through <span className="text-indigo-600">Us</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Access to Verified Job Openings",
                desc: "We work directly with trusted companies to provide genuine and up-to-date job opportunities across multiple industries.",
              },
              {
                title: "Direct Company Hiring",
                desc: "Your profile is shared directly with hiring managers and HR teams, ensuring faster shortlisting and interview scheduling.",
              },
              {
                title: "End-to-End Placement Support",
                desc: "From application submission to final placement, our recruitment team coordinates the complete hiring process.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-slate-50 shadow-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* APPLICATION FORM */}
      <section className="relative py-36 bg-slate-900 text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          >
            Apply for a Job
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8
              bg-white/10 backdrop-blur-2xl
              p-12 rounded-[2.5rem]
              border border-white/20"
          >
            <input
              className="input"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <input
              className="input"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <input
              className="input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />

            <select
              className="input"
              value={formData.profile}
              onChange={(e) =>
                setFormData({ ...formData, profile: e.target.value })
              }
              required
            >
              <option className="text-black" value="">Select Job Profile</option>
              <option className="text-black">Software Developer</option>
              <option className="text-black">Data Analyst</option>
              <option className="text-black">Marketing Executive</option>
              <option className="text-black">HR Recruiter</option>
            </select>

            <input
              className="input"
              placeholder="Current Location"
              value={formData.current_location}
              onChange={(e) =>
                setFormData({ ...formData, current_location: e.target.value })
              }
              required
            />

            {/* <FormControl
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#c7d2fe",
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  borderRadius: "1rem",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.25)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#818cf8",
                  },
                },
              }}
            >
              <InputLabel id="preferred-location-label">
                Preferred Location
              </InputLabel>

              <Select
                labelId="preferred-location-label"
                multiple
                value={formData.preferred_location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    preferred_location: e.target.value,
                  })
                }
                input={<OutlinedInput label="Preferred Location" />}
                renderValue={(selected) => (
                  <div className="flex flex-wrap gap-2">
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.2)",
                          color: "white",
                        }}
                      />
                    ))}
                  </div>
                )}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#0f172a",
                      color: "white",
                    },
                  },
                }}
              >
                {locations.map((location) => (
                  <MenuItem
                    key={location}
                    value={location}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "rgba(99,102,241,0.3)",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(99,102,241,0.2)",
                      },
                    }}
                  >
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            <Autocomplete
              multiple
              options={locations}
              value={formData.preferred_location}
              onChange={(e, value) =>
                setFormData({
                  ...formData,
                  preferred_location: value,
                })
              }
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Preferred Location"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "white",
                      paddingY: "10px",
                      "& fieldset": {
                        borderColor: "rgba(255,255,255,0.25)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#818cf8",
                      },
                    },
                    "& input": {
                      color: "white",
                    },
                    "& .MuiAutocomplete-popupIndicator": {
                      color: "white",
                    },
                    "& .MuiAutocomplete-clearIndicator": {
                      color: "white",
                    },
                  }}
                />
              )}
              PaperComponent={({ children }) => (
                <div className="bg-slate-900 text-white rounded-xl shadow-xl">
                  {children}
                </div>
              )}
            />

            <div className="md:col-span-2">
              <label className="block mb-3 text-sm text-white/70">
                Upload Resume (PDF / DOC)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                required
                className="w-full file:px-6 file:py-4 file:rounded-xl
                           file:bg-white/20 file:text-white"
              />
            </div>

            <textarea
              className="input md:col-span-2 min-h-[140px]"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 py-5 rounded-2xl
                bg-gradient-to-r from-indigo-600 to-purple-600
                font-semibold text-xl
                hover:scale-105 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </motion.form>
        </div>
      </section>

    </div>
  );
};

export default JobSeeker;



{/* <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        grid grid-cols-1 md:grid-cols-2 gap-8
        bg-white/10 backdrop-blur-2xl
        p-12 md:p-16
        rounded-[2.5rem]
        border border-white/20
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
      "
    >
      <input className="input" placeholder="Full Name" />
      <input className="input" placeholder="Email Address" />

      <input className="input" placeholder="Phone Number" />

      <select className="input">
        <option>Select Job Profile</option>
        <option>Software Developer</option>
        <option>Data Analyst</option>
        <option>Marketing Executive</option>
        <option>HR Recruiter</option>
      </select>

      <div className="md:col-span-2">
        <label className="block mb-3 text-sm text-white/70">
          Upload Resume (PDF / DOC)
        </label>
        <input
          type="file"
          className="w-full text-white text-lg file:mr-4 file:px-6 file:py-4
                     file:rounded-xl file:border-0
                     file:bg-white/20 file:text-white
                     hover:file:bg-white/30 transition"
          accept=".pdf,.doc,.docx"
        />
      </div>

      <textarea
        className="input md:col-span-2 min-h-[140px]"
        placeholder="Message (optional)"
      />

      <button
        type="submit"
        className="
          md:col-span-2 py-5 rounded-2xl
          bg-gradient-to-r from-indigo-600 to-purple-600
          font-semibold text-xl
          hover:scale-[1.04] active:scale-95
          transition shadow-xl
        "
      >
        Submit Application
      </button>
    </motion.form> */}