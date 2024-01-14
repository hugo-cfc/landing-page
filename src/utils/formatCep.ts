export default function formatCep(inputValue: string): string {
  const numericValue = inputValue.replace(/\D/g, '');
  if (numericValue.length > 8) {
    return numericValue.substring(0, 8);
  }

  if (numericValue.length >= 5) {
    return `${numericValue.substring(0, 5)}-${numericValue.substring(5)}`;
  } else {
    return numericValue;
  }
}
