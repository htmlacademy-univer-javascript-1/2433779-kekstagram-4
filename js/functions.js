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

const getStandardTime = (time) => {
  const newTime = (time[0] === '0') ? time.substr(1).split(':') : time.split(':');
  if (newTime[1][0] === '0' && newTime[1].length > 1) {
    newTime[1] = newTime[1].substr(1);
  }
  return Number(newTime[0]*60) + Number(newTime[1]);
};

const getTime = (startTime, finishTime, meetingTime, duration) => (getStandardTime(startTime) <= getStandardTime(meetingTime)) && (getStandardTime(finishTime) >= (getStandardTime(meetingTime) + duration));

export {checkStringLength};
