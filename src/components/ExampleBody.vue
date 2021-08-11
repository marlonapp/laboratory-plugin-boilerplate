<template>
  <div class="example-body flex-center">
    <h1>{{ fps }}</h1>
  </div>
</template>

<script lang="ts">
import { Application } from '@marlonapp/marlon-lab'
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ExampleBody extends Vue {
  ticker = Application.instance.pixi.ticker

  get fps () {
    return Math.round(this.ticker.FPS)
  }
}
</script>

<style lang="scss" scoped>
.example-body {
  width: 100%;
  height: 100%;

  h1 {
    font-size: 62px;
  }
}
</style>
