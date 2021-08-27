<template>
  <div class="example-body flex-center">
    <h1>Example Body</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ExampleBody extends Vue {
  //
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
