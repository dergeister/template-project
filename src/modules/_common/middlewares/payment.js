const paymentGuard = (hasSubscribed) => {
  if (!hasSubscribed) {
    return { name: 'home' }
  }

  return true
}

export default paymentGuard
