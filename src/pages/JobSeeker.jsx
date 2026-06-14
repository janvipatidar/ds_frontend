// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { useEffect, useState } from "react";
// import { Autocomplete, Chip, TextField } from "@mui/material";

// const JobSeeker = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     education: "",
//     experience: "",
//     noticePeriod: "",
//     currentEmployer: "",
//     previousEmployer: "",
//     keySkills: [],
//     currentIndustry: "",
//     location: "",
//     expectedSalary: "",
//     resumeUrl: "",
//   });
//   console.log("formdata", formData)
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const industries = ["Financial Services", "Life Insurance", "Health Care"];

//   // 🔑 INIT EMAILJS
//   useEffect(() => {
//     emailjs.init("6NOxaYSDTK1cQJD0d"); // 👈 replace
//   }, []);

//   // 📎 Convert file to Base64
//   const convertToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   // 📨 Submit Handler
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!resume) {
//   //     alert("Please upload resume");
//   //     return;
//   //   }

//   //   setLoading(true);

//   //   try {
//   //     const base64Resume = await convertToBase64(resume);

//   //     const templateParams = {
//   //       name: formData.name,
//   //       email: formData.email,
//   //       current_location: formData.current_location,
//   //       preferred_location: formData.preferred_location,
//   //       phone: formData.phone,
//   //       profile: formData.profile,
//   //       message: formData.message,
//   //     };

//   //     await emailjs.send(
//   //       "service_mr0wjy4",   // 👈 replace
//   //       "template_4og0swq",  // 👈 replace
//   //       templateParams
//   //     );

//   //     alert("Application submitted successfully 🚀");

//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       phone: "",
//   //       current_location: "",
//   //       preferred_location: "",
//   //       profile: "",
//   //       message: "",
//   //     });
//   //     setResume(null);
//   //   } catch (error) {
//   //     console.error(error);
//   //     alert("Failed to submit application ❌");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
//     form.append("name", formData.name);
//     form.append("email", formData.email);
//     form.append("phone", formData.phone);
//     // legacy fields (backend keeps them for compatibility)
//     form.append("profile", "Job Seeker");
//     form.append("currentLocation", formData.location);
//     form.append("preferredLocations", JSON.stringify([]));
//     form.append("message", "");

//     // new fields
//     form.append("dateOfBirth", formData.dateOfBirth);
//     form.append("education", formData.education);
//     form.append("experience", formData.experience);
//     form.append("noticePeriod", formData.noticePeriod);
//     form.append("currentEmployer", formData.currentEmployer);
//     form.append("previousEmployer", formData.previousEmployer);
//     form.append("keySkills", formData.keySkills.join(", "));
//     form.append("currentIndustry", formData.currentIndustry);
//     form.append("location", formData.location);
//     form.append("expectedSalary", formData.expectedSalary);
//     form.append("resumeUrl", formData.resumeUrl);

//     if (resume) {
//       form.append("resume", resume);
//     }

//     const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}apply`, {
//       method: "POST",
//       body: form,
//     });

//     if (res.ok) {
//       alert("Application submitted 🚀");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         dateOfBirth: "",
//         education: "",
//         experience: "",
//         noticePeriod: "",
//         currentEmployer: "",
//         previousEmployer: "",
//         keySkills: [],
//         currentIndustry: "",
//         location: "",
//         expectedSalary: "",
//         resumeUrl: "",
//       });
//       setResume(null);
//     } else {
//       alert("Failed to submit ❌");
//     }
//   };


//   return (
//     <div className="pt-24 overflow-x-hidden">

//       {/* HERO */}
//       <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-28">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl md:text-6xl font-bold mb-6"
//           >
//             Job Seeker Portal
//           </motion.h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Apply for top jobs, get expert guidance, and accelerate your career with our placement support.
//           </p>
//         </div>
//       </section>

//       {/* WHY APPLY */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-center mb-16"
//           >
//             Why Apply Through <span className="text-indigo-600">Us</span>
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Access to Verified Job Openings",
//                 desc: "We work directly with trusted companies to provide genuine and up-to-date job opportunities across multiple industries.",
//               },
//               {
//                 title: "Direct Company Hiring",
//                 desc: "Your profile is shared directly with hiring managers and HR teams, ensuring faster shortlisting and interview scheduling.",
//               },
//               {
//                 title: "End-to-End Placement Support",
//                 desc: "From application submission to final placement, our recruitment team coordinates the complete hiring process.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -8 }}
//                 className="p-8 rounded-2xl bg-slate-50 shadow-lg text-center"
//               >
//                 <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
//                 <p className="text-slate-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* APPLICATION FORM */}
//       <section className="relative py-36 bg-slate-900 text-white overflow-hidden">
//         {/* Background glow */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl" />
//         </div>

//         <div className="relative max-w-5xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-extrabold text-center mb-16"
//           >
//             Apply for a Job
//           </motion.h2>

//           <motion.form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8
//               bg-white/10 backdrop-blur-2xl
//               p-12 rounded-[2.5rem]
//               border border-white/20"
//           >
//             <input
//               className="input"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               required
//             />

//             <input
//               className="input"
//               type="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//             />

//             <input
//               className="input"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               required
//             />

//             <input
//               className="input"
//               type="date"
//               placeholder="Date of Birth"
//               value={formData.dateOfBirth}
//               onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
//             />

//             <input
//               className="input"
//               placeholder="Education"
//               value={formData.education}
//               onChange={(e) => setFormData({ ...formData, education: e.target.value })}
//             />

//             <input
//               className="input"
//               type="number"
//               min="0"
//               step="0.5"
//               placeholder="Experience (years)"
//               value={formData.experience}
//               onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
//             />

//             <input
//               className="input"
//               placeholder="Notice Period"
//               value={formData.noticePeriod}
//               onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
//             />

//             <input
//               className="input"
//               placeholder="Current Employer"
//               value={formData.currentEmployer}
//               onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
//             />

//             <input
//               className="input"
//               placeholder="Previous Employer"
//               value={formData.previousEmployer}
//               onChange={(e) => setFormData({ ...formData, previousEmployer: e.target.value })}
//             />

//             <Autocomplete
//               multiple
//               freeSolo
//               options={[]}
//               value={formData.keySkills}
//               onChange={(e, value) =>
//                 setFormData({
//                   ...formData,
//                   keySkills: value,
//                 })
//               }
//               renderTags={(value, getTagProps) =>
//                 value.map((option, index) => (
//                   <Chip
//                     label={option}
//                     {...getTagProps({ index })}
//                     sx={{
//                       backgroundColor: "rgba(255,255,255,0.2)",
//                       color: "white",
//                     }}
//                   />
//                 ))
//               }
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   placeholder="Key Skills (type and press enter)"
//                   variant="outlined"
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: "1rem",
//                       backgroundColor: "rgba(255,255,255,0.08)",
//                       color: "white",
//                       paddingY: "10px",
//                       "& fieldset": {
//                         borderColor: "rgba(255,255,255,0.25)",
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "rgba(255,255,255,0.5)",
//                       },
//                       "&.Mui-focused fieldset": {
//                         borderColor: "#818cf8",
//                       },
//                     },
//                     "& input": {
//                       color: "white",
//                     },
//                   }}
//                 />
//               )}
//               PaperComponent={({ children }) => (
//                 <div className="bg-slate-900 text-white rounded-xl shadow-xl">
//                   {children}
//                 </div>
//               )}
//             />

//             <select
//               className="input"
//               value={formData.currentIndustry}
//               onChange={(e) => setFormData({ ...formData, currentIndustry: e.target.value })}
//               required
//             >
//               <option className="text-black" value="">Select Industry</option>
//               {industries.map((i) => (
//                 <option key={i} className="text-black" value={i}>{i}</option>
//               ))}
//             </select>

//             <input
//               className="input"
//               placeholder="Location"
//               value={formData.location}
//               onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               required
//             />

//             <input
//               className="input"
//               placeholder="Expected Salary"
//               value={formData.expectedSalary}
//               onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
//             />

//             <input
//               className="input md:col-span-2"
//               placeholder="Resume URL (Google Drive / Link)"
//               value={formData.resumeUrl}
//               onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
//             />

//             <div className="md:col-span-2">
//               <label className="block mb-3 text-sm text-white/70">
//                 Upload Resume (PDF / DOC)
//               </label>
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => setResume(e.target.files[0])}
//                 className="w-full file:px-6 file:py-4 file:rounded-xl
//                            file:bg-white/20 file:text-white"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="md:col-span-2 py-5 rounded-2xl
//                 bg-gradient-to-r from-indigo-600 to-purple-600
//                 font-semibold text-xl
//                 hover:scale-105 transition"
//             >
//               {loading ? "Submitting..." : "Submit Application"}
//             </button>
//           </motion.form>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default JobSeeker;



// {/* <motion.form
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="
//         grid grid-cols-1 md:grid-cols-2 gap-8
//         bg-white/10 backdrop-blur-2xl
//         p-12 md:p-16
//         rounded-[2.5rem]
//         border border-white/20
//         shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
//       "
//     >
//       <input className="input" placeholder="Full Name" />
//       <input className="input" placeholder="Email Address" />

//       <input className="input" placeholder="Phone Number" />

//       <select className="input">
//         <option>Select Job Profile</option>
//         <option>Software Developer</option>
//         <option>Data Analyst</option>
//         <option>Marketing Executive</option>
//         <option>HR Recruiter</option>
//       </select>

//       <div className="md:col-span-2">
//         <label className="block mb-3 text-sm text-white/70">
//           Upload Resume (PDF / DOC)
//         </label>
//         <input
//           type="file"
//           className="w-full text-white text-lg file:mr-4 file:px-6 file:py-4
//                      file:rounded-xl file:border-0
//                      file:bg-white/20 file:text-white
//                      hover:file:bg-white/30 transition"
//           accept=".pdf,.doc,.docx"
//         />
//       </div>

//       <textarea
//         className="input md:col-span-2 min-h-[140px]"
//         placeholder="Message (optional)"
//       />

//       <button
//         type="submit"
//         className="
//           md:col-span-2 py-5 rounded-2xl
//           bg-gradient-to-r from-indigo-600 to-purple-600
//           font-semibold text-xl
//           hover:scale-[1.04] active:scale-95
//           transition shadow-xl
//         "
//       >
//         Submit Application
//       </button>
//     </motion.form> */}


import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { INDIA_STATES, getCitiesForState } from "../data/indiaLocations";
import { EDUCATION_OPTIONS, INDUSTRY_OPTIONS } from "../constants/candidateOptions";
import { isOtherCity } from "../utils/city";
import { validateCandidateForm } from "../utils/validation";

const JobSeeker = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    currentCTC: "",
    dateOfBirth: "",
    education: "",
    experience: "",
    noticePeriod: "",
    currentEmployer: "",
    previousEmployer: "",
    keySkills: [],
    currentIndustry: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    expectedSalary: "",
    notes: "",
  });

  const [customCity, setCustomCity] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const cityOptions = useMemo(
    () => (formData.state ? getCitiesForState(formData.state) : []),
    [formData.state]
  );

  const NOTICE_PERIODS = [
    "Immediate",
    "15 days",
    "1 month",
    "2 months",
    "3 months",
    "6 months",
  ];

  // 🔥 Submit Handler (NEW API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateCandidateForm({ ...formData, customCity });
    if (errors.length) {
      errors.forEach((msg) => toast.error(msg));
      return;
    }

    setLoading(true);

    try {
      const apiBase = String(import.meta.env.VITE_BACKEND_URL || "").replace(/\/+$/, "");
      const form = new FormData();
      form.append("name", formData.name.trim());
      form.append("designation", formData.designation.trim());
      form.append("currentCTC", String(formData.currentCTC ?? ""));
      form.append("email", formData.email.trim());
      form.append("phone", formData.phone.trim());
      form.append("dateOfBirth", formData.dateOfBirth);
      form.append("education", formData.education);
      form.append("experience", String(formData.experience ?? ""));
      form.append("noticePeriod", formData.noticePeriod);
      form.append("currentEmployer", formData.currentEmployer);
      form.append("previousEmployer", formData.previousEmployer);
      form.append("keySkills", formData.keySkills.join(", "));
      form.append("currentIndustry", formData.currentIndustry);
      form.append("state", formData.state);
      form.append("city", formData.city);
      if (isOtherCity(formData.city)) {
        form.append("customCity", customCity.trim());
      }
      form.append("expectedSalary", String(formData.expectedSalary ?? ""));
      form.append("notes", formData.notes);
      if (resumeFile) form.append("resume", resumeFile);

      const res = await fetch(`${apiBase}/api/candidate`, {
        method: "POST",
        body: form,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Application submitted successfully!");

        setFormData({
          name: "",
          designation: "",
          currentCTC: "",
          dateOfBirth: "",
          education: "",
          experience: "",
          noticePeriod: "",
          currentEmployer: "",
          previousEmployer: "",
          keySkills: [],
          currentIndustry: "",
          state: "",
          city: "",
          email: "",
          phone: "",
          expectedSalary: "",
          notes: "",
        });
        setCustomCity("");
        setResumeFile(null);
      } else {
        toast.error(data.message || "Failed to submit application");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-24 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-6">
        Find Your Dream Job Faster 🚀
      </h1>

      <p className="text-xl leading-relaxed mb-8">
        Complete this application form and join our talent network.  
        Your profile will be reviewed by recruiters and matched with
        suitable job opportunities based on your skills, experience,
        location, and career goals.
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
        <div className="bg-white/10 rounded-xl p-4">
          ✅ Fill your profile details
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          📄 Upload your updated resume
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          🎯 Get matched with relevant jobs
        </div>
      </div>

      <p className="mt-8 text-sm text-white/90">
        Please provide accurate information to increase your chances of getting shortlisted.
      </p>
    </div>
  </section>

      {/* FORM */}
       <section className="py-20 bg-slate-900 text-white">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Apply Now
      </motion.h2>

      <p className="text-center text-gray-400 mb-12">
        Fill out the form below and submit your application to explore available opportunities.
      </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 p-10 rounded-3xl"
          >
            {/* Basic Info */}
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
              placeholder="Designation"
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
              required
            />

            <input
              className="input"
              type="number"
              min="0"
              step="0.1"
              placeholder="Current CTC (LPA)"
              value={formData.currentCTC}
              onChange={(e) =>
                setFormData({ ...formData, currentCTC: e.target.value })
              }
              required
            />

            <input
              className="input"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <input
              className="input"
              placeholder="Phone (10 digits)"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              inputMode="numeric"
              maxLength={14}
              required
            />

            <input
              className="input"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />

            <select
              className="input"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
              required
            >
              <option value="">Select Education</option>
              {EDUCATION_OPTIONS.map((edu) => (
                <option key={edu} value={edu}>
                  {edu}
                </option>
              ))}
            </select>

            <input
              className="input"
              type="number"
              placeholder="Experience (Years)"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            />

            <select
              className="input"
              value={formData.noticePeriod}
              onChange={(e) =>
                setFormData({ ...formData, noticePeriod: e.target.value })
              }
            >
              <option value="">Select Notice Period</option>
              {NOTICE_PERIODS.map((np) => (
                <option key={np} value={np}>
                  {np}
                </option>
              ))}
            </select>

            {/* Company Info */}
            <input
              className="input"
              placeholder="Current Employer"
              value={formData.currentEmployer}
              onChange={(e) =>
                setFormData({ ...formData, currentEmployer: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Previous Employer"
              value={formData.previousEmployer}
              onChange={(e) =>
                setFormData({ ...formData, previousEmployer: e.target.value })
              }
            />

            {/* Skills */}
            <Autocomplete
              multiple
              freeSolo
              options={[]}
              value={formData.keySkills}
              onChange={(e, value) =>
                setFormData({ ...formData, keySkills: value })
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
                  placeholder="Key Skills"
                  variant="outlined"
                />
              )}
            />

            {/* State & City */}
            <select
              className="input"
              value={formData.state}
              onChange={(e) => {
                setFormData({ ...formData, state: e.target.value, city: "" });
                setCustomCity("");
              }}
              required
            >
              <option value="">Select State</option>
              {INDIA_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              className="input"
              value={formData.city}
              onChange={(e) => {
                const next = e.target.value;
                setFormData({ ...formData, city: next });
                if (!isOtherCity(next)) setCustomCity("");
              }}
              disabled={!formData.state}
              required
            >
              <option value="">
                {formData.state ? "Select City" : "Select state first"}
              </option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {isOtherCity(formData.city) && (
              <input
                className="input"
                placeholder="Custom City *"
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                required
              />
            )}

            <Autocomplete
              options={INDUSTRY_OPTIONS}
              value={formData.currentIndustry || null}
              onChange={(e, value) =>
                setFormData({ ...formData, currentIndustry: value || "" })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Current Industry"
                  variant="outlined"
                />
              )}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
            />

            <input
              className="input"
              placeholder="Expected Salary"
              value={formData.expectedSalary}
              onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
            />

            <div className="md:col-span-2">
              <label className="block mb-2 text-sm text-white/70">
                Upload Resume (PDF / DOC / DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                className="w-full file:px-6 file:py-3 file:rounded-xl file:bg-white/20 file:text-white"
              />
            </div>

            <textarea
              className="input md:col-span-2 min-h-[120px]"
              placeholder="Notes (optional)"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 py-4 bg-indigo-600 rounded-xl text-lg hover:bg-indigo-700 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JobSeeker;