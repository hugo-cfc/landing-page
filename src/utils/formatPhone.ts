import applyMask from './applyMask';

const formatPhone = (value?: string) => {
  if (!value) return '';

  const numericValue = value.replace(/[\D]/g, '');

  if (numericValue.length > 11) {
    return value.substring(0, 15);
  }
  return `${applyMask(numericValue, '(99) 99999-9999')}`;
};

export default formatPhone;
