import mitt from 'mitt'

const setupBuildingBlocks = (app) => {
  const emitter = mitt()
  app.config.globalProperties.emitter = emitter
}

export default setupBuildingBlocks
