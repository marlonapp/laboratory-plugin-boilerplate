import { KeyCombo, KeySpecial } from '@marlonapp/marlon-lab'

/**
 * ExampleShortcuts.
 * When user press CMD + 8 or CTRL + 8 will dispatch a event called 'example'.
 */
export default class ExampleShortcut extends KeyCombo<unknown> {
  description = 'When user press CMD + 8 or CTRL + 8 will dispatch a event called "example".'

  constructor () {
    super('Digit8', 'example', KeySpecial.SHORTCUTTER)
  }
}
