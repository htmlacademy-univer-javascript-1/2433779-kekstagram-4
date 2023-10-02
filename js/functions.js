const checkStringLength = (str, maxLength) => str.length <= maxLength;

const checkPolydrome = (str) => {
  str = str.replaceAll(' ', '').toLowerCase();
  if (str.length % 2 === 0) {
    if (str.slice(0, str.length / 2) === (str.slice(str.length / 2, str.length).split('').reverse().join(''))) {
      return true;
    }
  }
  else if (str.slice(0, str.length / 2) === str.slice(str.length / 2 + 1, str.length).split('').reverse().join('')) {
    return true;
  }
  return false;
};
