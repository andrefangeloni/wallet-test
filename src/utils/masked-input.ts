export const expirationDateInputMask = (text: string) => {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{2})(\d)/, '$1/$2');

  return text;
};

export const cardNumberInputMask = (text: string) => {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{4})(\d)/, '$1 $2');
  text = text.replace(/(\d{4})(\d)/, '$1 $2');
  text = text.replace(/(\d{4})(\d)/, '$1 $2');

  return text;
};
