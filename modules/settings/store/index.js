// store/index.js
import settings from './modules/settings'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace var
const { namespace } = options
// create the plugin

export default ({ store }) => {
  // register the module using namespace as the name.
  // counter module takes the options object and returns an object that is a
  // vuex store defenition

  store.registerModule(namespace, settings(), {
    preserveState: Boolean(store.state[namespace]), // if the store module already exists, preserve it
  })
}
