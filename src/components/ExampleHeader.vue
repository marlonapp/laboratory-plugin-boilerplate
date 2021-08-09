<template>
  <small>Renderer: {{ fps }}</small>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Application } from '@marlonapp/marlon-lab'

@Component({})
export default class ExampleHeader extends Vue {
  ticker = Application.instance.pixi.ticker

  get fps () {
    return Math.round(this.ticker.FPS)
  }
}
</script>
