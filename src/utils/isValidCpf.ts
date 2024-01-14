export default function isValidCpf(cpf: string) {
  const clearedCpf = cpf.replace(/\D/g, '');
  if (clearedCpf.length !== 11) return false;

  const firstNineDigits = clearedCpf.slice(0, 9);
  const firstVerifierDigit = Number(clearedCpf.charAt(9));
  const secondVerifierDigit = Number(clearedCpf.charAt(10));

  const firstDigitSum = firstNineDigits
    .split('')
    .map((digit, index) => Number(digit) * (10 - index))
    .reduce((acc, curr) => acc + curr);

  const firstDigit = (firstDigitSum * 10) % 11;

  const secondDigitSum = firstNineDigits
    .concat(firstDigit.toString())
    .split('')
    .map((digit, index) => Number(digit) * (11 - index))
    .reduce((acc, curr) => acc + curr);

  const secondDigit = (secondDigitSum * 10) % 11;

  return (
    firstDigit === firstVerifierDigit && secondDigit === secondVerifierDigit
  );
}
