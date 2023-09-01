export const onlyNumbers = (text: string) => text.replace(/\D/g, '');

export const maskedCardNumber = (cardNumber: string) => {
  const removeSpaces = cardNumber.replace(/ /g, '');
  const maskedCard = '*'.repeat(12) + removeSpaces.slice(-4);
  const formattedCard = maskedCard.replace(/(.{4})/g, '$1 ');

  return formattedCard;
};
