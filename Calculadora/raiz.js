const raiz = (n) => {
  if (n < 0) {
    return (-n) ** 0.5 + "i"
  } else {
    return n ** 0.5
  }
}

module.exports = raiz
