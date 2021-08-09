import PluginExample from './plugin'

(() => {
  if (window.MARLON_LAB !== undefined && window.MARLON_LAB.Application) {
    const app = window.MARLON_LAB.Application
    const example = new PluginExample()
    app.instance.pluginManager.install(example)
    app.instance.pluginManager.start(example)
  } else {
    throw new Error('Cannot install plugin.')
  }
})()
