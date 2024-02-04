import Dinero from 'dinero.js'

const createDineroInstance = (amount) => {
  return Dinero({
    amount,
    currency: 'BRL',
    precision: 2
  })
}

const formatDineroInstanceToReal = (dineroInstance) => {
  const rawValue = dineroInstance.toFormat('$0,0.00')

  return rawValue.replace('.', ',')
}

const formatCentsToReal = (amount) => {
  const dineroInstance = createDineroInstance(amount)

  return formatDineroInstanceToReal(dineroInstance)
}

export { createDineroInstance, formatDineroInstanceToReal, formatCentsToReal }
