const { resolve, join } = require('path')
const { readdirSync } = require('fs')
const PortfolioModule = function () {
  // get all options for the module
  const options = {
    namespace: 'deals',
  }

  const { namespace } = options

  this.extendRoutes((routes) => {
    routes.unshift({
      name: 'deals',
      path: '/deals',
      component: resolve(__dirname, 'pages/deals.vue'),
    })
  })

  // we can't register stores through Nuxt modules so we have to make a plugin
  const pluginsToSync = ['store/index.js']
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    })
  }

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
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
