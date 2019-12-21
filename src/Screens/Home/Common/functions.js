import Speech from './speech';

const randomInt = (max, min = 1) => Math.floor(Math.random() * max) + min;

const getUniqNumber = (history) => {
  const number = randomInt(75);
  if (history.indexOf(number) === -1) {
    return number;
  }

  return getUniqNumber(history);
};

const splitNumber = (number) => number.toString().split('').join(' ');

const callSpeech = async (number, text = null) => {
  const props = {
    text: text || `
      ${splitNumber(number)}, número ${number}.
      Repito, ${splitNumber(number)}, número ${number}.
    `,
    voice: 'Luciana',
    lang: 'pt-BR',
  };
  const SpeechService = new Speech(props);
  SpeechService.speak();
};

export const paddedNumber = (number) => (
  number == null
    ? ''
    : number.toString().padStart(2, '0')
);

export const newNumber = (setHistory, history) => async () => {
  if (history.length > 74) {
    return;
  }
  const number = getUniqNumber(history);
  await callSpeech(number);
  setHistory([number, ...history]);
};

export const bingo = (setHistory) => async () => {
  await callSpeech(0, 'Biiingo! Um jogador fez BINGO!');
  setHistory([]);
};

export const line = async () => {
  await callSpeech(0, 'Linha. Um jogador fez linha!');
};

export const repeatNumber = (history) => async () => {
  if (history.length === 0) {
    return;
  }
  const [number] = history;
  await callSpeech(number);
};

