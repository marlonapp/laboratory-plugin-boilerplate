import { PluginListener, EventEnum, EventData } from '@marlonapp/marlon-lab'
import ExamplePlugin from '@/plugin'

export default class ExampleListener extends PluginListener<ExamplePlugin> {
  /**
   * Event in which subscribe.
   *
   * @returns Events
   */
  getEvents (): EventEnum[] {
    return [
      EventEnum.CUSTOM
    ]
  }

  /**
   * Get priority of listener execution.
   *
   * @returns Execution priority.
   */
  getPriority (): number {
    return 0
  }

  update (event: EventData<{ message: string }>) {
    console.log(event.data.message)
  }
}
