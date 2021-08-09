import { EventEnum, KeyCombo, KeySpecial, Plugin } from '@marlonapp/marlon-lab'
import Vue from 'vue'
import ExampleHeader from './components/ExampleHeader.vue'
import ExampleBody from './components/ExampleBody.vue'

export default class ExamplePlugin extends Plugin {
  /** @inheritdoc */
  description: string = `
    This is the ExamplePlugin.
  `

  /** @inheritdoc */
  name: string = 'example-plugin'

  shortcuts: KeyCombo<unknown>[] = []

  canBePaused (): boolean {
    return false
  }

  constructor () {
    super()

    this.addExampleDrawerService()

    this.addExampleShortCut()

    this.registerAllListeners()
  }

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

  addExampleShortCut () {
    // CMD + 8, CTRL + 8 -> show console for output.
    this.shortcuts.push(new KeyCombo(
      'Digit8', EventEnum.CUSTOM, KeySpecial.SHORTCUTTER, { message: 'Hello' }
    ))
  }

  /**
   * On load console successfull message.
   */
  load () {
    console.log('Congratulations! Plugin installed.', this)
  }

  registerAllListeners () {
    const listeners = require.context('./listeners', false, /\.ts$/)

    listeners.keys().forEach(key => {
      // eslint-disable-next-line new-cap
      this.listeners.push(new (listeners(key).default)(this))
    })
  }
}
