export const evaluateMessage = (value: number) => {
  if (value <= -5) {
    return "logic.first";
  }

  if (value <= 0) {
    return "logic.second";
  }

  if (value <= 5) {
    return "logic.third";
  }

  return "logic.fourth";
};

export const getEmoji = (value: number) => {
  if (value <= -5) {
    return <span>&#128534;</span>;
  }

  if (value <= 0) {
    return <span>&#128533;</span>;
  }

  if (value <= 5) {
    return <span>&#128526;</span>;
  }

  return <span>&#128525;</span>;
};
