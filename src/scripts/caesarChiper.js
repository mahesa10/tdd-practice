const caesarChiper = (str, shift) => {
  if (shift < 0 || shift > 25) {
    console.log('Shift must be between 0 and 25');
    return;
  }
  
  let res = '';

  function isLetter(letter) {
    return letter.toLowerCase() != letter.toUpperCase();
  }

  function isUpperCase(letter) {
    let regex = /[A-Z]/;
    return regex.test(letter);
  }

  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      let charCode = str[i].toLowerCase().charCodeAt(0);
      let newLetter = String.fromCharCode((charCode - 97 + shift) % 26 + 97);
      if (isUpperCase(str[i])) newLetter = newLetter.toUpperCase();
      res += newLetter;
    } else {
      res += str[i];
    }
  }

  return res;
}

export default caesarChiper;