import registerCommon from './_common'
import registerCheckout from './checkout'
import registerHome from './home'

const registerModules = (app, router) => {
  registerCommon(app)
  registerHome(router)
  registerCheckout(router)
}

export default registerModules
