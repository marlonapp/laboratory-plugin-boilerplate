<template>
  <small>Renderer: {{ fps }}</small>
</template>

<script lang="ts">
import { Application } from '@marlonapp/marlon-lab'
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ExampleHeader extends Vue {
  ticker = Application.instance.pixi.ticker

  get fps () {
    return Math.round(this.ticker.FPS)
  }
}
</script>
