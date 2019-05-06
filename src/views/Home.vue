<template>
  <div class="container">
    <div class="btnBox">
      <van-button  
        :loading="btnStatus"
        loading-text="sending..."
        round
        type="primary"
        size="large"
        @click="send"
        class="light"
      >submit</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';

@Component({
  components: {
    [Button.name]: Button,
  },
})

export default class Home extends Vue {

  btnStatus: boolean = false;

  send() {
    this.btnStatus = true;
    const that = this;
    setTimeout(() => {
      that.btnStatus = false;
    }, 2000);
  }
}
</script>


<style lang="less">
.container{
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .btnBox{
    width: 198px;
    height: 43px;
  }
  .light{
    background:linear-gradient(90deg,rgba(58,169,247,1),rgba(180,120,255,1));
    border: 0;
  }
}
</style>
