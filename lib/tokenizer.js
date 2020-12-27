const trim = array => {
  while (array[array.length - 1] === '') {
    array.pop()
  }

  while (array[0] === '') {
    array.shift()
  }

  return array
}

const tokenize = (text, skipDuplicates = false) => {
  // Exclude 0308 and 030A for swedish characters
  const tokens = text.normalize('NFD')
  .replace(/[\u0300-\u0307\u0309\u030B-\u036F,.\?]/g, '')
  .split(' ')
  .filter(word => word !== '')

  if (skipDuplicates) {
    return tokens.filter((item, index) => tokens.indexOf(item) === index)
  }

  return tokens
}

export { tokenize }
