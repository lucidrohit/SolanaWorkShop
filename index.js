
function stirngPalindrome(string) {
  const length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - i - 1]) return false;
  }
  return true;
}


console.log(stirngPalindrome(process.argv[2]));