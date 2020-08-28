function yearLetters() {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

  return new Date()
    .getFullYear()
    .toString()
    .split('')
    .map(number => words[number])
    .join('')
}

module.exports = yearLetters;
