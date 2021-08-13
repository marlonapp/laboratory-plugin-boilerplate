import { EventEnum, KeyCombo, KeySpecial, Plugin, PluginMeta } from '@marlonapp/marlon-lab'
import ExampleBody from '@/components/ExampleBody.vue'
import ExampleHeader from '@/components/ExampleHeader.vue'
import meta from './meta'
import Vue from 'vue'

/**
 * ExamplePlugin Class.
 * This is the base plugin from which developer could start.
 */
export default class ExamplePlugin extends Plugin {
  shortcuts: KeyCombo<unknown>[] = []

  meta: PluginMeta = meta

  constructor () {
    super()

    this.addExampleDrawerService()

    this.addExampleShortCut()

    this.registerAllListeners()
  }

  /**
   * Add a service into Drawer.
   */
  addExampleDrawerService () {
    // Register Vue Component: one for header, one for body.
    Vue.component('marlon-example-header', ExampleHeader)
    Vue.component('marlon-example-body', ExampleBody)

    this.drawerServices.push({
      name: 'renderer',
      header: {
        component: 'marlon-example-header',
        options: {}
      },
      body: {
        component: 'marlon-example-body',
        options: {}
      }
    })
  }

  /**
   * Register a shortcut.
   */
  addExampleShortCut () {
    // CMD + 8, CTRL + 8 -> show console for output.
    this.shortcuts.push(new KeyCombo(
      'Digit8', EventEnum.CUSTOM, KeySpecial.SHORTCUTTER, { message: 'Hello' }
    ))
  }

  canBePaused (): boolean {
    return false
  }

  /**
   * On load console successfull message.
   */
  load () {
    console.log('Congratulations! Plugin installed.', this)
  }

  /**
   * Register all listeners.
   */
  registerAllListeners () {
    const listeners = require.context('@/listeners', false, /\.ts$/)

    listeners.keys().forEach(key => {
      // eslint-disable-next-line new-cap
      this.listeners.push(new (listeners(key).default)(this))
    })
  }
}
