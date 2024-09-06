export function formatNumberIndian(number) {
  const numberStr = number.toString();
  const beforeDecimal = numberStr.split(".")[0]; // Get integer part
  const afterDecimal = numberStr.split(".")[1] || ""; // Get fractional part if exists

  // Apply the Indian number format (first 3 digits then every 2 digits)
  const lastThree = beforeDecimal.slice(-3);
  const otherNumbers = beforeDecimal.slice(0, -3);
  const formattedBeforeDecimal =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
    (otherNumbers ? "," : "") +
    lastThree;

  return afterDecimal
    ? formattedBeforeDecimal + "." + afterDecimal
    : formattedBeforeDecimal;
}
