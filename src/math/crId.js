
const crId = (prefix) => (
  (prefix || '') +
  Date.now().toString(36) +
  Math.random().toString(36).slice(2, 9)
)

export default crId
