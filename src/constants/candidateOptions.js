export const EDUCATION_OPTIONS = ['10th', '12th', 'Graduation', 'Post Graduation'];

export const INDUSTRY_OPTIONS = [
  'Sales/Marketing',
  'Banking/Finance',
  'Life Insurance',
  'Health Insurance',
  'General Insurance',
  'FMCG',
  'Admin',
  'Operation',
  'HR',
  'Other'
];

export const withLegacyOption = (options, value) => {
  const v = String(value || '').trim();
  if (v && !options.some((o) => o.toLowerCase() === v.toLowerCase())) {
    return [v, ...options];
  }
  return options;
};
