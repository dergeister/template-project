const userAuthenticationGuard = (userId) => {
  if (!userId) {
    return { name: 'home' }
  }

  return true
}

export default userAuthenticationGuard
