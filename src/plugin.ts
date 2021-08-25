import { Plugin, PluginMeta } from '@marlonapp/marlon-lab'
import meta from './meta'

/**
 * ExamplePlugin Class.
 * This is the base plugin from which developer could start.
 */
export default class ExamplePlugin extends Plugin {
  meta: PluginMeta = meta

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  /**
   * On load console successfull message.
   */
  load () {
    console.log('Congratulations! Plugin installed.', this)
  }
}
