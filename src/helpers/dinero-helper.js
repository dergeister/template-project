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

const centsToReal = (amount) => {
  const dineroInstance = createDineroInstance(amount)

  return formatDineroInstanceToReal(dineroInstance)
}

const createInstallments = (amount, installments) => {
  const installmentsList = []

  const dineroInstance = createDineroInstance(amount)

  for (let i = 1; i <= installments; i++) {
    const diviedValue = dineroInstance.divide(i)

    installmentsList.push({
      installment: i,
      price: formatDineroInstanceToReal(diviedValue)
    })
  }

  return installmentsList
}

export { centsToReal, createInstallments }
