const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvqxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%-";

const getRandomNumber = (length: number) => {
  return Math.floor(Math.random() * length);
};

export const generatePassword = (
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean,
  length: number
) => {
  let password = "";
  let chosenCharacters = "";

  if (uppercase) {
    chosenCharacters += UPPERCASE;
  }

  if (lowercase) {
    chosenCharacters += LOWERCASE;
  }

  if (numbers) {
    chosenCharacters += NUMBERS;
  }

  if (symbols) {
    chosenCharacters += SYMBOLS;
  }

  for (let index = 0; index < length; ++index) {
    password += chosenCharacters[getRandomNumber(chosenCharacters.length)];
  }

  return password;
};

export const isFireFoxBrowser = () => {
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent.toString() : "";
  return userAgent.includes("Firefox");
};
