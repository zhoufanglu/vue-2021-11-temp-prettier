<template>
  <div class="p-theme">
    <span class="demonstration">主题颜色:{{ vuexTheme }}</span>
    <el-color-picker @change="pickerChange" v-model="theme"></el-color-picker>
    <el-button type="primary">2323</el-button>
  </div>
</template>
<script>
const version = require('element-ui/package.json').version
console.log(10, version)
import { mapState } from 'vuex'
export default {
  name: '',
  components: {},
  data() {
    return {
      theme: '#409EFF',
    }
  },
  computed: {
    ...mapState({ vuexTheme: state => state.mod_1.theme.color }),
  },
  created() {
    console.log(20, this.vuexTheme)
  },
  mounted() {},
  methods: {
    pickerChange() {
      console.log(23, this.theme)
      this.$store.commit('setTheme', { color: this.theme })

      if (typeof this.vuexTheme !== 'string') return
      localStorage.setItem('colorPicker', this.vuexTheme)
      const themeCluster = this.getThemeCluster(this.vuexTheme.replace('#', ''))
      const originalCluster = this.getThemeCluster(this.vuexTheme.replace('#', ''))
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(this.vuexTheme.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }

      const chalkHandler = getHandler('chalk', 'chalk-style')

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        this.getCSSString(url, chalkHandler, 'chalk')
      } else {
        chalkHandler()
      }

      const styles = [].slice.call(document.querySelectorAll('style')).filter(style => {
        const text = style.innerText
        return new RegExp(this.vuexTheme, 'i').test(text) && !/Chalk Variables/.test(text)
      })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    },
    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
          callback()
        }
      }
      xhr.open('GET', url)
      xhr.send()
    },
  },
  watch: {
    theme(val, oldVal) {},
  },
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
