export const setColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const colorString = '#' + randomColor;
  return colorString;
};
