import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'
import {BACK_POSITION} from 'common/const'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('我是混入的内容');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > BACK_POSITION
    }
  }
}
