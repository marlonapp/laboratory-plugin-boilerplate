import { PluginListener, EventData } from '@marlonapp/marlon-lab'
import ExamplePlugin from '@/plugin'

export default class ExampleListener extends PluginListener<ExamplePlugin> {
  /**
   * Event in which subscribe.
   *
   * @returns Events
   */
  getEvents (): (MarlonEvent|string)[] {
    return [
      'click:viewport'
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
