const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^(?:\+91[\-\s]?)?[6-9]\d{9}$/;

export const normalizePhone = (phone) =>
  String(phone || '')
    .trim()
    .replace(/[\s\-()]/g, '');

export const isValidEmail = (email) => EMAIL_RE.test(String(email || '').trim());

export const isValidPhone = (phone) => {
  const p = normalizePhone(phone);
  return /^(\+91)?[6-9]\d{9}$/.test(p);
};

export const validateCandidateForm = (data) => {
  const errors = [];
  if (!String(data.name || '').trim()) errors.push('Name is required');
  if (!isValidEmail(data.email)) errors.push('Enter a valid email address');
  if (!isValidPhone(data.phone)) errors.push('Enter a valid 10-digit mobile number');
  if (!data.state) errors.push('Please select a state');
  if (!data.city) errors.push('Please select a city');
  return errors;
};

export const validateContactForm = (data) => {
  const errors = [];
  if (!String(data.name || '').trim()) errors.push('Name is required');
  if (!isValidEmail(data.email)) errors.push('Enter a valid email address');
  if (!isValidPhone(data.phone)) errors.push('Enter a valid 10-digit mobile number');
  if (!String(data.message || '').trim()) errors.push('Message is required');
  return errors;
};
