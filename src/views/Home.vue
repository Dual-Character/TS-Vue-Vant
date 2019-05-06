<template>
  <div class="container">
    <div class="hh"></div>
    <div class="ss"></div>
    <Button>哈哈哈</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';

@Component({
  components: {
    Button,
  },
})

export default class Home extends Vue {}
</script>


<style lang="less">
.container{
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

}
</style>
