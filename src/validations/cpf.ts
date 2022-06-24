import { mod11 } from '../utils/mod11';

export function isValidCpf(value: string): boolean {
  const cpfClean = value.replace(/\D/g, '');
  const sizeCpf = 11;

  if (cpfClean.length !== 11) return false;

  if (
    cpfClean === '00000000000' || 
    cpfClean === '11111111111' ||
    cpfClean === '22222222222' ||
    cpfClean === '33333333333' ||
    cpfClean === '44444444444' ||
    cpfClean === '55555555555' ||
    cpfClean === '66666666666' ||
    cpfClean === '77777777777' ||
    cpfClean === '88888888888' ||
    cpfClean === '99999999999' 
    ) return false;

  const baseCpf = cpfClean.substring(0, 9);
  const firstDigit = calculateFirstDigit(baseCpf);
  const baseCpfWithFirstDigit = baseCpf.concat(String(firstDigit));
  const secondDigit = calculateSecondDigit(baseCpfWithFirstDigit);

  const cpfCompare = baseCpfWithFirstDigit + secondDigit;

  return cpfClean === cpfCompare;
}

export function calculateFirstDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0;

  let i = 10;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (11 - mod11(sumDigits)) >= 10 ? 0 : (11 - mod11(sumDigits));
}

export function calculateSecondDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0
  
  let i = 11;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (11 - mod11(sumDigits)) >= 10 ? 0 : (11 - mod11(sumDigits));
}