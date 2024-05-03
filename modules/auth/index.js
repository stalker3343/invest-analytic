const { resolve, join } = require('path')
const { readdirSync } = require('fs')
const PortfolioModule = function () {
  // get all options for the module
  const options = {
    namespace: 'auth',
  }

  const { namespace } = options

  this.extendRoutes((routes) => {
    routes.unshift({
      name: 'login',
      path: '/login',
      component: resolve(__dirname, 'pages/login.vue'),
    })
  })

  const pluginsToSync = ['store/index.js']
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    })
  }

  const foldersToSync = ['store/modules']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options,
      })
    }
  }
}

export default PortfolioModule
