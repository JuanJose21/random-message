const messages = [
  "Juan",
  "Pedro",
  "Laura",
  "Diego",
  "Andres",
  "Paula",
]

const randomMsg = () => {
  const random = Math.floor(Math.random() * messages.length)
  console.log(messages[random])
  return messages[random]
}

module.exports = { randomMsg };