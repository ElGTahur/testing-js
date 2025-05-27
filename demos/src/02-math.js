function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
module.exports = {sum, multiply, divide}

function divide(a, b) {
  if(b === 0) {
    return null
  }
  return a/b;
}

const average = (values) => {

  const valuesLenght = values.lenght
  if(valuesLenght === 0) return null

const totalValues = values.reduce((a,b) => a + b, 0)
return totalValues / valuesLenght

}

module.exports = {sum, multiply, divide, average};
