
export const ArrangeWords = (words: string[]): string => {
  let text = "";
  words.forEach((word) => {
    if (text === "") {
      text = word;
    } else if (text !== "") {
      text += ` / ${word}`
    }
  });
  return text;
};