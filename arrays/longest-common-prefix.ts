function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  if (strs.length === 1) return strs[0];

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const letterFirstWord = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (letterFirstWord != strs[j][i]) {
        return prefix;
      }
    }
    prefix += letterFirstWord;
  }
  return prefix;
}
