export const OTHER_CITY_VALUE = 'Other';

export const resolveCityValue = (city, customCity) => {
  if (String(city || '').trim().toLowerCase() === 'other') {
    return String(customCity || '').trim();
  }
  return String(city || '').trim();
};

export const isOtherCity = (city) =>
  String(city || '').trim().toLowerCase() === 'other';
