export const isWeekend = (dateString) => {
  if (!dateString) return false;
  const d = new Date(dateString);
  return d.getDay() === 0 || d.getDay() === 6; // Sunday=0, Saturday=6
};

// format date e.g. "Monday, 8 December"
export const formatPrettyDate = (dateString) => {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });
};
