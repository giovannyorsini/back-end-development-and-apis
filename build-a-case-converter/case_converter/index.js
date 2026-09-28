const { __esModule } = require("@babel/generator");

function getUpperCase(str) {
    return str.toUpperCase();
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(str) {
    const lower = str.toLowerCase();
    const firstLetter = lower[0].toUpperCase();
    const rest = lower.slice(1);
    
    return firstLetter + rest;
}

function getProperCase(str) {
  const lower = str.toLowerCase();
  
  const words = lower.split(" ");
  
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const actual = words[i];

    if (actual.length > 0) {
      const firstLetter = actual[0].toUpperCase();
      
      const rest = actual.slice(1);
      
      result.push(firstLetter + rest);
    } else {
      result.push("");
    }
  }

  return result.join(" ");
}

module.exports = {
    getLowerCase,
    getUpperCase,
    getSentenceCase,
    getProperCase
};