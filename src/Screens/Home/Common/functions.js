const randomInt = (max, min = 1) => Math.floor(Math.random() * max) + min;

const getUniqNumber = (history) => {
  const number = randomInt(75);
  if (history.indexOf(number) === -1) {
    return number;
  }

  return getUniqNumber(history);
};

export const paddedNumber = (number) => (
  number == null
    ? ''
    : number.toString().padStart(2, '0')
);

export const newNumber = (setHistory, history) => () => {
  if (history.length > 74) {
    return;
  }
  const number = getUniqNumber(history);
  setHistory([number, ...history]);
};
