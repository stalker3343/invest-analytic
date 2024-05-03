export const filterNum = (value) => {
  const minus = false
  if (isNaN(value) || !value) {
    value = 0
    return value
  }
  if (value < 0) {
    value = value + -1
  }
  const res = value
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return (minus ? '-' : '') + res
}

export const filterAmount = (value) => {
  const minus = false
  if (isNaN(value) || !value) {
    value = 0
    return value
  }
  if (value < 0) {
    value = value + -1
  }
  const res = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return (minus ? '-' : '') + res
}
