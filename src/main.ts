import PluginExample from './plugin'
import { installPlugin } from '@marlonapp/marlon-lab'

const examplePlugin = new PluginExample()
installPlugin(examplePlugin)
