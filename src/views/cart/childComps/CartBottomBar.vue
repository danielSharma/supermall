<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="cacluate">

    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      // totalPrice() {
      //   return '￥' + this.$store.state.cartList.filter(item => {
      //     console.log(item)
      //     return item.checked
      //   }).reduce((preValue, item) => {
      //     return preValue + item.price * item.count
      //   }, 0).toFixed(2)
      // },
      totalPrice() {
        const cartList = this.$store.getters.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice
        }, 0).toFixed(2)
      },
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: relative;

    height: 40px;
    background-color: #eee;

    line-height: 40px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 30px;
  }
</style>
