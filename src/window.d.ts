import * as MARLON_LAB from '@marlonapp/marlon-lab'

declare global {
  interface Window {
    MARLON_LAB: typeof MARLON_LAB
  }
}
