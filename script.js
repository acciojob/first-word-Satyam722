function firstWord(str) {
  // trim leading spaces first
  str = str.trim();

  // find the index of the first space
  const index = str.indexOf(" ");

  // if no space found, return entire string
  if (index === -1) return str;

  // return substring up to the first space
  return str.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
