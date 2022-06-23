import { mod11 } from '../utils/mod11';

export function isValidCpf(value: string): boolean {
  const sizeCpf = 11;

  if (value.length !== 11) return false;

  if (
      value === '00000000000' || 
      value === '11111111111' ||
      value === '22222222222' ||
      value === '33333333333' ||
      value === '44444444444' ||
      value === '55555555555' ||
      value === '66666666666' ||
      value === '77777777777' ||
      value === '88888888888' ||
      value === '99999999999' 
    ) return false;

  const baseCpf = value.substring(0, 9);
  const firstDigit = calculateFirstDigit(baseCpf);
  const baseCpfWithFirstDigit = baseCpf.concat(String(firstDigit));
  const secondDigit = calculateSecondDigit(baseCpfWithFirstDigit);

  const cpfCompare = baseCpfWithFirstDigit + secondDigit;

  return value === cpfCompare;
}

function calculateFirstDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0;

  let i = 10;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (11 - mod11(sumDigits)) >= 10 ? 0 : (11 - mod11(sumDigits));
}

function calculateSecondDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0
  
  let i = 11;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (11 - mod11(sumDigits)) >= 10 ? 0 : (11 - mod11(sumDigits));
}